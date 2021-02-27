import React, { Fragment, useState, useEffect } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import { Row, Col } from "react-bootstrap";
import { Container, Button } from "@material-ui/core";
import Todos from "./Todos";
import uuid from "uuidv4";
import { Alert } from "@material-ui/lab";
import DateAndTimePickers from "./DateTimePicker";


const LOCAL_STORAGE_KEY = "TODOS_KEY";

export default function App() {
  const [todoValue, setTodoValue] = useState("");
  const [todos, updateTodosList] = useState([]);
  const [showAlert, changeAlertState] = useState(false);
  const [time, setTime] = useState("");

  const changeTime = (timeValue) => {
    setTime(timeValue)
    console.log(timeValue);
  }

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // console.log(storedTodos);
    if (storedTodos) updateTodosList(storedTodos);
  }, []);

  // saving the todos in browser storage to prevent loss of todos on refreshing tab
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  // handling change in input box
  const handleInputChange = event => {
    setTodoValue(event.target.value);
    if (showAlert === true) {
      changeAlertState(false);
    }
  };

  const handleButtonClick = () => {
    if (todoValue !== "") {
      const newItem = {
        id: uuid(),
        todo: todoValue,
        isDone: false,
        time: time
      };
      updateTodosList(previousTodos => {
        return [...previousTodos, newItem];
      });
      setTodoValue("");
    } else {
      changeAlertState(true);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleButtonClick();
    }
  }

  const markComplete = id => {
    console.log(todos)
    const updatedTodo = todos.map(item => {
      if (item.id === id) {
        item.isDone = !item.isDone;
      }
      return item;
    });
    updateTodosList(updatedTodo);
  };

  const delTodo = id => {
    updateTodosList([
      ...todos.filter(todo => {
        return todo.id !== id;
      })
    ]);
  };

  return (
    <Fragment>
      <Container className="mt-3 p-3 ">
        <h2 className=" p-3 text-left header-color text-white">
          <em>Todo List</em>
        </h2>

        <Row className="p-2 mt-3 mx-auto">
          <Col xs={12} sm={12} md={12}>
            {showAlert ? <Alert variant="filled" severity="error" className="fade show" show={showAlert}>
              Please enter what you want to do...
            </Alert> : ""}
          </Col>
          <Col
            xs={12}
            sm={12}
            md={8}
            className="p-3 d-flex justify-content-center"
          >
            <textarea
              className="shadow form-control d-flex justify-content-center "
              type="text"
              value={todoValue}
              style={{ height: "50px" }}
              onChange={handleInputChange}
              placeholder="Tell me what to do..."
              onKeyDown={handleKeyPress}
            />
          </Col>
          <Col
            xs={10}
            sm={10}
            md={2}
            className="p-4 d-flex justify-content-center"
          >
            <DateAndTimePickers className="shadow form-control d-flex justify-content-center " onTimeChange={changeTime} />
          </Col>
          <Col
            xs={10}
            sm={10}
            md={2}
            className="p-4 d-flex justify-content-center"
          >
            <Button
              variant="contained" color="primary"
              className="addItem btn-md w-20 shadow "
              onClick={handleButtonClick}
            >
              Add Item
            </Button>
          </Col>
        </Row>
      </Container>
      <Todos todos={todos} time={time} markComplete={markComplete} delTodo={delTodo} />
    </Fragment>
  );
}
