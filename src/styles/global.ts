import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        -webkit-tap-highlight-color: transparent;
        outline:none;
    }

    html{
        scroll-behavior: smooth;
    }

    #root{
        margin:0 auto;
    }

    a{
        text-decoration: none;
    }

    ul, li{
        list-style: none;
    }

    .scroll-none{
        overflow: hidden;
    }

    input, textarea {
        -webkit-user-select: text;
        -khtml-user-select: text;
        -moz-user-select: text;
        -ms-user-select: text;
        user-select: text;
        outline:0;
    }

 `;
