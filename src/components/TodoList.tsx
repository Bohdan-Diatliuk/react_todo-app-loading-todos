/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Todo } from '../types/Todo';

interface TodoListProps {
  todos: Todo[];
}

export const TodoList: React.FC<TodoListProps> = ({ todos }) => (
  <section className="todoapp__main" data-cy="TodoList">
    {todos.map(todo => (
      <div key={todo.id} className="todo" data-cy="Todo">
        <label className="todo__status-label">
          <input
            type="checkbox"
            className="todo__status"
            checked={todo.completed}
            readOnly
          />
        </label>

        <span className="todo__title">{todo.title}</span>
      </div>
    ))}
  </section>
);
