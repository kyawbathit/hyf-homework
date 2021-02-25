import React from 'react';

const toDos = [
  {
    description: "Get out of bed",
    deadline: "Wed Sep 13 2017"
  },
  {
    description: "Brush teeth",
    deadline: "Thu Sep 14 2017"
  },
  {
    description: "Eat breakfast",
    deadline: "Fri Sep 15 2017"
  }

]

function Header () {
  return (
    <h1>Todo List</h1>
  )
}

function ListItems (props) {
  return (
    <li>
      {props.description} : {props.deadline}
    </li>
    
  )
};

function App() {
  return (
    <div>
      <Header />
      <ol> 
        {toDos.map(toDo => {
          return (<ListItems description = {toDo.description} deadline = {toDo.deadline} />)
        })
        }
      </ol>
    </div> 
  );
}

export default App;
