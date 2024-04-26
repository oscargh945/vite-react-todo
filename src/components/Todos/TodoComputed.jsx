export const TodoComputed = ({computedItems, clearCompletedTodos}) => {
  return (
    <section className="flex justify-between py-4 px-4 text-gray-400 bg-white rounded-b-md">
      <span>{computedItems()} items left</span>
      <button
        onClick={() => clearCompletedTodos()}
        className="hover:text-red-600">clear completed</button>
    </section>
  )
}