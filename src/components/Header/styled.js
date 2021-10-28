import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #21222C;
    margin-bottom: 15px;
    padding: 20px 0px;
 
    svg {
            font-size: 25px;
            color: #eee;
            margin-left: 10px;
        }

    a {
        transition: 0.2s;
        display: flex;
        align-items: flex-end;

        &:hover {
            opacity: 85%;
        }

        strong {
            color: #eee;
            font-size: 16px;
        }

        span {
            font-size: 15px;
            color: #999;
            display: block;
        }
    }
`;

export const Cart = styled(Link)`
    display: flex;
    align-items: flex-end;
    transition: 0.2s;

    &:hover {
        opacity: 85%;
    }
    
    div {
        display: flex;
        flex-direction: column;

        strong {
            color: #eee;
            font-size: 16px;
        }

        span {
            display: flex;
            justify-content: flex-end;
            color: #999;
            font-size: 15px;
        }
    }
`;