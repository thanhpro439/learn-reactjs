import React from 'react';
import {
  Route,
  Switch,
  useRouteMatch,
} from 'react-router-dom/cjs/react-router-dom.min';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';

function TodoFeature(props) {
  const match = useRouteMatch();
  return (
    <div className='todo-list'>
      <Switch>
        <Route path={match.path} component={ListPage} exact />
        <Route path={`${match.path}/:todoID`} component={DetailPage} />
      </Switch>
    </div>
  );
}

export default TodoFeature;
