import React from "react";
import { useState } from 'react'
import './styles/App.css';
import Header from './components/header'
import Layout from './components/layout'
import FormBox from './components/formBox'
import TodoTabs from './components/todoTabs'
import TodoNew from './components/todoNew'

const App = () => {
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false
    },
    {
      text: "Build really cool todo app",
      isCompleted: false
    }
  ]);
  // example todo tabs 

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  // text is input value 
  // function is passed to TodoNew component

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
    // onClick of completed button tab 
    // index of current tab passed to function as prop 
    // todos array deconstructed
    // isCompleted = true || strikethrough of tab 
    // change value of todos array value 
  };


  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    // onClick of x button on tab 
    // index of current tab passed to function as prop 
    // todos array deconstructed
    // remove selected tab 
    // change value of todos array value
  };
  
  
  return (
  <>
    <Header />
      <Layout>
        <FormBox>
          <TodoNew addTodo={addTodo} />
            {todos.map((todo, index) => (
              <TodoTabs
                key={index} // unique key 
                index={index}
                todo={todo}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
              />
          ))}
        </FormBox>
      </Layout>
  </>
  );
}

export default App;