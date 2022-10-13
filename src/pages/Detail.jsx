import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate} from "react-router-dom";

const Detail = () => {
  const todo = useSelector((state) => state.todos.todo);
  const {title,body,id} = todo;
  // const { id } = useParams();
  // const detailpage = todo.find((todo)=>todo.id === Number(id));
  const navigate = useNavigate();

  return (
    <StContainer>
      <StDialog>
        <div>
          <StDialogHeader>
            <div>ID :{id}</div>
            <StButton
              borderColor="#ddd"
              onClick={() => {
                navigate(-1);
              }}
            >
              이전으로
            </StButton>
          </StDialogHeader>
          <StTitle>{title}</StTitle>
          <StBody>{body}</StBody>
        </div>
      </StDialog>
    </StContainer>
  );
};

export default Detail;

const StContainer = styled.div`
  border: 2px solid #eee;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StDialog = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StDialogHeader = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
`;

const StTitle = styled.h1`
  padding: 0 24px;
`;

const StBody = styled.main`
  padding: 0 24px;
`;

const StButton = styled.button`
  border: 1px solid ${({ borderColor }) => borderColor};
  height: 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
`;
