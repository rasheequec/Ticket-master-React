import React from 'react'
import axios from 'axios'
import App from '../App'

class TicketForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: '',
            department: '',
            priority: '',
            message: '',
            dummy: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.submitHandle = this.submitHandle.bind(this)
        this.selectChange = this.selectChange.bind(this)
        this.radioChange = this.radioChange.bind(this)
    }
    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
      
    }
    selectChange(e){
        this.setState({
            department: e.target.value
        })
    }
    radioChange(e){
        this.setState({
          priority: e.target.value  
        })
    }

    
    submitHandle(e){
        e.preventDefault()
       let a = {
           name: this.state.name,
           department: this.state.department,
           priority: this.state.priority,
           message: this.state.message
       }
     
       axios.post(`http://dct-api-data.herokuapp.com/tickets?api_key=3e22de10030c7be3`, a).then(response => {
              this.props.data(response.data)       
       })
       e.target.reset()
       console.log(a)
    }
    render(){
        return(
            <div>
                <form onSubmit = {this.submitHandle}>
                    <label>Name</label>
                    <input type = "text" value = {this.state.name} onChange = {this.handleChange} name = "name"/>
                    <label>Department</label>
                    <select onChange = {this.selectChange}>
                    <option value = "">Select</option>
                    <option value = "technical">Technical</option>
                    <option value = "hr">HR</option>
                    <option value = "sales">Sales</option>
                    </select>
                    <br/><label>Priority</label><br />
                    <input onChange = {this.radioChange} type = "radio" value = "high"name = "pri"/>High<br/>
                    <input onChange = {this.radioChange} type = "radio" value = "medium"name = "pri"/>Medium<br/>
                    <input onChange = {this.radioChange} type = "radio" value = "low" name = "pri"/>Low<br />
                    <label>Message</label><br />
                    <textarea name = "message" onChange = {this.handleChange}></textarea>
                    <input type = "submit"/>
                   

                    
                </form>
            </div>
        )
    }
}
export default TicketForm