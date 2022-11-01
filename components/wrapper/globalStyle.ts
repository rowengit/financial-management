import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap');
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

    * {
        font-family: 'Kumbh Sans', sans-serif;
	}

    a, a:hover {
        text-decoration: none;
    }

    span, p, h1, a {
        user-select:none;
    }

    h1, a, label {
        color: ${props => props.theme.colors.text_primary};
    }

    h1{
        font-weight: 600;
        font-size: 30px;
        line-height: 37px;
    }

    p{
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: ${props => props.theme.colors.text_secondary};
    }

    div, input, label {
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
    }

    a, button, li {
        cursor: pointer;
    }

    a:hover, button:hover, li:not([class^="active"]):hover {
        opacity:.8;
    }

    .btn-group {
        margin: 25px 0;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .input-group {
        margin-top: 25px;
    }
`;