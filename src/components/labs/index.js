import React from "react";
import Classes from './classes'
import Styles from './styles';
import TodoList from "./todo/TodoList";
import {Link} from "react-router-dom";
import ConditionalOutput from "./conditional-output";
import ReduxExamples from "./redux-examples";

const Labs = () => {
  return(
      <>
        <h1>Labs</h1>
        <ConditionalOutput />
        <Styles />
        <Classes />
        <TodoList />
        <ReduxExamples />
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
