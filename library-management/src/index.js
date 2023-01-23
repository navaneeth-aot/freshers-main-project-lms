import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloClient , InMemoryCache , gql , ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri : 'http://localhost:8080/graphql',
  cache : new InMemoryCache()
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client = { client }>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </ApolloProvider>
  
);
