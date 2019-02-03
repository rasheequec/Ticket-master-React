import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from './Components/index'
import Progress from './Components/Graphs/progress-bar'
import {Button} from 'reactstrap'

class App extends React.Component {
render(){
  return(
    <div>
      <Index />
      <Button color="danger">hii</Button>
      
      
    </div>
  )
}
}
export default App;
