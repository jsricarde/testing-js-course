import 'jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each'
import React from 'react'
import {FavoriteNumber} from '../favorite-number'
import {render, fireEvent} from 'react-testing-library'

test('entering an invalid value shows an error message', ()=> {
  const {getByLabelText, debug, container, getByText, getByTestId, rerender, queryByTestId} = render(<FavoriteNumber />)
  const input = getByLabelText(/favorite number/i)
  fireEvent.change(input, {target: {value: 10}})
  // expect(container).toHaveTextContent(/the number is invalid/i)
  // expect(getByText(/the number is invalid/i)).toBeTruthy()
  expect(getByTestId('error-message')).toHaveTextContent(/the number is invalid/i)
  // debug()
  rerender(<FavoriteNumber max={10}/>)
  // debug()
  expect(queryByTestId('error-message')).toBeNull()

})