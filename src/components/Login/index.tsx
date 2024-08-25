import { useState } from 'react'
import styled from 'styled-components'

type LogInProps = {
    updateFunction: (userName:string | null) => void
}

const StyledLogIn = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: pink;
    height: 100vh;
    width: 100vw;

    .login-container {
    background: #fff;
    border-radius: 10px;
    max-width: 700px;
    padding: 24px;
    }

    input {
    padding: 10px;
    }

    button {
    display: block;
    margin: 24px auto;
    padding: 10px;
    background: pink;
    font-size: 14px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
    background: black;
    color: #fff;
    }
    }

`

const LogIn = ({updateFunction}: LogInProps) => {
    const [enteredUserName, setEnteredUserName] = useState<string | null>(null)

    const handleChange = (event: { target: { value: any } }) => {
        setEnteredUserName(event.target.value)        
    }

    const handleClick = () => {
        updateFunction(enteredUserName);
        localStorage.setItem("savedUserName", JSON.stringify(enteredUserName))
    }

    return(
        <StyledLogIn>
            <div className="login-container">
                <h3>You must log in to see this page.</h3>
                <h4>Enter a user name:</h4>
                <input onChange={handleChange} placeholder='user name' />
                <button onClick={handleClick}>Submit</button>
            </div>
        </StyledLogIn>
    )
}

export default LogIn

function userState<T>(arg0: null): [any, any] {
    throw new Error('Function not implemented.')
}
