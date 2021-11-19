import React from 'react';
import Footer from './Footer';
import AddTask from '../containers/AddTask';
import VisibleTodoList from '../containers/VisibleTodoList';
import '../App';

const App = () => (
    <div className="div">
    <div className="todo-container ">
    <AddTask />
    <VisibleTodoList />
    <Footer />
  </div>
  </div>
)

export default App