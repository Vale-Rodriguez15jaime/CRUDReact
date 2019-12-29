import React from 'react'
import Modal from '../Modal/Modal'
import api from '../../Api'
import { navigate } from '@reach/router'
import {withGlobalState} from 'react-globally'
import {ButtonDelete, ButtonCancel, Text, Div} from './styles'
import EventService from '../../services/EventService'



    class DeleteUserModal extends React.Component {
          

        handleDeleteUser = async e => {
           
                api.users.remove(this.props.empId)
                  .then( (res)=>{           
                    navigate('/home')
                }).catch((err)=>{
                   
                }). then(() => {
                    this.props.setGlobalState({isOpenDeleteModal: false}) 
                    EventService.triggerEvent('fetchData')
                })
            
            }

            handleOpenModal = e => {
                this.props.setGlobalState({isOpenDeleteModal: true})
            }
        
            handleCloseModal = e => {
                this.props.setGlobalState({isOpenDeleteModal: false})
            
            }

        render(){
            return ( <Modal isOpen={this.props.isOpen} onClose={this.handleCloseModal}>

                <Div>
                    <Text>¿Desea eliminar este usuario?</Text>
                </Div>
                <Div>

            
        
                <ButtonDelete onClick={this.handleDeleteUser}>Delete</ButtonDelete>
                <ButtonCancel onClick={this.handleCloseModal}> Cancel</ButtonCancel>
                </Div>
            </Modal> )
        }

   
    
}

export default withGlobalState(DeleteUserModal)