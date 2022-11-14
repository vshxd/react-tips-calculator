import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
}
#root{
    background-color: #77E0D1;
    height:100vh;
    display:flex;
    align-items: center;
}
`;
