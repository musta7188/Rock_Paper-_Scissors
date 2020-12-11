import { Component } from 'react'
import {render, fireEvent} from '../../test-utils'
import Gamer from '../Gamer'

describe("Gamer", () =>{

  it('has class name of user if props is equal to false ', () =>{
    const {container} = render(<Gamer userChoice={'rock'} showResult={false}  />)
    expect(container.firstChild).toHaveClass("user")
  })
  it('render chip', () =>{
    const {container} = render(<Gamer />)
    expect(container.getElementsByClassName(`circle`)).toHaveLength(1)
  })

})
