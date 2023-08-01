import React from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

const Home: React.FunctionComponent = () => {
  return (
    <>
      <main>
        <TodoForm />
        <TodoList isDone={false} />
        <TodoList isDone={true} />
      </main>
    </>
  );
};

export default Home;
