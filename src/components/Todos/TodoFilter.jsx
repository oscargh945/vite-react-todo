export const TodoFilter = ({changeFilter, filter}) => {
  return (
    <section className="container mx-auto mt-6 ">
      <div className="flex justify-center rounded-md bg-white overflow-hidden p-2 gap-4 text-gray-500">
        <button
          onClick={() => changeFilter("all")}
          className={`${filter === "all"
            ? "text-blue-600  hover:text-gray-500" 
            : "text-gray-500 hover:text-blue-600" }`}>All</button>
        <button
          onClick={() => changeFilter("active")}
          className={`${filter === "active"
            ? "text-blue-600  hover:text-gray-500"
            : "text-gray-500 hover:text-blue-600" }`}>Active</button>
        <button
          onClick={() => changeFilter("completed")}
          className={`${filter === "completed"
            ? "text-blue-600  hover:text-gray-500"
            : "text-gray-500 hover:text-blue-600" }`}>Completed</button>
      </div>
    </section>
  )
}