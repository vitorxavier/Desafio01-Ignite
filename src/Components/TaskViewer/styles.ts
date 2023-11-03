import styled from 'styled-components'

export const Overwall = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    padding: 0;
    margin: 0;
    background: rgba(255,255,255,0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

export const TaskOverview = styled.div`
    background-color: ${props=>props.theme['gray-500']};
    width: 50vw;
    height: 50vh;
    border-radius: 24px;
    cursor: default;
`