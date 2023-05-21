import React from 'react';
import {
  NavLink,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom/cjs/react-router-dom';
import AlbumFeature from './features/Album';
import TodoFeature from './features/Todo';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className='App'>
      <p>Home Page</p>
      <p>
        <NavLink to='/todos'>Todo</NavLink>
      </p>
      <p>
        <NavLink to='/album'>Album</NavLink>
      </p>

      <Switch>
        <Redirect from='/home' to='/' />
        <Route path='/' component={TodoFeature} exact />
        <Route path='/todos' component={TodoFeature} />
        <Route path='/album' component={AlbumFeature} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
