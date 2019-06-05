import 'jest-dom/extend-expect'
import React from 'react'
import ReactDOM from 'react-dom'
import {FavoriteNumber} from '../favorite-number'
// import {queries} from 'dom-testing-library'
import {getQueriesForElement} from 'dom-testing-library'

function render(ui) {
  const container = document.createElement('div')
  ReactDOM.render(ui, container)
  const queries = getQueriesForElement(container)
  return {
    container,
    ...queries,
  }
}

test('renders a number input with a label "Favorite Number"', ()=> {
  const {getByLabelText} = render(<FavoriteNumber />)
  const input = getByLabelText(/favorite number/i)
  expect(input).toHaveAttribute('type', 'number')
})