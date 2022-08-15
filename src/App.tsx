import './App.css';
import Card from './component/Card/Card';
import Header from './component/Header/Header';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://analytics-api.herokuapp.com/analytics',
  cache: new InMemoryCache(),
});

// const client = ...

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Header />
        <div className="app--card">
          <Card />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
