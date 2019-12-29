import React from 'react'
import api from '../Api'
import { navigate } from '@reach/router'
import UserEdit from './UserEdit'
import { Loading } from '../components/Loading'
import {Layout} from '../components/Layout'



class UserEditContainer extends React.Component {
    
    state = {
        loading: true,
        error: null,
        form: {
            name: '',
            salary: '',
            age: '',


        }
    }
   async componentDidMount() {
        this.fetchData()
        console.log(this.props.empId)
    }
    
    fetchData = async () => {
    
        this.setState( {loading: true, error: null})
        api.users.read(this.props.empId)
          .then( (res)=>{
            this.setState({ 
                form: {name: res.data.employee_name,
                salary: res.data.employee_salary,
            age: res.data.employee_age, id: res.data.id}, loading: false, error: null
            })
        }).catch((err)=>{
            this.setState({loading: false, error: err, data: [] })
        })
    
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
        e.preventDefault()
        this.setState({loading: true, error: null})

        api.users.update(this.props.empId, this.state.form)
          .then( (res)=>{
            this.setState({ 
                form: res.data, loading: false, error: null 
            })
            navigate(`/employee/${this.props.users.id}`)
        }).catch((err)=>{
            this.setState({loading: false, error: err, data: [] })
        })

    }
    
    render() {
        if (this.state.loading) {
            return <Loading />
        }

        return (
            <Layout title='Editar'>

            <br />
            <UserEdit user={this.state.form}
             onChange={this.handleChange} 
             onSubmit={this.handleSubmit}
             error={this.state.error} isEdit={true} />
             </Layout>
                
             )
    }


}

export default UserEditContainer