import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";

const Home = () => {
  const [todo, setTodo] = useState([]);

  const getTodos = async () => {
    const response = await fetch("http://localhost:5000/get-todos");
    const data = await response.json();
    setTodo(data.todos);
  };

  useEffect(() => {
    getTodos();
  }, [todo]);

  const deleteTodo = async (id) => {
    const res = await fetch(`http://localhost:5000/delete-todo/${id}`, {
      method: "DELETE",
    });
    if (res.status === 200) {
      toast.success("Todo deleted successfully");
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <Toaster position="bottom-center" reverseOrder={true} />
      <div className="w-[80vw] mx-auto flex flex-wrap gap-2">
        {todo.map((post) => (
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
        ))}
      </div>
    </>
  );
};

export default Home;
