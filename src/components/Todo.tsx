const Todo = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center gap-x-5">
      <input
        type="text"
        className="text-gray-700 border-gray-900 border-2 rounded p-2.5 w-1/4"
        placeholder="Enter task ...."
      />

      <button className="border-2 border-blue-400 p-2.5 bg-blue-400 rounded text-white w-20">
        Add
      </button>
    </div>
  );
};

export default Todo;
