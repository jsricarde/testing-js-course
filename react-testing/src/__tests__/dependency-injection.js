import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";

import React from 'react'
import { render, fireEvent, wait } from 'react-testing-library'
import {GreetingLoader} from '../greeting-loader-02-mocking'
import {loadGreeting as mockLoadGreeting} from '../api'


test('loads greeting on click ', async () => {
  const mockLoadGreeting = jest.fn((subject)=>{
    return Promise.resolve({data: {greeting: `Hi ${subject}`}})
  })
  const {getByLabelText, getByText, getByTestId} = render(<GreetingLoader loadGreeting={mockLoadGreeting} />)
  const nameInput = getByLabelText(/name/i);
  const loadButton = getByText(/load/i)
  nameInput.value = 'Papu';
  fireEvent.click(loadButton);
  await wait(() => {
    return expect(getByTestId('greeting')).toHaveTextContent('Hi Papu')
  })
  expect(mockLoadGreeting).toHaveBeenCalledTimes(1)
  expect(mockLoadGreeting).toHaveBeenCalledWith('Papu')
});