import styled from 'styled-components'
import {Rocket} from 'phosphor-react'
export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${(props)=>props.theme['gray-700']};
    height: 25vh;
    width: 100%;
    @media only screen and (max-width: 600px) {
        height: 15vh;
    }
    @media only screen and (max-width: 400px) {
        height: 15vh;
    }
`

export const RocketStyled = styled(Rocket)`
    color: ${(props)=>props.theme['blue']};
    margin-right: 0.5rem;
`
export const Title = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    font-weight: 900;
`

export const TitleTo = styled.span`
    color: ${(props)=>props.theme['blue']};
`
export const TitleDo = styled.span`
    color: ${(props)=>props.theme['purple']};
`