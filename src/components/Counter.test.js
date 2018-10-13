import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestUtils from 'react-dom/test-utils'
import Counter from './Counter'

describe('Counter', () => {
  let div, counter

  beforeEach(() => {
    div = document.createElement('div');
    counter = ReactDOM.render(<Counter />, div);
  })

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(div);
  })

  describe('Default counter', () => {
    it('renders default value of 0', () => {
      expect(div.querySelector('#counter').textContent)
        .toBe('Count: 0')
      expect(div.querySelector('#counter-count').textContent)
        .toBe('0')
    })
  })

  describe('Modified Counter', () => {
    it('renders value from state', () => {
      counter.setState({ counter: 42 })
      expect(div.querySelector('#counter').textContent)
        .toBe('Count: 42')
      expect(div.querySelector('#counter-count').textContent)
        .toBe('42')
    })

    for(var count = 0; count <= 10; count++) {
      describe(`Clicks the button ${count} times`, () => {
        it(`renders ${count} clicks of ++ from default`, () => {
          for(var clicks = 0; clicks <= count; clicks++) {
            ReactTestUtils.Simulate.click(
              div.querySelector('#increment')
            )
          }
          expect(div.querySelector('#counter').textContent)
            .toBe('Count: ' + clicks)
          expect(div.querySelector('#counter-count').textContent)
            .toBe(clicks.toString())
        })
        it(`renders ${count} clicks of -- from default`, () => {
          for(var clicks = 0; clicks <= count; clicks++) {
            ReactTestUtils.Simulate.click(
              div.querySelector('#decrement')
            )
          }
          expect(div.querySelector('#counter').textContent)
            .toBe('Count: -' + clicks)
          expect(div.querySelector('#counter-count').textContent)
            .toBe((-1 * clicks).toString())
        })
      })
      it(
        `clicks the -- button ${count} times, ` +
        `and the ++ button ${count * 2} times`, 
      () => {
        for(var clicks = 0; clicks <= count * 2; clicks++) {
          ReactTestUtils.Simulate.click(
            div.querySelector('#increment')
          )
        }
        for(var clicks = 0; clicks <= count; clicks++) {
          ReactTestUtils.Simulate.click(
            div.querySelector('#decrement')
          )
        }
        const expected_val = count * 2 - count
        expect(div.querySelector('#counter').textContent)
          .toBe('Count: ' + expected_val)
        expect(div.querySelector('#counter-count').textContent)
          .toBe(expected_val.toString())
        
      })
    }
  })
})
