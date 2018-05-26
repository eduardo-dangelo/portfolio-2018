import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App/App'
import ContentManagement from './components/ContentManagement'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ApolloProvider  } from 'react-apollo'
import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import registerServiceWorker from './registerServiceWorker'
import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws'
import * as WebSocket from 'isomorphic-ws'

// Simple API:        https://api.graph.cool/simple/v1/cjhfdhnwc1gyg0196jr0feqnf
// Relay API:         https://api.graph.cool/relay/v1/cjhfdhnwc1gyg0196jr0feqnf
// Subscriptions API: wss://subscriptions.graph.cool/v1/cjhfdhnwc1gyg0196jr0feqnf

const httpLink = new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cjhfdhnwc1gyg0196jr0feqnf' })

const wsClient = new SubscriptionClient('wss://subscriptions.graph.cool/v1/cjhfdhnwc1gyg0196jr0feqnf', {
  reconnect: true,
  timeout: 20000
}, WebSocket)

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  dataIdFromObject: o => o.id,
  wsClient
})


ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/admin" component={ContentManagement}/>
      </Switch>
    </Router>
  </ApolloProvider>,
  document.getElementById('root'));
registerServiceWorker();
