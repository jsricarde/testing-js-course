const { sum, subtract } = require('./math.js')

let result, expected

function sumTest() {
  result = sum(3, 7)
  expected = 10
  expect(result).toBe(expected)
}

function subtractTest() {
  result = subtract(8, 3)
  expected = 5
  expect(result).toBe(expected)
}

test('sums adds numbers', () => {
  const result = sum(3, 7)
  const expected = 10
  expect(result).toBe(expected)
});

test('subtract subtracts numbers', () => {
  const result = subtract(8, 3)
  const expected = 5
  expect(result).toBe(expected)
})

function test(title, callback) {
  try {
    callback()
    console.log(`✓ ${title}`)
  } catch (error) {
    console.error(`✕ ${title}`)
    console.error(error)
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    }
  }
}