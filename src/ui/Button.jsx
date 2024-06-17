import styled, { css } from 'styled-components'
import Mixins from '../styles/Mixins'

const sizes = {
    small: css`
        height: 40px;
        font-size: 14px;
        font-weight: 400;
        padding: 0 16px;
        border-radius: var(--border-radius-md);

        svg {
            width: 18px;
            height: 18px;
        }

        ${Mixins.phone`
            font-size: 13px;
            font-weight: 300;
            padding: 0 12px;

            svg {
                width: 16px;
                height: 16px;
            }
        `};
    `,
    medium: css`
        height: 45px;
        font-size: 14px;
        font-weight: 500;
        padding: 0 16px;

        svg {
            width: 24px;
            height: 24px;
        }
    `,
    large: css`
        height: 50px;
        font-size: 16px;
        padding: 0 32px;
        font-weight: 500;
    `
}

const variations = {
    primary: css`
        color: var(--color-text-1);
        background-color: var(--color-prim-2);

        &:hover {
            background-color: var(--color-prim-1);
        }
    `,
    secondary: css`
        color: var(--color-text-1);
        background: var(--color-bg-3);

        &:hover {
            background-color: var(--color-bg-4);
        }
    `,
    tertiary: css`
        color: var(--color-text-2);
        border: 1px solid var(--color-text-3);
        background: none;

        &:hover {
            background: var(--color-bg-3);
        }
    `,
    danger: css`
        color: var(--color-text-1);
        background-color: var(--color-red-2);

        &:hover {
            background-color: var(--color-red-1);
        }
    `
}

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 300;
    gap: 8px;

    border: none;
    border-radius: 6px;
    box-shadow: var(--shadow-sm);

    ${(props) => sizes[props.size]}
    ${(props) => variations[props.var]}

    &:disabled {
        cursor: not-allowed !important;
        opacity: 0.6;
    }
`

Button.defaultProps = {
    var: 'primary',
    size: 'medium'
}

export default Button
