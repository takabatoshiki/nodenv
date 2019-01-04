// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import Heading from './heading';
import '../css/index.css';

export class Render {
  constructor(targetId: string) {
    const target = document.getElementById(targetId);
    if (target != null) {
      this.render(target);
    }
  }

  render(target: HTMLElement) {
    ReactDOM.render(<Heading name="Neko" />, target);
  }
}

export default new Render('neko-frontend');
