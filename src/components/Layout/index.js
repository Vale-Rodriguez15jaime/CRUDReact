import React, {Fragment} from 'react'
import {Helmet} from 'react-helmet'
import {Title, SubTitle, Div} from './styles'


export const Layout = ({children, title, subtitle}) => {
    return (

        <Fragment>
            <Helmet>
              {title && <title>{title}</title>}
             
            </Helmet>

            <Div>
              
              {children}
            </Div>
        </Fragment>
    )
}

