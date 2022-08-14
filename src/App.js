import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './components/Homepage'
import Gamepage from './components/Gamepage';

const playOptions = [
  {id:1, text:'Join a Game', link: 'gameplay'},
  {id:2, text:'Create a Room', link: 'createroom'},
  {id:3, text: 'Play against Computer', link: Gamepage}
]


class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage playOptions={playOptions} />}/>
          <Route path="/gameplay" element={<Gamepage/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;
