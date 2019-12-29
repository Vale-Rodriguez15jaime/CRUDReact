import React, {Fragment} from 'react'
import UsersForm from '../components/UsersForm/UsersForm'
import {Title} from './styles/styles'



function UserEdit (props) {
    const user = props.user

   return (
    <Fragment>
       
             <Title>Editar</Title>
             <UsersForm  onChange={props.onChange}
             onSubmit={props.onSubmit}
             formValues={user}
             error={props.error} isEdit={props.isEdit} />
             
         

        
    </Fragment>

)

}


export default UserEdit