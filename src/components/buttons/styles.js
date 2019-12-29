import styled from 'styled-components'
import { Link as LinkRouter} from '@reach/router'



export const Link = styled(LinkRouter)`

text-decoration: none;
border: 1px solid;
height: 30px;
width: 30px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 10px;
margin: 2px;
color: #fff;

@media screen and (max-width: 600px) {
    font-size: 9px;
    font-weight: bold;
    height: 30px;
   
  }

`

export const LinkRead = styled(Link)`

color: #3f51b5;

`