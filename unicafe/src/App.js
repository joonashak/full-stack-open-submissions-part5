import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

class App extends Component {
  render() {
    const { good, ok, bad } = store.getState();

    return (
      <div>
        <h4>
          Anna palautetta
        </h4>
        <button onClick={() => store.dispatch({ type: 'GOOD' })}>
          Hyvä
        </button>
        <button onClick={() => store.dispatch({ type: 'OK' })}>
          Neutraali
        </button>
        <button onClick={() => store.dispatch({ type: 'BAD' })}>
          Huono
        </button>

        <h4>
          Statistiikka
        </h4>
        <p>
          {`hyvä ${good}`}
        </p>
        <p>
          {`neutraali ${ok}`}
        </p>
        <p>
          {`huono ${bad}`}
        </p>
        <p>
          {`hyviä ${Math.round(good / (good + ok + bad) * 100) || '-'} %`}
        </p>
        <button onClick={() => store.dispatch({ type: 'ZERO' })}>
          nollaa tilasto
        </button>
      </div>
    );
  }
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};

renderApp();
store.subscribe(renderApp);

export default App;
