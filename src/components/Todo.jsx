import { useRef, useState } from "react";
import "../App.css";

const Todo = () => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  // Add New ToDo functions
  const addTodo = () => {
    if (!item) {
      alert("Task can't be empty");
    } else if (list.some((i) => i === item)) {
      alert("Task already exists");
    } else {
      console.log(list);
      const updatedList = [...list, item];
      setList(updatedList);
    }
  };

  // Delete ToDo functions
  const delTodo = (i) => {
    const updatedList = [...list]; // Create a copy of the list
    updatedList.splice(i, 1); // Remove the item at index 'i'
    setList(updatedList);
  };

  return (
    <div className="container">
      <div className="todo_app border p-3 rounded shadow-0">
        <h3 className="mb-3">TODO APP</h3>
        <input
          type="text"
          className="form-control"
          placeholder="Write your task here"
          onChange={(e) => {
            setItem(e.target.value.trim());
          }}
        />
        <button className="btn btn-primary" onClick={addTodo}>
          Add Task
        </button>
      </div>

      {list.length !== 0 ? (
        <div className="mt-2 border p-3 rounded shadow-0">
          <h4 className="text-center text-primary">TODO LIST</h4>
          <table className="table table-bordered todo-list">
            <tbody>
              {list.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <input
                        className="form-check-input me-1"
                        type="checkbox"
                        value={item}
                        aria-label="..."
                      ></input>
                    </td>
                    <td>{item}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-sm btn-danger"
                        onClick={() => {
                          delTodo(index);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No Task to show</p>
      )}
    </div>
  );
};

export default Todo;
