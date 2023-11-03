import { HeaderContainer, RocketStyled, Title, TitleDo, TitleTo } from "./styles";

export function Header(){

    return (
        <HeaderContainer>
            <Title><RocketStyled /> <TitleTo>to</TitleTo><TitleDo>do</TitleDo></Title>
        </HeaderContainer>
    )
}