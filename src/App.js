import React from "react";
import { useState } from 'react'
import { Flex, Text, Box } from 'rebass'
import { colors, font, sizes } from './styles/variables.js'
import Header from './components/header'
import styled from 'styled-components'
import './styles/App.css';

const Todo = ({ todo, index, completeTodo, removeTodo }) => {
  return (

    <Flex flexDirection='row' justifyContent='space-between' mt='10px'
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
       <Flex> 
          <button onClick={() => completeTodo(index)}>Complete</button>
          <button onClick={() => removeTodo(index)}>x</button>
       </Flex>
    </Flex>
  );
}

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

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

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
  <>
    <Header />
      <Flex 
        flexDirection='column'
        bg={colors.black}
        height='100vh'
        alignItems='center'
        justifyContent='center'
      >
        <Flex
          flexDirection='column'
          width='50vh'
          height='50vh'
          padding='10px'
          bg={colors.white}
        >
          {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))}
          <TodoForm addTodo={addTodo} />
        </Flex>
      </Flex>
  </>
  );
}

export default App;