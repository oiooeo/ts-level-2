import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../redux/modules/todos";
import styled from "styled-components";

const TodoForm = () => {
  const [todo, setTodo] = useState({
    title: "",
    content: "",
  });

  const dispatch = useDispatch();

  const setValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setTodo({ ...todo, [name]: value });
  };

  const clickAddButtonHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (todo.title === "") return;

    dispatch(
      createTodo({
        ...todo,
        id: Date.now(),
        isDone: false,
      })
    );

    setTodo({
      title: "",
      content: "",
    });
  };

  return (
    <Form onSubmit={clickAddButtonHandler}>
      <InputGroup>
        <b>제목</b> &nbsp;
        <Input name="title" value={todo.title} onChange={setValue} required />
        <b>내용</b> &nbsp;
        <Input
          name="content"
          value={todo.content}
          onChange={setValue}
          required
        />
      </InputGroup>
      <AddBtn>추가</AddBtn>
    </Form>
  );
};

const Form = styled.form`
  align-items: center;
  display: flex;
  justify-content: space-between;
  background-color: #e6e6e6;
  padding: 20px;
  border-radius: 10px;
`;

const InputGroup = styled.div`
  align-items: center;
  display: flex;
`;

const Input = styled.input`
  border: none;
  border-radius: 10px;
  padding: 10px 10px;
  margin-right: 20px;
  margin-left: 10px;
`;

const AddBtn = styled.button`
  background-color: #5395ff;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  padding: 10px 50px;
  cursor: pointer;
  font-weight: 700;
`;

export default TodoForm;
