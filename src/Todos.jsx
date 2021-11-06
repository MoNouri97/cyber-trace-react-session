import React, { useEffect, useState } from 'react';
import useFetchTodos from './hooks/useFetch';

const Todos = () => {
  const { todos, isLoading, isError } = useFetchTodos();

  return (
    <div>
      <h3>Todos</h3>
      {isLoading ? (
        <p>Loading data .....</p>
      ) : isError ? (
        <p>Error !!!!</p>
      ) : (
        <ul className='list'>
          {todos.map(todo => (
            <li key={todo.id}>{`${todo.title} , id: ${todo.id}`}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Todos;
