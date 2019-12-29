import React from 'react'
import UsersForm from '../components/UsersForm/UsersForm'
import api from '../Api'
import { navigate } from "@reach/router"
import { Loading } from '../components/Loading'
import { Title} from './styles/styles'
import { Layout} from '../components/Layout'

class UserNew extends React.Component {
    state ={
        loading: false,
        error: null,
        form: {
            name: '',
            salary: '',
            age: '',
            id: ''
            
        }
    }

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        })

    }

    handleSubmit = async e => {
      
        this.setState({loading: true, error: null})
        console.log(this.state.form)
        console.log('estoy aqui')
        api.users.create(this.state.form).then((res)=>{
            this.setState({ loading: false})
            navigate('/')
        }).catch((err)=>{
            this.setState({ loading: false, error: err})
        })
        

    }

    render() {
        if(this.state.loading) {
            return <Loading />
        }

        return (
            <Layout title='Crear Usuario'>
                
           

                <br />
                    <Title>Crear Nuevo Usuario</Title>
                    <UsersForm onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    formValues={this.state.form}
                    error={this.state.error} isEdit={false} />
                    

                    
                
            </Layout>
        )
    }
}

export default UserNew