import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background: ${(props) => props.theme['gray-600']};
        color: ${(props) => props.theme['gray-300']};
        text-align: center;
        -webkit-font-smoothing: antialiased;
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Non-prefixed version, currently
                                supported by Chrome, Edge, Opera and Firefox */
    }

    body, input, textarea, button{
        font-family: 'Inter',sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`

