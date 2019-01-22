import React from 'react'
import axios from 'axios';

class TableData extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            status: false,
            checkedItems: new Map()
        }
        this.checkboxHandle = this.checkboxHandle.bind(this)
        
    }
    checkboxHandle(event){
       console.log(this.props.data.status)
       let ticket = this.props.data
       if(ticket.status == 'open'){
           ticket.status = 'close'
       }
       axios.put(`http://dct-api-data.herokuapp.com/tickets/${ticket.ticket_code}?api_key=3e22de10030c7be3`,ticket).then(response => {
           console.log(response.data)
       })
    }
    checkHandle(){
        let data = this.props.data
        if(data.status == 'open'){
           return false
        }
        else{
            return true
            }
    
        
        
    }
    render(){
        let data = this.props.data
        
    return(
        <tr>
             <td>{this.props.code}</td>
             <td>{this.props.name}</td>
             <td>{this.props.department}</td>
             <td>{this.props.priority}</td>
             <td>{this.props.message}</td>
             <td><input type = "checkbox" onChange ={this.checkboxHandle} checked = {this.checkHandle() || this.state.checkedItems.get(data.id)}  name={data.id}></input></td>
        </tr>
    )
    }
}
export default TableData