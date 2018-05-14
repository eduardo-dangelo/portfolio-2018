import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App/App'
import ContentManagement from './components/ContentManagement'
import { BrowserRouter as Router, Route } from "react-router-dom"
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route exact path="/admin" component={ContentManagement}/>
    </div>
  </Router>
  , document.getElementById('root'));
registerServiceWorker();
