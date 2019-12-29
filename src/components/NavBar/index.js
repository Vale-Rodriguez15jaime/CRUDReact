import React from 'react'
import { FaHome } from "react-icons/fa";
import {Link, Nav, Text} from './styles'


const SIZE = '32px'
export const Navbar = ( ) => {

    return(
        
        <Nav>
            <Link to ='/'><FaHome size={SIZE} /></Link> 
            <Text>Users Manager Platform</Text>
        </Nav>
    
    )
}