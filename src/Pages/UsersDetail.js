import React, { Fragment } from 'react'
import Users from '../components/Users/Users'


function UsersDetail (props) {
    const user = props.user
console.log(user)
    return (
        <Fragment>
      
            <Users id={user.id} employee_name={user.employee_name}
            employee_salary={user.employee_salary} 
            employee_age={user.employee_age} modalIsOpen={props.modalIsOpen} 
            />


            
        </Fragment>

    )

}


export default UsersDetail