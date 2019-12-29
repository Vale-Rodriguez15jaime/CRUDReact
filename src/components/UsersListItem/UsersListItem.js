import React, {Fragment} from 'react'
import { MdVisibility, MdModeEdit,MdDelete } from "react-icons/md";
import {Tr, Td, LinkRead,LinkEdit,  TdActions, ButtonRemove} from '../UsersList/styles'
import {withGlobalState } from 'react-globally'

const SIZE = '30px'

class UsersListItem extends React.Component{
    openModal = e => {
        console.log(this.props)
        this.props.setGlobalState({isOpenDeleteModal: true, deleteEmploye_id: this.props.users.id})
    
    }
    render() {
        return(
       
<Fragment>
   
    <Tr>
    <Td>{this.props.users.id}</Td>
    <Td>{this.props.users.employee_name}</Td>
    <Td>{this.props.users.employee_age}</Td>
    <Td>${this.props.users.employee_salary}</Td>
    
    <TdActions><LinkRead to ={`/employee/${this.props.users.id}`}><MdVisibility size={SIZE} /></LinkRead>
    <LinkEdit to ={`/employee/edit/${this.props.users.id}`}><MdModeEdit size={SIZE} /> </LinkEdit>
    <ButtonRemove onClick={this.openModal}> <MdDelete size={SIZE} /></ButtonRemove></TdActions>
    </Tr>
    
</Fragment>
       
        )
    }
}

export default withGlobalState(UsersListItem)