import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const CreateTodo = () => {
  const postTodo = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;

    const res = await fetch("http://localhost:5000/post-todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description }),
    });
    if (res.status === 200) {
      toast.success("Todo saved successfully");
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <Toaster />
      <div className="md:w-[80vw] md:px-0 px-1 w-full mx-auto bg-slate-300 flex justify-center items-center">
        <form
          action=""
          className="mt-20 md:w-[70vw] w-full"
          onSubmit={postTodo}
        >
          <div className="mb-5">
            <label htmlFor="title" className="text-xl">
              Title :
            </label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="title"
              className="block px-2 py-3 rounded-tr-3xl rounded-sm w-full"
            />
          </div>
          <label htmlFor="description" className="text-xl">
            Description :
          </label>
          <div className="mb-5">
            <textarea
              name="description"
              id="description"
              rows={10}
              className="block px-2 py-3 rounded-tr-3xl rounded-sm w-full"
              placeholder="write your description here"
            ></textarea>
          </div>
          <div className="mb-2">
            <button className="bg-blue-300 w-full py-2 rounded-tr-3xl hover:bg-blue-400 transition-all duration-500">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateTodo;
