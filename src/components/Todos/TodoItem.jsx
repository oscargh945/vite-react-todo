import { IconCross } from "../icons/IconCross.jsx";
import { IconCheck } from "../icons/IconCheck.jsx";

export const TodoItem = ({todo, updateTodo, removeTodo}) => {
  const {id, title, completed} = todo

  return (
    <article className="flex flex-none gap-4 px-4 border-b-gray-200 border-b">
      <button className={`h-5 w-5 rounded-full border-2 flex-none ${
        completed ? "grid place-items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        : "inline-block"
      }`}
      onClick={() => updateTodo(id)}>
        <IconCheck />
      </button>
      <p className={`grow text-gray-600 ${completed && "line-through"}`}>{title}</p>
      <button onClick={() => removeTodo(id)}>
        <IconCross className="hover:fill-red-600" />
      </button>
    </article>
  )
}