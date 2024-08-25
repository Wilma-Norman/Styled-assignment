'use client'
import styled from 'styled-components'
import "../../app/globals.css"

const StyledPageTitle = styled.h1`
    font-size: 3rem;
    text-align: center;    
    margin: 0;
    font-family: "Matemasie", sans-serif;
    font-weight: 400; 
`
const StyledSubHeader = styled.h3`
    text-align: center;
    font-family: "Matemasie", sans-serif;
    font-weight: 400;  
    margin: 0;
`

const StyledHeader = styled.header`
    background-color: #FED18C;
    padding: 24px;
    border-bottom: 2px solid black;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`

const Header = () => {
    return(
        <StyledHeader>
            <StyledPageTitle>My Summer!</StyledPageTitle>
            <StyledSubHeader>2024</StyledSubHeader>           
        </StyledHeader>
    )
}

export default Header