import Mixins from '../styles/Mixins'
import styled, { css } from 'styled-components'

const Heading = styled.h1`
    color: var(--color-text-1);

    ${(props) =>
        props.var === '1' &&
        css`
            font-size: 24px;
            font-weight: 600;

            ${Mixins.mediumTab`
                font-size: 28px;
            `};
        `}

    ${(props) =>
        props.var === '2' &&
        css`
            font-size: 22px;
            font-weight: 600;

            ${Mixins.mediumTab`
                font-size: 22px;
            `}
        `}

    ${(props) =>
        props.var === '3' &&
        css`
            font-size: 18px;
            font-weight: 600;
        `}
`

Heading.defaultProps = {
    var: '1'
}

export default Heading
