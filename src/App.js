import './App.css';
import React from 'react';
import Main from './components/Main';
import Details from './components/Details';
import Create from './components/Create';
import 'bootstrap/dist/css/bootstrap.min.css';


const tables = [
  { category: "Sporting Goods", details: " sporting goods, are the tools, materials, apparel, and gear used to compete in a sport and varies depending on the sport." },
  { details: "Basketball is a team sport in which two teams, most commonly of five players each." },
  { details: "The iPod is a portable music player developed by Apple Computer." },
]


function App() {
  return (
    <div className="App">
      <Main />
      <button className="btn btn-sucsses">Create new product</button>


      <h1>The details of the product</h1>
      <Details details={tables[0].details} />
      <Details details={tables[1].details} />
      <Details details={tables[2].details} />

      <Create />


    </div >
  );
}

export default App;
