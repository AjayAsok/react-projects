import React from "react";
import "./App.css";
import { Fragment } from "react";
import { Form } from "react-bootstrap";

export default function Todo(props) {
  const { id, todo: task, isDone, time } = props.items;
  const dateTimeSplit = time.split("T")

  // responsible for styling todo  when a todo is checked
  const getStyle = () => {
    return {
      cursor: "pointer",
      textDecoration: isDone ? "line-through" : "none"
    };
  };

  return (
    <Fragment>
      <div
        className="alert alert-dismissible fade show todo-color w-75 mx-auto shadow-lg"
        role="alert"
      >
        <div
          key={id}
          onClick={() => props.markComplete(id)}
        >
          <Form.Check
            className="trigger"
            custom
            onChange={() => { }}
            checked={isDone}
            id={id}
            date={dateTimeSplit ? dateTimeSplit[0] : ""}
            time={dateTimeSplit ? dateTimeSplit[1] : ""}
            type={"checkbox"}
            label={
              <strong className="ml-3" style={getStyle()}>
                {dateTimeSplit && dateTimeSplit.length === 2 ? task + " on " + dateTimeSplit[0] + " at " +
                  dateTimeSplit[1] : task}
              </strong>
            }
            onClick={() => props.markComplete(id)}
          />
        </div>
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
          onClick={() => props.delTodo(id)}
          style={{ cursor: "pointer" }}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </Fragment>
  );
}
