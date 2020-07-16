import React, { Component } from 'react';
import classes from './Layout.module.scss';
import Quiz from '../../containers/Quiz/Quiz';
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle';
import Drawer from './../../components/Navigation/Drawer/Drawer';
import Backdrop from '../../components/Navigation/Backdrop/Backdrop';

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

        <Drawer isOpen={this.state.menu} />
        <Backdrop isOpen={this.state.menu}/>
        <MenuToggle isOpen={this.state.menu} onToggle={this.toggleMenuHandler}/>
        <main>
          <Quiz />
        </main>
      </div>
    );
  }
}

export default Layout;
