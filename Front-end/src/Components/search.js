import React from 'react'
import {Input, Col} from 'reactstrap'

class Search extends React.Component{
   constructor(props){
       super(props)
       this.state = {
           searchdata:''
       }
       this.searchHandle = this.searchHandle.bind(this)
   }

 

   searchHandle(e){
       this.setState({
           [e.target.name]: e.target.value  
       })
       this.props.handleSearch(e.target.value)
       
   }


   render(){
       return(
        
               <Input type = "text"name = "searchdata" placeholder = "search by code" onChange = {this.searchHandle}/>
        
       )
   }
}
export default Search