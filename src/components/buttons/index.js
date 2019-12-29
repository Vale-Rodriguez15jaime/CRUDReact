import React from 'react'
import { LinkRead} from './styles'
import { MdAddCircle } from "react-icons/md";

const SIZE = '30px'

export const ButtonUserNew = () => {
    return(


 <LinkRead to={'/UserNew'}><MdAddCircle size={SIZE} /></LinkRead>
    )


}

