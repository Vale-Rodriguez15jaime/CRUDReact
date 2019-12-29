import React from 'react'
import {Layout} from '../components/Layout'
import UsersList from '../components/UsersList/UserList'
import api from '../Api'
import "regenerator-runtime/runtime";
import { ButtonUserNew} from '../components/buttons/index'
import EventService from '../services/EventService'
import {Loading} from '../components/Loading'
class Home extends React.Component {
    state = {
        loading: true,
        error: null,
        data: undefined
    }

    constructor(props) {
        super(props);

    
    
} 

async componentDidMount() {
    this.fetchData()
  
}

componentWillMount() {
    EventService
      .listenEvent('fetchData', 'home', this.fetchData.bind(this));
  }

  componentWillUnmount() {
    EventService
      .unlistenEvent('fetchData', 'home');
  }

fetchData = async () => {

    this.setState( {loading: true, error: null})
    api.users.list()
      .then( (res)=>{
        this.setState({ 
            data: res.data, loading: false, error: null
        })
    }).catch((err)=>{
        this.setState({loading: false, error: err, data: [] })
    })

}

render() {
    if (this.state.loading === true && !this.state.data) {
        return <Loading />
         
    }
    
    if (this.state.error!=null) {
        return <Layout>
        <br />
            <br />
            <div>{`${this.state.error}`}</div>
            </Layout>
    }
    return (

        <Layout title='Inicio'>
            

            <br /> <br />
            
            <ButtonUserNew />
            
                <UsersList users={this.state.data}></UsersList>
            

        </Layout>
    )
}

}

    export default Home






    
   