import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Parent = styled(Link)`
    svg {
        width: 32px;
        height: 32px;

        path {
            fill: var(--color-text-1);
        }
    }
`

function Logo() {
    return (
        <Parent to="/">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M15.98 0C13.2235 0 10.6267 0.761905 8.34956 2.00501L21.2135 11.3885L24.2097 2.36591C21.8127 0.922306 18.9763 0 15.98 0ZM4.99376 4.53133C1.95755 7.45865 0 11.5088 0 16.0802C0 17.0827 0.0799001 18.005 0.2397 18.9674L12.5843 10.0652L4.95381 4.53133H4.99376ZM27.4856 5.05263L22.6117 20.0902H31.3608C31.6804 18.807 32 17.4837 32 16.0802C32 11.7895 30.2422 7.93985 27.4856 5.05263ZM8.62921 17.9649L1.63795 22.9774C3.83521 27.5088 8.02996 30.9574 13.1436 31.8797L8.62921 17.9649ZM14.8614 24.1003L17.3783 32C22.6916 31.5188 27.206 28.4712 29.7228 24.1003H14.8614Z"
                    fill="#8574F9"
                />
            </svg>
        </Parent>
    )
}

export default Logo
