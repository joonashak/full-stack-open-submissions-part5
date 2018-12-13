import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducer from './reducer';


const store = createStore(reducer);

class App extends React.Component {
  constructor() {
    super();
    this.input = React.createRef();
  }

  render() {
    const anecdotes = store.getState().sort((a, b) => b.votes - a.votes);

    return (
      <div>
        <h4>
          Anecdotes
        </h4>

        {
          anecdotes.map((anecdote) => (
            <p key={anecdote.id}>
              {anecdote.content}
              <br />
              has {anecdote.votes} 
              <button onClick={() => store.dispatch({ type: 'VOTE', id: anecdote.id })}>
                vote
              </button>
            </p>
          ))
        }

        <h4>
          Create New
        </h4>

        <input type="text" ref={this.input} />
        <button onClick={() => store.dispatch({ type: 'NEW', content: this.input.current.value })}>
          create
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
