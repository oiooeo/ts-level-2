import React from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/config/configStore";
import { Todo } from "../redux/modules/todos";

type DetailParams = {
  id: string;
};

function Detail() {
  const navigate = useNavigate();
  const params = useParams<DetailParams>();
  // const params = useParams() as { id: string };

  const stateTodos = useSelector((state: RootState) => {
    return state.todos;
  });

  const todo: Todo | undefined = stateTodos.todos.find(
    (todo) => todo.id === parseInt(params.id)
  );

  if (!todo) {
    return (
      <div>
        <p>ID가 {params.id}인 Todo를 찾을 수 없습니다.</p>
        <HomeButton
          onClick={() => {
            navigate("/");
          }}
        >
          홈으로 이동
        </HomeButton>
      </div>
    );
  }

  return (
    <DetailDiv>
      <HomeButton
        onClick={() => {
          navigate("/");
        }}
      >
        home으로 이동
      </HomeButton>
      <Text>ID : {todo.id}</Text>
      <Title>{todo.title}</Title>
      <Text>{todo.content}</Text>
    </DetailDiv>
  );
}

const DetailDiv = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  width: 400px;
  padding: 20px;
  border: 3px solid #5395ff;
  border-radius: 20px;
`;

const HomeButton = styled.button`
  float: right;
  padding: 5px 10px;
  background-color: #aeaeae;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 900;
  cursor: pointer;
`;

const Title = styled.p`
  margin-top: 30px;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 500;
`;

const Text = styled.p`
  font-size: 16px;
`;

export default Detail;
