import { useEffect, useState } from "react"
import layout from '../styles/Layout.module.css'

export default function Article() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            const res = await fetch('https://jsonplaceholder.typicode.com/todos');
            const data = await res.json();
            setTodos(data);
        }

        fetchData();
    }, []);
  return (
    <div>
        {todos.length === 0 ? (
            <div>loading .... </div>
        ) : (
            todos.map((todo) => {
                return (
               <div key={todo.id}>
                <p>{todo.id} : {todo.title}  
                <span className={layout.padding} key={todo.id}></span></p> 
               
                 </div> 

                )
            })
        )
    }
    </div>
  )
}