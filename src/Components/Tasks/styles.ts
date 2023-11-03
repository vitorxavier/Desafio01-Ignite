import styled from 'styled-components'

export const TasksDiv = styled.div`
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
`
export const TasksHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 55.5vw;
    @media only screen and (max-width: 400px) {
        width: 90vw;
    }
    @media only screen and (max-width: 600px) {
        width: 80vw;
    }
`

export const CreatedTasks = styled.div`
    color: ${props=>props.theme['blue']};
    font-size: 0.875rem;
    font-weight: bold;
    cursor: pointer;
    padding: 0.4rem 0;
    border-bottom: 1px solid transparent;
    &.active{
        border-bottom: 1px solid ${props=>props.theme['blue']};
    }
    &:hover{
        color: ${props=>props.theme['blueDark']};
    }
    span {
        color: ${props=>props.theme['gray-200']};
        font-size: 0.75rem;
        background: ${props=>props.theme['gray-400']};
        padding:  0.125rem 0.5rem;
        border-radius: 16px;
    }
`

export const FinishedTasks = styled.div`
    color: ${props=>props.theme['purple']};
    font-size: 0.875rem;
    font-weight: bold;
    cursor: pointer;
    padding: 0.4rem 0;
    border-bottom: 1px solid transparent;
    &.active{
        border-bottom: 1px solid ${props=>props.theme['purple']};
    }
    &:hover{
        color: ${props=>props.theme['purpleDark']};
    }
    span {
        color: ${props=>props.theme['gray-200']};
        font-size: 0.75rem;
        background: ${props=>props.theme['gray-400']};
        padding:  0.125rem 0.5rem;
        border-radius: 16px;
    }
`

export const TasksList = styled.div`
    width: 55.5vw;
    border-top: 1px solid ${props=>props.theme['gray-400']};
    margin-top: 1rem;
    border-radius: 16px;
    padding-top: 0rem;
    &.not-empty{
        border-top: 0px;
        border-radius: 0px;
    }
    max-height: 65vh;
    overflow: auto;
    &::-webkit-scrollbar {
        width: 5px;
        
    }
    &::-webkit-scrollbar-track {
        background-color: ${props=>props.theme['gray-400']};
        border-radius: 5px;
    }
    &::-webkit-scrollbar-thumb {
       box-shadow: inset 0 0 6px ${props=>props.theme['gray-200']};
       border-radius: 5px;
    }

    @media only screen and (max-width: 400px) {
        width: 90vw;
    }
    @media only screen and (max-width: 600px) {
        width: 80vw;
    }
`

export const EmptyTask = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    font-size: 1rem;
    padding: 3rem;
    svg{
        width: 3.5rem;
        height: 3.5rem;
        margin-bottom: 0.75rem;
        color: ${props=>props.theme['gray-400']}
    }
    .title {
        font-weight: bold;
    }
`

export const TaskDiv = styled.div`
    background: ${props=>props.theme['gray-500']};
    padding: 1.5rem 1rem;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid ${props=>props.theme['gray-400']};
    color: ${props=>props.theme['gray-200']};
    margin-bottom: 1rem;
    gap: 1rem;
    .toggle-button {
        width: 1.5rem;
        height: 1.5rem;
        border: 2px solid ${props=>props.theme['blue']};
        border-radius: 100%;
        cursor: pointer;
        flex-shrink: 0;
    }
    .toggle-selected {
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 100%;
        border: 0px;
        background: ${props=>props.theme['purpleDark']};
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        flex-shrink: 0;
        
    }
    .delete-button {
        cursor: pointer;
        flex-shrink: 0;
        
    }
    .task-text {
        flex: 1;
        text-align: left;
        cursor: pointer;
    }
    .finished-task {
        flex: 1;
        text-align: left;
        color: ${props=>props.theme['gray-300']};
        text-decoration: line-through;
    }
`