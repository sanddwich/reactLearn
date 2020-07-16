import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Drawer.module.scss';

const links = [
  {to: '/', label: 'Список', exact: true},
  {to: '/auth', label: 'Авторизация', exact: false},
  {to: '/quiz-creator', label: 'Создать тест', exact: false},
];

class Drawer extends Component {
  
  renderLinks = () => {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <NavLink
            to={link.to}
            exact={link.exact}
            activeClassName={classes.active}
            onClick={this.props.onClose}
          >{link.label}</NavLink>
        </li>
      );
    });
  };

  render() {
    const insertClasses = [classes.Drawer];
    if (!this.props.isOpen) {
      insertClasses.push(classes.close);
    }

    return (
      <nav className={insertClasses.join(' ')}>
        <div style={{paddingTop: 50}}>
          <ul>{this.renderLinks()}</ul>
        </div>
      </nav>
    );
  }
}

export default Drawer;
