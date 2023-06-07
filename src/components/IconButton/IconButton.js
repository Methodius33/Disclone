import React from "react";
import styled from "styled-components";

const Button = styled.button`
    background: rgba(0, 0, 0, 0);
    border: none;
    cursor: pointer;
    padding: 0;
    width: 32px;
    height: 32px;
    display: grid;
    justify-items: center;
    align-items: center;
    border-radius: 4px;
    &:hover{
    background: rgba(0, 0, 0, 0.2);
    }
`
const IconButton = ({Icon,onClick})=>{
    return(
        <Button
            onClick={onClick}
        ><Icon/></Button>
       //<div>Тут должна быть картинка</div>
    )
}
export default IconButton