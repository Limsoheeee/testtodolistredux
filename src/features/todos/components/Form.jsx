import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../../redux/modules/todos.js";

const Form = () => {
  const toDoList = useSelector((state)=>state.todos.todos);
  const dispatch = useDispatch();
  
  const [title, setTodoTItle] = useState("");
  const [body, setTodoBody] = useState("");
  
 
  const onChangeHandler = (event) => {
    const { name,value } = event.target;
   if(name==="title"){
    setTodoTItle(value);
   }else if(name === "body")
    setTodoBody(value);
  };
 
  const onClickHandler = (event) => {
    event.preventDefault();
    const card = { title, body, isDone:false, id:toDoList[toDoList.length-1]?.id+1||0}
    if (card.title && card.body !== ""){
      dispatch(addTodo(card))
    } else{
      return null
    }
    setTodoTItle("");
    setTodoBody("")
  };
 
  return (
    <StAddForm>
      <StInputGroup>
        <StFormLabel>제목</StFormLabel>
        <StAddInput
          type="text"
          name="title"
          value={title}
          onChange={(event)=>onChangeHandler(event)}
        />
        <StFormLabel>내용</StFormLabel>
        <StAddInput
          type="text"
          name="body"
          value={body}
          onChange={(event)=>onChangeHandler(event)}
        />
      </StInputGroup>
      <StAddButton onClick={onClickHandler}>추가하기</StAddButton>
    </StAddForm>
  );
};

export default Form;

const StInputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StFormLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
`;

const StAddForm = styled.div`
  background-color: #eee;
  border-radius: 12px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  gap: 20px;
`;

const StAddInput = styled.input`
  height: 40px;
  width: 240px;
  border: none;
  border-radius: 12px;
  padding: 0 12px;
`;

const StAddButton = styled.button`
  border: none;
  height: 40px;
  cursor: pointer;
  border-radius: 10px;
  background-color: teal;
  width: 140px;
  color: #fff;
  font-weight: 700;
`;
