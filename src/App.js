import logo from "./logo.svg";
import "./App.css";
import React, {useState} from "react";
import TodoBoard from "./todo/TodoBoard";

function App() {
    const [inputValue, setInputValue] = useState("");
    const [todoList, setTodoList] = useState([]);

    const addItem = () => {
        setTodoList([...todoList, inputValue]);
    };

    const deleteItem = (index) => {
        // index에 해당하는 todoList 항목을 삭제합니다.
        const newTodoList = [...todoList];
        newTodoList.splice(index, 1);
        setTodoList(newTodoList);
    };

    return (
        <main>
            <input
                value={inputValue}
                type="text"
                onChange={(event) => setInputValue(event.target.value)}
            />
            <button onClick={addItem}>추가</button>
            <button onClick={deleteItem}>삭제</button>

            <TodoBoard todoList={todoList} deleteItem={deleteItem}/>
        </main>
    );
}

export default App;
