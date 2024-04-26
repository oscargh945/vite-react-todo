import { TodoItem } from "./TodoItem.jsx";

export const TodoList = ({todos, updateTodo, removeTodo}) => {
  return (
    <div className="mx-auto mt-6 rounded-t-md bg-white [&>article]:p-4">
      {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} updateTodo={updateTodo} removeTodo={removeTodo}/>
        ))}
      {todos.length === 0 && (
        <article className="text-center text-gray-600" >Crea tu primer Todo</article>
      )}
    </div>
  )
}