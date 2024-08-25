'use client'
import styled from "styled-components"
import screens from "../utils/breakepoints"

type InContentProps = {
    title: string,
    content: string,
    color: string
}

const StyledContent = styled.section<{color: string, active?: string}>`
    padding: 10px;
    flex: 0 0 calc(40% - 24px);
    text-align: center;
    box-sizing: border-box;
    background-color: ${props => props.color};
    border-radius: 10px;    
    border: 2px solid black;  
    margin: 20px; 

    h4 {
    font-size: 24px;
    border-bottom: 2px solid black;
    text-align: center;
    padding: 10px;
    margin: 20px;
    font-family: "Matemasie", sans-serif;
    font-weight: 400; 
    }

    p {
    text-align: center;
    margin: 20px;
    }
`

const InContent = ({title, content, color}: InContentProps) => {
    return(
        <StyledContent color={color}>
            <h4>{title}</h4>
            <p>{content}</p>
        </StyledContent>
    )
}

export default InContent