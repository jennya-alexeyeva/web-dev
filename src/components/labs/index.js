import React from "react";
import Classes from './classes'
import Styles from './styles';
import TodoList from "./todo/TodoList";
import {Link} from "react-router-dom";
import ConditionalOutput from "./conditional-output";

const Labs = () => {
  return(
      <>
        <h1>Labs</h1>
        <ConditionalOutput />
        <Styles />
        <Classes />
        <TodoList />
        <Link to="/hello">
          Hello
        </Link> |
        <Link to="/tuiter">
          Tuiter
        </Link>
      </>
  )
};

export default Labs;
