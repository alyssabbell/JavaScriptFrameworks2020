import React from 'react';
//let items = [];

const Todo = (props) => {
    return (
        <>
          {props.todos.map(todo => {
            return props.showCompleted === todo.completed ? (
              <p key={"todo-" + todo.id}>{todo.title}</p>
            ) : (
              undefined
            );
          })}
        </>
    );
    
    // if(props.showCompleted)
    // {
    //     props.todos.forEach(todo => {
    //         if(todo.completed === true)
    //         {
    //             items.push(todo.title)
    //         }
    //     });
    // }
    // else {
    //     props.todos.forEach(todo => {
    //         if(todo.completed === false)
    //         {
    //             items.push(todo.title)
    //         }
    //     });
    // }
   
    // items.forEach((item) => {
    //     return (
    //         <div>{ item }</div>  
    //    )
    // });
}

export default Todo;