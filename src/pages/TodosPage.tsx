import React, {useState, useEffect} from  'react'
import { TodoForm } from '../components/TodoForm';
import {ITodo} from '../components/interfaces';
import { TodoList } from '../components/TodoList';

export const TodoPage:React.FC = () => {
    const [todos,setTodos] = useState<ITodo[]>([]);

    useEffect( () => {
        const savedTodo = JSON.parse(localStorage.getItem('todos') || '[]');
       setTodos(savedTodo) 
        
    },[]);
    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify(todos))   
    },[todos]);

    const addHandler = (title:string) => {
      const newTodo:ITodo = {
        id:Date.now(),
        title:title,
        completed:false
      }
      setTodos([newTodo,...todos])
    }
  
    const toggleHandler = (id:number) => {
  
       const updatedTodo = todos.map( todo => {
                if(todo.id === id){
                    todo.completed = !todo.completed
                }
         return todo
       });
     setTodos(updatedTodo)
    }
  
  const removeHandler = (id:number) => {
      
    if (window.confirm('Are you sure to delete this todo ?')) {
      const updatedTodo = todos.filter( todo => todo.id !== id);
      setTodos(updatedTodo)
    } 
  }
    return (
        <>
            <TodoForm onAdd={addHandler}/>
            <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler}/>
        </>
    )
}