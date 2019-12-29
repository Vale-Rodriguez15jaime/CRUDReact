import React from 'react';
import UsersDetail from './UsersDetail'
import api from '../Api'
import { Loading } from '../components/Loading';
import { Layout} from '../components/Layout'


class UsersDetailContainer extends React.Component {
    state = {
        loading: true,
        error: null,
        data: undefined,
        modalIsOpen: false
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
                data: res.data, loading: false, error: null
            })
        }).catch((err)=>{
            this.setState({loading: false, error: err, data: [] })
        })
    
    }



    

    render() {

        if(this.state.loading) {
            return <Loading />
        } if(this.state.error) {
            return <div error={this.state.error}></div>
        }

        return (
            <Layout title = 'Detalle de Usuario' >
       <UsersDetail 
        user={this.state.data}
        />
          </Layout> 
        )
    }


}

export default UsersDetailContainer
