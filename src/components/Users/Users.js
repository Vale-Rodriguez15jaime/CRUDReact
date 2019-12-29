import React, {Fragment} from 'react';
import { Tbody, Thead, TableUsers,Th, Tr, Td, TdActions,LinkBack ,LinkEdit, ButtonRemove, Card, Container, Title } from './styles'
import { MdModeEdit,MdDelete } from "react-icons/md";
import { IoMdArrowRoundBack } from "react-icons/io";

import {withGlobalState } from 'react-globally'

const SIZE = '30px'
class Users extends React.Component {

openModal = e => {
    console.log(this.props)
    this.props.setGlobalState({isOpenDeleteModal: true, deleteEmploye_id: this.props.id})

}

    render() {
    console.log(this.props.id)
        return (
            <Fragment>

      <br/> <br /><br />


      <Card>

                         <Container>
                        <LinkBack to ='/'><IoMdArrowRoundBack size={SIZE} /> </LinkBack>
                        <Title> Detalles del Usuario</Title>
                        </Container>


      <TableUsers>
                    <Thead>
                    <Tr>
                    
                    <Th>Id</Th>
                    <Th>Nombre</Th>
                    <Th>Edad</Th>
                    <Th>Salario</Th>
                    <Th>Opciones</Th>
                    </Tr>

                    </Thead>
                    <Tbody>

                    <Tr>
                    <Td>{this.props.id}</Td>
                    <Td>{this.props.employee_name}</Td>
                    <Td>{this.props.employee_age}</Td>
                    <Td>${this.props.employee_salary}</Td>
                    
                    <TdActions>
                    <LinkEdit to ={`/employee/edit/${this.props.id}`}><MdModeEdit size={SIZE} /> </LinkEdit>
                    <ButtonRemove onClick={this.openModal}> <MdDelete size={SIZE} /></ButtonRemove>
             
             
                 </TdActions>
                    </Tr>
                    </Tbody>
                    </TableUsers>

                      
     
      </Card>
    </Fragment>
        )
    }

}

export default withGlobalState(Users)
