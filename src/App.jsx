import { IconCross } from "./components/icons/IconCross.jsx";
import { Header } from "./components/Header.jsx";
import { TodoCreate } from "./components/Todos/TodoCreate.jsx";
import { TodoList } from "./components/Todos/TodoList.jsx";
import { TodoComputed } from "./components/Todos/TodoComputed.jsx";
import { TodoFilter } from "./components/Todos/TodoFilter.jsx";
import { useState } from "react";

const initialStateTodos = []

const App = () => {
    const [todos, setTodos] = useState(initialStateTodos);

    const addTodo = (title) => {
      const newTodo = {
        id: Date.now(),
        title,
        completed: false,
      }
      setTodos([...todos, newTodo])
    }

    const updateTodo = (id) => {
      setTodos(todos.map(todo => todo.id === id ? {
        ...todo, completed: !todo.completed
      } : todo));
    }

    const removeTodo = (id) => {
      const newTodo = (todos.filter(todo => todo.id !== id))
      setTodos(newTodo)
    }

    const computedItems = () => (
      todos.filter(todo => !todo.completed).length
    )

    const clearCompletedTodos = () => {
      setTodos(todos.filter(todo => !todo.completed))
    }

    const [filter, setFilter] = useState('all')

    const changeFilter = (filter) => (setFilter(filter))

    const filterTodos = () => {
      switch(filter) {
        case "all":
          return todos
        case "active":
          return todos.filter(todo => !todo.completed)
        case "completed":
          return todos.filter(todo => todo.completed)
        default:
          return todos
      }
    }

    return (
      <div className="bg-[url(./assets/images/bg-mobile-light.jpg)]
       bg-contain bg-no-repeat bg-gray-200 min-h-screen">

          <Header />

          <main className="container mx-auto mt-6 px-4">
              <TodoCreate addTodo={addTodo} />

              <TodoList todos={filterTodos()}
                        updateTodo={updateTodo}
                        removeTodo={removeTodo}
              />

              <TodoComputed computedItems={computedItems}
                            clearCompletedTodos={clearCompletedTodos}
              />

              <TodoFilter changeFilter={changeFilter} filter={filter} />
          </main>
          <footer className="text-center py-12 text-gray-500">Drag and drop to reader list</footer>
      </div>
    )
}

export default App
