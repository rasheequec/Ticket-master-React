import React from 'react'
import TableData from './table-data'


class Table extends React.Component{
  
    
   render(){
       return(
           <div>
               <table border = "2">
                   <thead>
                       <tr>
                           <th>Code</th>
                           <th>Name</th>
                           <th>Department</th>
                           <th>Priority</th>
                           <th>Message</th>
                           <th>Status</th>
                        </tr>
                   </thead>
                   <tbody>
                       {this.props.data.map(function(dat){
                           return <TableData data = {dat} key = {dat.id} code = {dat.ticket_code} name = {dat.name} department = {dat.department} priority = {dat.priority} message = {dat.message} status = {dat.status}/>


                       })}
                       
                       
                    </tbody>
                    
                   
                   
               </table>
                     
           </div>
       )
   }
   
}
export default Table