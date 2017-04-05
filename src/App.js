import React, { Component } from 'react';
import {Link} from 'react-router'


export class App extends Component {
  render() {
    return (
      <div>
        <nav>
          {/*Aca deben ir los links de navegacion*/}
          <li><Link to="page1">Page 1</Link></li>
          <li><Link to="page2">Page 2</Link></li>
        </nav>
        {/* Aca tienes que agreager algo para que las rutas funcionen*/}
          {this.props.children}
      </div>
    )
  }
}

// No tienes que hacer nada por debajo de esta linea
//==================================================


export const Page1 = (props) => {
  return (
    <h1>Pagina 1</h1>
  )
}

export const Page2 = (props) => {
  return (
    <h1>Pagina 2</h1>
  )
}

export const NotFound = (props) => {
  return (
    <h1>Pagina no encontrada</h1>
  )
}
