import React from 'react';
import ReactDOM from 'react-dom';
import {Modall, ModalContainer, CloseButton} from './styles'


function Modal(props)
{
    if(!props.isOpen){
        return  null;
    }
return (
    ReactDOM.createPortal(<Modall>
        
        <ModalContainer>

            <CloseButton onClick={props.onClose}> X</CloseButton>

            {props.children} 

        </ModalContainer>
    </Modall>, 
        document.getElementById('modal')) 
)
}

export default Modal