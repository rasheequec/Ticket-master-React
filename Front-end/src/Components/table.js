import React from 'react'
import TableData from './table-data'
import { Table } from 'reactstrap'


class MyTable extends React.Component{
  
    
   render(){
       return(
           <div>
               
               <Table striped>
                   <thead>
                       <tr>
                           <th scope="row">Code</th>
                           <th scope="row">Name</th>
                           <th scope="row">Department</th>
                           <th scope="row">Priority</th>
                           <th scope="row">Message</th>
                           <th scope="row">Status</th>
                        </tr>
                   </thead>
                   <tbody>
                       {this.props.data.map((dat)=>{
                           return <TableData progress = {this.props.progress} data = {dat} key = {dat.id} code = {dat.ticket_code} name = {dat.name} department = {dat.department} priority = {dat.priority} message = {dat.message} status = {dat.status}/>


                       })}
                       
                       
                    </tbody>
                    
                   
                   
               </Table>
                     
           </div>
       )
   }
   
}
export default MyTable