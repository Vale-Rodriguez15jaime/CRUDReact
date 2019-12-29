import React, { Fragment } from 'react'
import {ButtonSave, Form, Container, Input, Item, Titlee} from './styles'
import {TableUsers, Thead, Tr, Th,Tbody, Td} from '../UsersList/styles'


class UsersForm extends React.Component {

    render () {
        return(
            <Fragment>
                <Container>
                <Form >
                <Titlee>Datos De Usuario</Titlee>
               
                    <TableUsers>
                    <Thead>
                    <Tr>
                    {this.props.isEdit ? 
                    <Th>Id</Th> : null }
                    <Th>Nombre</Th>
                    <Th>Edad</Th>
                    <Th>Salario</Th>
                    
                    </Tr>

                    </Thead>
                    <Tbody>

                    <Tr>
                    {this.props.isEdit ? 
                    <Td><Input onChange={this.props.onChange}
                        type='number'
                        name='id'
                        value={this.props.formValues.id} 
                        /></Td> : null}
                    <Td><Input onChange={this.props.onChange}
                        type='text'
                        name='name'
                        value={this.props.formValues.name} 
                       /></Td>
                    
                    <Td><Input onChange={this.props.onChange}
                        type='number'
                        name='age'
                        value={this.props.formValues.age}
                        /></Td>
                    <Td><Input onChange={this.props.onChange}
                        type='number'
                        name='salary'
                        value={this.props.formValues.salary}
                        /></Td>

                    </Tr>
                    </Tbody>
                    </TableUsers>


                    
                    <Item>
                        <ButtonSave onClick={this.props.onSubmit}>Guardar</ButtonSave>
                   
                    </Item>
                    


                </Form>
            </Container>
            </Fragment>

        )
    }

}

export default UsersForm