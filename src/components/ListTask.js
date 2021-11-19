import React from 'react'
import PropTypes from 'prop-types'
import Task from './Task'

const ListTask = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo => (
      <Task key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
    ))}
  </ul>
)

ListTask.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default ListTask