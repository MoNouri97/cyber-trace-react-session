import { useEffect, useState } from 'react';

const useFetchTodos = () => {
  const [state, setState] = useState({
    isLoading: false,
    todos: [],
    isError: false,
  });

  const getTodos = async () => {
    setState(current => ({
      ...current,
      isLoading: true,
    }));

    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos',
      );
      const data = await response.json();
      // throw Error('error');

      setTimeout(() => {
        setState(current => ({
          isError: false,
          isLoading: false,
          todos: data,
        }));
      }, 3000);
    } catch (error) {
      setTimeout(() => {
        setState(current => ({
          isLoading: false,
          todos: [],
          isError: true,
        }));
      }, 3000);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return state;
};

export default useFetchTodos;
