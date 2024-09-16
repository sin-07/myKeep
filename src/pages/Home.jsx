import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";

const Home = () => {
  const [todo, setTodo] = useState([]);

  const getTodos = async () => {
    let response = await fetch("http://localhost:5000/get-todos");
    let data = await response.json();
    setTodo(data.todos);
  };

  useEffect(() => {
    getTodos();
  });

  const deleteTodo = async (id) => {
    let response = await fetch(`http://localhost:5000/delete-todo/${id}`, {
      method: "DELETE",
    });
    if (response.status === 200) {
      toast.success("Todo deleted successfully");
    } else {
      toast.error("Todo not found");
    }
  };

  return (
    <>
      <Toaster position="bottom-center" reverseOrder={true} />
      <div className="w-[80vw] mx-auto flex flex-wrap gap-2">
        {todo.length === 0 ? (
          <div className="flex items-center justify-center min-h-screen w-full">
            <h1 className="md:text-3xl text-xl font-bold text-gray-400">No todos is here kindly create todos...</h1>
          </div>
        ) : (
          todo.map((post) => (
            <div
              key={post._id}
              className="bg-yellow-300 w-[30vh] py-4 px-2 mt-5 rounded-tr-3xl"
            >
              <div className="relative ">
                <AiFillDelete
                  onClick={() => {
                    deleteTodo(post._id);
                  }}
                  className="absolute top-[3px] right-3 hover:text-pink-800 hover:scale-150 duration-500 transition-all"
                />
              </div>
              <h1 className="text-center bg-yellow-500 w-full rounded-full mb-2">
                {post.title}
              </h1>
              <p>{post.description}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Home;
