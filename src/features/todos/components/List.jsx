import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Todo from "./Todo.jsx";

const List = () => {
   const todos = useSelector((state) => state.todos.todos);

    const isDoneList = todos.filter((item)=>{
      return item.isDone === true;
    });
    const isNotDoneList = todos.filter((item)=>{
      return item.isDone === false;
    });
    return (
      <StListContainer>
     <h2>Working.. 🔥</h2>
     <StListWrapper>
      {isNotDoneList.map((item)=>{
        return (
          <div key={item.id}>
            <Todo item={item}/>
          </div>
        )
      })}
     </StListWrapper>
     <h2>Done.. 🔥</h2>
     <StListWrapper>
      {isDoneList.map((item)=>{
        return (
          <div key={item.id}>
            <Todo item={item}/>
          </div>
        )
      })}
     </StListWrapper>
     </StListContainer>
       );
  };

export default List;

const StListContainer = styled.div`
  padding: 0 24px;
`;

const StListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;
