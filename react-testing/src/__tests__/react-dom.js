import 'jest-dom/extend-expect'
import React from 'react'
import ReactDOM from 'react-dom'
import {FavoriteNumber} from '../favorite-number'
// import {queries} from 'dom-testing-library'
import {getQueriesForElement} from 'dom-testing-library'
import {render, cleanup} from 'react-testing-library'

afterEach(()=>{
  cleanup()
  console.log(document.body.outerHTML)
})

test('renders a number input with a label "Favorite Number"', ()=> {
  const {getByLabelText} = render(<FavoriteNumber />)
  console.log(document.body.outerHTML)
  const input = getByLabelText(/favorite number/i)
  expect(input).toHaveAttribute('type', 'number')
})