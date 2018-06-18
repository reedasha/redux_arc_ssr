import { mapDispatchToProps } from '../containers/AddTodo'
import { addTodoRequest } from 'store/actions';


describe('AddTodoContainer tests', () => {
  it('mapDispatchToProps test', () => {
    const text = 'test'
    const dispatchSpy = jest.fn()
    mapDispatchToProps(dispatchSpy).onAddTodo(text)
    expect(dispatchSpy.mock.calls).toEqual( [ [ { type: 'DEFAULT_ADD_TODO_REQUEST' } ] ])
  })
})
