import React from 'react'
import axios from 'axios'
import Table from './table'
import TicketForm from './form'
import Search from './search'






class Index extends React.Component{

constructor(props){
    super(props)
    this.state = {
      tabledata: [],
      searchData: []
    }
    this.formUpdate = this.formUpdate.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }
  componentDidMount(){
    
    axios.get('http://dct-api-data.herokuapp.com/tickets?api_key=3e22de10030c7be3').then(response =>{
        this.setState({
            tabledata: response.data,
            searchData: response.data
        })
    })
    
}

handleSearch(code) {
    this.setState(prevState => {
        return {
            tabledata: prevState.tabledata.filter(ticket => ticket.ticket_code.toLowerCase().indexOf(code.toLowerCase()) >= 0)
        }
    })
}
// let result = this.props.responseData().filter(ticket =>{
//     return ticket.ticket_code == event.target.value
// })


formUpdate(data){
    this.setState((prevState)=>{
        return{
            tabledata: prevState.tabledata.concat(data)
        }
    })
}
  render() {
    return (
     <div>
       <h2>Listing Tickets - {this.state.tabledata.length}</h2>
        <Search data = {this.state.tabledata} handleSearch = {this.handleSearch}/>
        <Table data = {this.state.tabledata}/>
        <TicketForm data = {this.formUpdate}/>
     </div>
    );
  }
}
export default Index