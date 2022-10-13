import React from "react";
import styled from "styled-components";
import { useDispatch} from "react-redux";
import { deleteTodo, toggleStatusTodo,getTodoByID } from "../../../redux/modules/todos.js";
import { useNavigate } from "react-router-dom";

const Todo = ({item}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {title,body,isDone,id} = item;

    const onDeleteTodo = (id) => {
      dispatch(deleteTodo(id));
    };
  
    const onToggleStatusTodo = (id) => {
      dispatch(toggleStatusTodo(id));
    };
  
    const onClickDetail = (id) => {
      dispatch(getTodoByID(id));
      navigate(`/${id}`);
    }
    
     return (
        <StTodoContainer>
            <div>
                <StButtonDetail onClick={()=>{onClickDetail(id)}}>상세보기</StButtonDetail>
                <h4>{title}</h4>
                <p>{body}</p>
            </div>
            <StTextAline>
            <StButton onClick={()=>onToggleStatusTodo(id)}>
              {isDone ? "취소":"완료"}
            </StButton>
            <StDelButton onClick={()=>onDeleteTodo(id)}>삭제</StDelButton>
            </StTextAline>
            
        </StTodoContainer>
     )

}

export default Todo;


const StTodoContainer = styled.div`
  width: 270px;
  border: 4px solid teal;
  min-height: 150px;
  border-radius: 12px;
  padding: 12px 24px 24px 24px;
`;

const StTextAline = styled.div`
  text-align: center;
`;

const StButtonDetail = styled.span`
  text-decoration: none;
  color: blue;
  text-decoration: underline;
  cursor: pointer;
`;

const StButton = styled.button`
  border: 1px solid teal;
  height: 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
`;
const StDelButton = styled.button`
  border: 1px solid red;
  height: 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  margin: 5px;
  cursor: pointer;
`;
