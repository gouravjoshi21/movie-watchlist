import { css } from 'styled-components'

const Mixins = {
    smallPhone: (...args) => css`
        @media only screen and (max-width: 25em) {
            // 400px
            ${css(...args)}
        }
    `,
    phone: (...args) => css`
        @media only screen and (max-width: 37.5em) {
            // 600px
            ${css(...args)}
        }
    `,
    eight: (...args) => css`
        @media only screen and (max-width: 50em) {
            // 800px
            ${css(...args)}
        }
    `,
    tabPort: (...args) => css`
        @media only screen and (max-width: 56.25em) {
            // 900px
            ${css(...args)}
        }
    `,
    mediumTab: (...args) => css`
        @media only screen and (max-width: 62.5em) {
            // 1000px
            ${css(...args)}
        }
    `,
    tabLand2: (...args) => css`
        @media only screen and (max-width: 66em) {
            // 1056px
            ${css(...args)}
        }
    `,
    tabLand: (...args) => css`
        @media only screen and (max-width: 75em) {
            // 1200px
            ${css(...args)}
        }
    `,
    'tab-land-3': (...args) => css`
        @media only screen and (max-width: 85.375em) {
            // 1366px
            ${css(...args)}
        }
    `,
    bigDesktop: (...args) => css`
        @media only screen and (min-width: 112.5em) {
            // 1800px
            ${css(...args)}
        }
    `
}

export default Mixins
