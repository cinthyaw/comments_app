import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Post from './components/Post';

function App() {
  return (
    <div className="App">
      <Post></Post>
    </div>
  );
}

export default App;
