import Swal from "sweetalert2";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const TodoCreate = ({addTodo}) => {
  const [title, setTitle] = useState('');

  // const handleChange = (e) => {
  //   const {type, name, value } = e.target;
  //
  //   setTodo(prevTodo => (
  //     { ...prevTodo, [name]: title}
  //   ))
  // }

  const handleSubmitAddTodo = (e) => {
    e.preventDefault()

    if(!title.trim()){
      return setTitle('')
    }
    addTodo(title)
    Swal.fire({
      icon: "success",
      title: "El Todo ha sido creado correctamente",
      showConfirmButton: false,
      timer: 1500
    });

    setTitle("")
  }

  return (
    <form
      onSubmit={handleSubmitAddTodo}
      className="flex rounded-md bg-white overflow-hidden mt-4 py-2 gap-4 items-center px-4">
      <span className="h-5 w-5 rounded-full border-2 inline-block"></span>
      <input
        type="text"
        placeholder="Create a new todo..."
        className="w-full text-gray-800 outline-none"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  )
}