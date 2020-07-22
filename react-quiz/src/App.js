import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './hoc/Layouts/Layout';
import Quiz from './containers/Quiz/Quiz';
import QuizList from './containers/QuizList/QuizList';
import Auth from './containers/Auth/Auth';
import QuizCreator from './containers/QuizCreator/QuizCreator';
import LayoutAdmin from './hoc/Layouts/LayoutAdmin/LayoutAdmin';

class App extends Component {
  render() {    
    return (
      <Switch>
        <Route path='/admin' exact component={LayoutAdmin} />
        <Layout>
          <Route path='/auth' component={Auth} />
          <Route path='/quiz-creator' component={QuizCreator} />
          <Route path='/quiz/:id' component={Quiz} />
          <Route path='/' exact component={QuizList} />
          <Redirect to='/' />
        </Layout>
      </Switch>
    );
  }
}

export default App;
