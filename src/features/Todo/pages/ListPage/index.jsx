import React, { useState } from 'react';
import TodoList from '../../components/Todolist';
import {
  useLocation,
  useHistory,
  useRouteMatch,
} from 'react-router-dom/cjs/react-router-dom';
import queryString from 'query-string';
import { useEffect } from 'react';
import { useMemo } from 'react';

function ListPage(props) {
  const initTodoList = [
    {
      id: 1,
      title: 'Eat',
      status: 'new',
    },
    {
      id: 2,
      title: 'Code',
      status: 'completed',
    },
    {
      id: 3,
      title: 'Sleep',
      status: 'new',
    },
  ];

  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  const [todoList, setTodoList] = useState(initTodoList);
  const [filterList, setFilterList] = useState(() => {
    const param = queryString.parse(location.search);
    return param.status || 'all';
  });

  useEffect(() => {
    const param = queryString.parse(location.search);
    setFilterList(param.status || 'all');
  }, [location.search]);

  const renderTodoList = useMemo(() => {
    return todoList.filter(
      (todo) => filterList === 'all' || filterList === todo.status
    );
  }, [todoList, filterList]);

  const handleTodoClick = (todo, index) => {
    const newTodoList = [...todoList];
    newTodoList[index] = {
      ...todoList[index],
      status: todo.status === 'new' ? 'completed' : 'new',
    };

    setTodoList(newTodoList);
  };

  const handleShowAll = () => {
    // setFilterList('all');
    const queryParam = { status: 'all' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParam),
    });
  };
  const handleShowNew = () => {
    // setFilterList('new');
    const queryParam = { status: 'new' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParam),
    });
  };
  const handleShowCompleted = () => {
    // setFilterList('completed');
    const queryParam = { status: 'completed' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParam),
    });
  };

  return (
    <div className='todo-list'>
      <h3>Todo List</h3>
      <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick} />
      <button onClick={handleShowAll}>Show all</button>
      <button onClick={handleShowNew}>Show new</button>
      <button onClick={handleShowCompleted}>Show completed</button>
    </div>
  );
}

export default ListPage;
