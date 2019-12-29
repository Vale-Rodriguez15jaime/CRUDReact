import React, {Fragment} from 'react'
import {Tr, Thead, Th,TableUsers, Tbody, InputSearch, Label, Form, Title} from './styles'



import UsersListItem from '../UsersListItem/UsersListItem'

   
         function useSearch(users) {
            const [query, setQuery] = React.useState('');
            const [filteredUsers, setFilteredUsers] = React.useState(users)
    
            React.useMemo( () => {
                const result = users.filter(users => {
                    return `${users.employee_name}`.toLowerCase().includes(query.toLowerCase())
    
                })
                setFilteredUsers(result)
            }, [users, query])
            return {query, setQuery, filteredUsers}
        }
        function UsersList(props){
        const users = props.users;

        const {query, setQuery, filteredUsers} = useSearch(users)
        if (filteredUsers.length === 0) {
            return(
                <Fragment>

                   
                    <Form>
                        <Label> Buscar </Label>
                        <InputSearch type='text' placeholder='Escriba aqui...' value={query} onChange={(e)=>{
                        setQuery(e.target.value)
                
                    }}/>
                  

                    </Form>

                  
                </Fragment>
            )

        }

        return (
            <Fragment>
                <Form>
                    <Label>Buscar</Label>
                    <InputSearch type="text" 
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value) 
                    }}
                    />
                </Form>
                
                    <Title>Lista de Usuarios</Title>
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

                    {filteredUsers.map((users) => {
                        return(
                            
                            
                            <UsersListItem key={users.id} users={users} />
                            
                            
                            )
                        })}
                    </Tbody>
                    </TableUsers>
                        

            </Fragment>
        )

    }







export default UsersList