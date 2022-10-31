import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	/* 
        http://meyerweb.com/eric/tools/css/reset/ 
        v2.0 | 20110126
        License: none (public domain)
    */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
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
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    body {
        line-height: 1;
    }

    ol, ul {
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

    input[type='checkbox']{
        -webkit-appearance: none;
		-moz-appearance: none;
		-o-appearance: none;
		appearance: none;
    }

    button {
        border: none;
        outline:none;
        background:none;
    }
		

    /* ------------------------------ */

    body {
        font-family: 'Kumbh Sans';
	}

    a, button {
        cursor: pointer;
    }

    span, p, h1 {
        user-select:none;
    }

    h1{
        font-weight: 600;
        font-size: 30px;
        line-height: 37px;
        color: #1B212D;
    }

    p{
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: #78778B;
    }

    label {
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #1B212D;
    }

    a:hover, button:hover {
        opacity:.8;
    }
`;
