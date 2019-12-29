import styled from 'styled-components'
import {Link as LinkRouter} from '@reach/router'


export const Nav = styled.nav`
width: 100%;
padding: 0.5rem 0;
background-color: #3f51b5;
display: flex;
z-index: 1000;
position: fixed;
height: 25px;
justify-content: center;
align-items: center;


`

export const Link = styled(LinkRouter)`
color: white;
position: absolute;
    left: 10px;




`

export const Div = styled.div`
padding-top: 30p;



`

export const Text = styled.span`
color: white;
font-size: 18px;

`