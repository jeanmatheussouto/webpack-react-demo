import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home';
import TodoApp from './components/todo_app';

ReactDOM.render(<Home />, document.getElementById('hello'));
ReactDOM.render(<TodoApp />, document.getElementById('app'));
