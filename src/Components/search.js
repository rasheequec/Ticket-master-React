import React from 'react'

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
           <div>
               <label>Search:</label>
               <input type = "text"name = "searchdata" placeholder = "search" onBlur = {this.searchHandle}/>
           </div>
       )
   }
}
export default Search