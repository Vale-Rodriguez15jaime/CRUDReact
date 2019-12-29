import styled from 'styled-components'
import {Link as LinkRouter} from '@reach/router'

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

`

export const LinkRead = styled(Link)`

color: #3f51b5;

`
export const LinkEdit = styled(Link)`

color: #4a148c;

`

export const Form = styled.form`

padding: 16px 0;

`

export const InputForm = styled.input`
border: 1px solid #ccc;


`

export const InputSearch = styled.input`
border: 1px solid #ccc;
border-radius: 17px;
width:  80%;
height:30px;
margin-left: 50px;

@media screen and (max-width: 600px) {
   width: 60%;
   margin-left: 10px;
}

`


export const Label = styled.label`
color:  #616161;
font-weight: bold;

`



export const Td = styled.td`
border: 1px solid #ddd;
 padding: 8px;
 margin: 0px;
    border-top: 0px;
    border-right: 0px;
    border-bottom: 1px solid #bdbdbd;
    border-left: 0px;

 @media screen and (max-width: 600px) {
    display: block;
    text-align: center;

   
  }
  
`

export const TdActions = styled(Td)`
display: flex;
@media screen and (max-width: 600px) {
  display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

   
  }



   
  
  
`


export const TableUsers = styled.table`
 width: calc( 100% - 32px  );

`

export const Thead = styled.thead`

@media screen and (max-width: 600px) {
    display: none;
  }

`
export const Th = styled.th`

padding: 12px 5px;
  text-align: left;
  color: #616161;
  border-top: 0px;
    border-right: 0px;
    border-bottom: 1px solid #bdbdbd;
    border-left: 0px;
  

`
export const Tr = styled.tr`
border: 1px solid #ddd;
 padding: 8px;
 width: 100%;
 color: #616161;
&:hover {
    background-color: #ddd;

}
`

export const Table = styled.table`
margin: 45px;
width: 80%;


`

export const Tbody = styled.tbody`


`

export const Title = styled.h1`

color: #009688;
font-size: 24px;
    font-weight: normal;


`

export const ButtonRemove = styled.button`

color: #b71c1c;
border: 1px solid;
height: 30px;
width: 40px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 10px;
margin: 2px;
&:hover{
  cursor: pointer;
}

`

