import React, { Component } from 'react';
import classes from './Drawer.module.scss';

const links = [1, 2, 3, 4];

class Drawer extends Component {
  renderLinks = () => {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <a style={{width:'100%'}}>Link {link}</a>
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
