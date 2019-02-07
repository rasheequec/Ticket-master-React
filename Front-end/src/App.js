import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Index from './Components/index'
import TicketForm from './Components/form'

class App extends React.Component {
render(){
  return(
    <BrowserRouter>
    <div>
      <Route path = {'/addticket'} component = {TicketForm}/>
      <Index />
      
      
    </div>
    </BrowserRouter>
  )
}
}
export default App;
