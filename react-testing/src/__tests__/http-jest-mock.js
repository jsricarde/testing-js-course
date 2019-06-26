import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";

import React from 'react'
import { render, fireEvent, wait } from 'react-testing-library'
import {GreetingLoader} from '../gretting-loader-01-mocking'
import {loadGreeting as mockLoadGreeting} from '../api'

jest.mock('../api.js', () => {
  return {
    loadGreeting: jest.fn(subject => Promise.resolve({data:{greeting: `Hi ${subject}`}}))
  }
})

test('loads greeting on click ', async () => {
  const {getByLabelText, getByText, getByTestId} = render(<GreetingLoader />)
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