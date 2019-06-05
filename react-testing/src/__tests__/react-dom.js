import 'jest-dom/extend-expect'
import React from 'react'
import ReactDOM from 'react-dom'
import {FavoriteNumber} from '../favorite-number'
import 'react-testing-library/cleanup-after-each'
// import {queries} from 'dom-testing-library'
import {getQueriesForElement} from 'dom-testing-library'
import {render} from 'react-testing-library'

test('renders a number input with a label "Favorite Number"', ()=> {
  const {getByLabelText, debug} = render(<FavoriteNumber />)
  console.log(document.body.outerHTML)
  const input = getByLabelText(/favorite number/i)
  expect(input).toHaveAttribute('type', 'number')
  debug(input)
})