import { Component } from 'react'
import {render, fireEvent} from '../../test-utils'
import Computer from '../Computer'

jest.useFakeTimers();
const computerChoiceMock = jest.fn()
describe("Computer", () =>{

  it('has class name of computer if props is equal to false ', () =>{
    const {container} = render(<Computer computerChoice={computerChoiceMock} showResult={false}  />)
    expect(container.firstChild).toHaveClass("computer")
  })

  it('call set time out and functions after 1 second', () =>{
      const {container} = render(<Computer computerChoice={computerChoiceMock} showResult={false}  />)
      expect(setTimeout).toHaveBeenCalledTimes(1)
      expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
  })



})
