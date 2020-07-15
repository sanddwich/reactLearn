import React, { Component } from 'react';
import classes from './Layout.module.scss';
import Quiz from '../../containers/Quiz/Quiz';
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle';

class Layout extends Component {

  state = {
    menu: false,
  };

  toggleMenuHandler = () => {
    this.setState({
      menu: !this.state.menu
    })
  }

  render() {
    // console.log(classes);
    return (
      <div className={classes.Layout}>
        <MenuToggle isOpen={this.state.menu} onToggle={this.toggleMenuHandler}/>
        <main>
          <Quiz />
        </main>
      </div>
    );
  }
}

export default Layout;
