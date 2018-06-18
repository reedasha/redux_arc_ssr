import React from 'react'
import { mount } from 'enzyme'
import AddTodo from '.'
import { addTodoRequest } from 'store/actions'

describe('Add todo tests', () => {
  it('Button submit test', () => {
    const props = {
      addTodoRequest: jest.fn()
    }
    const wrapper = mount(<AddTodo onAddTodo = {props.addTodoRequest}/>)
    wrapper.find('input').node.value = 'test'
    wrapper.find('form').simulate('submit');
    expect(props.addTodoRequest.mock.calls.length).toEqual(1)
  });
})
