import React, { Suspense } from 'react';
//import Layout from './layout';
import { GlobalStyle} from '../styles/GlobalStyles'
import { Router } from "@reach/router"
import {Navbar} from './NavBar'
import Home from '../Pages/Home'
import { withGlobalState} from 'react-globally'
import DeleteUserModal from '../components/DeleteUser/DeleteUserModal'


const UserEditContainer = React.lazy(() => import('../Pages/UserEditContainer'))
const UsersDetailContainer = React.lazy(() => import('../Pages/UsersDetailContainer'))
const UserNew = React.lazy(() => import('../Pages/UserNew'))


const App = ({globalState}) => {
        
  return (
    <Suspense fallback={<div />}>
     <GlobalStyle />
     <Navbar />
     <DeleteUserModal isOpen={globalState.isOpenDeleteModal}  empId={globalState.deleteEmploye_id}  />
     <Router>
      <Home path="/" />
      <Home path="home" />
      <UserNew path="UserNew" />
      <UsersDetailContainer path="/employee/:empId" />
      <UserEditContainer path="/employee/edit/:empId" />
    </Router>
    </Suspense>

      
      )
}

export default withGlobalState (App)