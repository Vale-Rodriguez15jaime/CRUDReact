import React from 'react'
import Loader from 'react-loader-spinner'
import {Container} from './styles'
import {Layout} from '../Layout'


export const Loading = () => {


    return (
    <Layout>
      <br />
            <Container>
                    <Loader
                        type="Puff"
                        color="#3f51b5"
                        height={100}
                        width={100}
                    />
                     </Container>
                </Layout>
    )
}