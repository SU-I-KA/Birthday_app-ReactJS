import React, {useState} from 'react';
import './App.css';
import data from './data';
import List from './list'

function App() {
  const [people, setPeople] = useState(data);
  return (
    <div className="container">
      <h1>{people.length} birthdays today</h1>
      <List people={people}/>
      <button
        onClick={()=>{setPeople([])}}
        className='btn'
      >Clear All</button>
    </div>
  );
}

export default App;
