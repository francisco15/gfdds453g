import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRedirect} from 'react-router'
import {App, Page1, Page2, NotFound} from './App';
import './index.css';


// Implementa las rutas aca

ReactDOM.render(
   // Es posible que tengas que hacer un cambio en esta linea.
   <Router history={hashHistory}>
     <Route path="/" component={App}>
       <IndexRedirect to='page1' />
       <Route path="page1" component={Page1} />
       <Route path="page2" component={Page2} />
     </Route>
     <Route path="*" component={NotFound}/>
 </Router>,
  document.getElementById('root')
);
