import styled from "styled-components"

export const NewTask = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: -1.625rem;
    
`

export const NewTaskInput = styled.input`
    background: ${props=>props.theme['gray-500']};
    border: 0;
    border-radius: 0.35rem;
    width: 50vw;
    padding: 1rem;
    font-size: 1rem;
    color: ${props=>props.theme['gray-100']};
    @media only screen and (max-width: 600px) {
        font-size: 0.9rem;
    }
    @media only screen and (max-width: 400px) {
        font-size: 0.8rem;
    }

`

export const NewTaskButton = styled.button`
    background: ${props=>props.theme['blueDark']};
    font-size: 1rem;
    font-weight: bold;
    color: ${props=>props.theme['gray-100']};
    padding: 1rem;
    border: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.35rem;
    gap: 0.5rem;
    cursor: pointer;
    &:hover{
        background: ${props=>props.theme['blue']};
    }
    &:disabled{
        background: ${props=>props.theme['gray-300']};
        cursor: not-allowed;
    }
    @media only screen and (max-width: 600px) {
        font-size: 0.9rem;
    }
    @media only screen and (max-width: 400px) {
        font-size: 0.8rem;
    }
`