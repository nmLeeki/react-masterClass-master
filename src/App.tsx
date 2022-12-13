import { useState, ChangeEvent } from 'react';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import ToggleSwitch from './components/ToggleSwitch';
import Router from './router';
import { darkTheme, lightTheme } from './theme';
import { ThemeProvider } from 'styled-components';
import { ReactQueryDevtools } from 'react-query/devtools';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isDarkAtom } from './atoms';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
*{
    box-sizing:border-box;
}
body{
    font-weight: 300;
    font-family: 'Source Sans Pro', sans-serif;
    background-color:${(props) => props.theme.bgColor};
    color:${(props) => props.theme.textColor};
    line-height: 1.2;
}
a{
    text-decoration:none;
    color:inherit;
}
`;

const StyledLabelWrap = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
`;
const StyledLabel = styled.label<{ checked: boolean }>`
    cursor: pointer;
    text-indent: -9999px;
    width: 70px;
    height: 35px;
    background: ${({ checked }) => (checked ? '#fff' : '#000')};
    display: block;
    border-radius: 100px;
    position: relative;
    &:after {
        content: '';
        position: absolute;
        left: ${({ checked }) => (checked ? '5px' : 'calc(55% - 5px)')};
        top: 2px;
        width: 30px;
        height: 30px;
        background: ${(props) => props.theme.accentColor};
        border-radius: 90px;
        transition: 0.3s;
    }
`;

function App() {
    const isDark = useRecoilValue(isDarkAtom);
    const setIsDark = useSetRecoilState(isDarkAtom);
    const toggleDarkAticon = () => setIsDark(!isDark);
    return (
        <>
            <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
                <StyledLabelWrap>
                    <StyledLabel htmlFor="checkbox" checked={isDark}>
                        <input id="checkbox" type="checkbox" checked={isDark} onChange={toggleDarkAticon} />
                    </StyledLabel>
                </StyledLabelWrap>
                <GlobalStyle />
                <Router />
                <ReactQueryDevtools initialIsOpen={true} />
            </ThemeProvider>
        </>
    );
}

export default App;
