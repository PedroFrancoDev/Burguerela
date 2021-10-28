import styled from 'styled-components';
import Hamburguer from '../../../assets/hambúrguer.jpg';


export const Container = styled.div`
    background: #21222C;
    border-radius: 4px;
    padding: 20px 30px;
    
    h1 {
        font-size: 30px;
        margin: 10px 0px 20px;
        padding-bottom: 10px;
        border-bottom: 10px solid #FD704D;
        color: #999;
    }
`;

export const HamburguerImg = styled.header`
    height: 380px;
    border-radius: 4px;
    padding: 0px 100px;
    background: url(${Hamburguer}) no-repeat top;

    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
        color: #FD704D;
        font-size: 20px;
    }

    p {
        max-width: 200px;
        font-size: 18px;
        margin-top: 10px;
        color: #999;
    }

    img {
        width: 300px;
        height: 300px;
        border-radius: 50%;
        object-fit: cover;
        margin-left: 20px;
    }
`;

export const Ul = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

    li {
        display: flex;
        flex-direction: column;
        background: #282A36;
        max-width: 230px;
        border-radius: 4px;
        padding: 15px;

        img {
            width: 100%;
            border-radius: 4px;
            margin-bottom: 10px;
            height: 150px;
            object-fit: cover;
        }

        strong {
            color: #999;
        }

        span {
            margin: 10px 0px;
            font-size: 20px;
            font-weight: bold;
            color: #FF633A;
        }

        button {
            background: #FF633A;
            display: flex;
            margin-top: auto;

            display: flex;
            align-items: center;
            transition: 0.2s;

            &:hover {
                opacity: 89%;
            }

            div {
                background: #fd704d;
                padding: 8px;
                border-top-left-radius: 4px;
                border-bottom-left-radius: 4px;
                color: #eee;
                
                display: flex;
                align-items: center;
                justify-content: center;

                svg {
                    font-size: 16px;
                    margin-right: 5px;
                }
            }

            small {
                font-size: 13px;
                font-weight: bold;
                color: #21222C;
                text-align: center;
                text-align: center;
            }
        }
    }
`;