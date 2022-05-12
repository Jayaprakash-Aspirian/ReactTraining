import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

export interface IState{
  people:{
    name:string
    age:number
    url:string
    note?:string
  } []
}

function App(){
  const [people,setPeople] = useState<IState["people"]>([
    {
      name:"MS Dhoni",
      url:"",
      age:40,
      note:"Master of finishing"
    }
  ])

  return(
    <div className='App'>
      <h1>Added Persons :</h1>
      <List people={people} />
      <AddToList  people={people} setPeople={setPeople}/>
    </div>
  )
}

export default App;
