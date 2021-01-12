
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/layout/NavBar'
import Deshboard from './components/layout/Deshboard'

import './App.css'

const App =()=> 
{
  return (
    <div className="App">

      <NavBar />
      <div className="container">
        <Deshboard />
      </div>
      <tbody>
      
 
      </tbody>
      <table style={{ width: '100%' }}>
        <thead>
          <tr style={{ textAlign: 'left' }}>
            <th>Name</th>
            <th>Type</th>
            <th>Stage</th>
            <th>Species</th>
            <th>Caught</th>
          </tr>
        </thead>
        <tbody>
         
        </tbody>
      </table>
      

      <h1>Pokedex in Redux</h1>
      <form>
        <div>
          
        </div>
      </form>
     
      <table style={{ width: '100%' }}>
        <thead>
          <tr style={{ textAlign: 'left' }}>
            <th>Name</th>
            <th>Type</th>
            <th>Stage</th>
            <th>Species</th>
            <th>Caught?</th>
          </tr>
        </thead>
        <tbody>
         
        </tbody>
      </table>
    </div>
    
    
  )
}

export default App;
