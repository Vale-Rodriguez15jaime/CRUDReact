import styled from 'styled-components'

export const Form = styled.form`

margin: 30px;
border-radius: 10px;
background: #fff;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`
export const Container = styled.div`
    padding-top: 63px;
    width: 91%;
    display: flex;
    justify-content: center;
`

export const Item = styled.div`
  display: -webkit-box;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 0 10px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    margin-bottom: 20px;

`

export const Titlee = styled.h1`
    color: #443154;
    font-weight: 600;
    padding: 10px 30px 0px 32px;
    font-size:20px;
`

export const Input = styled.input`
    width: 80%;
    font-family: sans-serif!important;
    font-size: inherit;
    border: 0;
    padding: 10px;
    font-size: 18px;
    border: 1px solid #dedede;
    border-radius: 5px;
    outline: none;
    background: #fff;
    &:hover,:focus{
        border-color:black;

    }

`

export const ButtonSave = styled.button`


text-decoration: none;
border: 1px solid;
height: 39px;
width: 79px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 10px;
margin: 2px;
background: #3f51b5;
color: white;
font-weight: bold;
display: flex;
&:hover{
    cursor: pointer;
}
`
