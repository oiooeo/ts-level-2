import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleStatusTodo } from "../redux/modules/todos";
import styled from "styled-components";

interface Todo {
  id: number;
  title: string;
  content: string;
  isDone: boolean;
}

interface DeleteButtonProps {
  todo: Todo;
  children: React.ReactNode;
}

export const DeleteButton: React.FC<DeleteButtonProps> = ({
  todo,
  children,
}) => {
  const dispatch = useDispatch();

  const clickDeleteButtonHandler = () => {
    dispatch(deleteTodo(todo.id));
  };

  return <DeleteBtn onClick={clickDeleteButtonHandler}>{children}</DeleteBtn>;
};

interface UpdateButtonProps {
  todo: Todo;
  children: React.ReactNode;
}

export const UpdateButton: React.FC<UpdateButtonProps> = ({
  todo,
  children,
}) => {
  const dispatch = useDispatch();

  const clickUpdateButtonHandler = () => {
    dispatch(toggleStatusTodo(todo.id));
  };
  return <UpdateBtn onClick={clickUpdateButtonHandler}>{children}</UpdateBtn>;
};

const DeleteBtn = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #ff8a8a;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  margin: 25px 10px 10px 10px;
  cursor: pointer;
  font-weight: 700;
`;

const UpdateBtn = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #83c772;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  margin: 0px 10px;
  cursor: pointer;
  font-weight: 700;
`;
