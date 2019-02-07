import React from 'react'
import axios from 'axios'
import App from '../App'
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText, CustomInput} from 'reactstrap';

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
        this.formRef = React.createRef();
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
    formReset() {
        this.formRef.current.reset()
        }

    
    submitHandle(e){
        e.preventDefault()
       let a = {
           name: this.state.name,
           department: this.state.department,
           priority: this.state.priority,
           message: this.state.message
       }
     
       axios.post(`http://localhost:3001/tickets`, a).then(response => {
        this.props.data(response.data)   
       }).catch(err =>{
           console.log(err)
       })
       this.setState({
           name: ''
       })

      this.formReset()
       
       console.log(a)
    }
    render(){
        return(
            <div>
                <Form innerRef={this.formRef}>
                    <Label>Name</Label>
                    <Input type = "text" value = {this.state.name} onChange = {this.handleChange} name = "name"/>
                    <Label>Department</Label>
                    <Input type = "select" onChange = {this.selectChange}>
                    <option value = "">Select</option>
                    <option value = "technical">Technical</option>
                    <option value = "hr">HR</option>
                    <option value = "sales">Sales</option>
                    </Input>
                    
                    <Label>Priority</Label>
                    
                    <CustomInput onChange = {this.radioChange} id ="1" type = "radio" value = "high" name = "pri" label ="High"/>
                    <CustomInput onChange = {this.radioChange} id ="2" type = "radio" value = "medium" name = "pri" label = "Medium"/>
                    <CustomInput onChange = {this.radioChange} id = "3" type = "radio" value = "low" name = "pri" label = "Low"/>
                    
                    <Label>Message</Label>
                    <Input type = "textarea" name = "message" onChange = {this.handleChange}/>
                    <Button onClick = {this.submitHandle}>Submit</Button>
                   

                    
                </Form>
            </div>
        )
    }
}
export default TicketForm