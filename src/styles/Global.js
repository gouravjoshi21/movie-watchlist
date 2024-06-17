import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

    :root {
        --color-text-1: #efefef;
        --color-text-2: #d9d9d9;
        --color-text-3: #989898;

        --color-bg-1: #111111;
        --color-bg-2: #1d1d1d;
        --color-bg-3: #2f2f2f;
        --color-bg-4: #3b3b3b;

        --color-prim-1: #d8503b;
        --color-prim-2: #f05941;
        --color-prim-3: #f26a54;

        --color-green-1: #74d19e;

        --color-red-1: #B82727;
        --color-red-2: #c53d3d;

        --border-radius-sm: 6px;
        --border-radius-md: 8px;

        --color-glass-1: rgba(62, 62, 62, 0.58);
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;

        /* Creating animations for dark mode */
        transition: background-color 0.3s, border 0.3s;
    }

    html {
        /* font-size: 62.5%; */
    }

    body {
        font-family: "Inter", sans-serif;
        color: var(--color-text-2);
        transition: color 0.3s, background-color 0.3s;
        min-height: 100vh;
        overflow-x: hidden;
        line-height: 1.5;
        background: var(--color-bg-1);
    }

    input,
    button,
    textarea,
    select {
        font: inherit;
        color: inherit;
    }

    button {
        cursor: pointer;
    }

    *:disabled {
        cursor: not-allowed;
    }

    button:has(svg) {
        line-height: 0;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    ul {
        list-style: none;
    }
`

export default GlobalStyles
