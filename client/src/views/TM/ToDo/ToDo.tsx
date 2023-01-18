import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { Todo } from "../../../interfaces/Todo";
import { sendApiRequest } from "../../../utils/helpers";

const ToDo = () => {
  const { error, isLoading, data, refetch } = useQuery("todos", async () => {
    return await sendApiRequest<Todo[]>("/api/todo", "GET");
  });
  console.log(data);

  return (
    <>
      <h2>My To Do's </h2>
      {isLoading ?? <p>Loading ...</p>}
      {data &&
        data.map((todo) => (
          <div key={todo._id}>
            <h3>{todo.title}</h3>
          </div>
        ))}
    </>
  );
};

export default ToDo;
