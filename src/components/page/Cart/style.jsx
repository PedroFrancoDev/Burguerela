import styled from 'styled-components';

export const Container = styled.div`
    background: #21222C;
    border-radius: 4px;
    padding: 30px;

    footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 30px;
    }

    footer button {
        font-size: 16px;
        padding: 12px 20px;
        background: #DE5A39;
        color: #eee;
        font-weight: bold;
        transition: 0.2s;

        &:hover {
            opacity: 89%;
        }
    }
`;

export const ProductTable = styled.table`
    border-bottom: 1px solid #FD704D;
    width: 100%;

    thead th {
        color: #999999;
        padding: 12px;
        text-align: left;
    }

    tbody tr td {
        padding: 12px;

        span {
            display: block;
            margin-top: 5px;
            font-size: 18px;
            font-weight: bold;
            color: #FD704D;
        }

        strong {
            font-size: 18px;
            color: #999;
        }

        button {
            background: #21222C;
        }
    }

    tbody tr td img {
        height: 150px;
        width: 150px;
        object-fit: cover;
        border-radius: 4px;
    }

    div {
        display: flex;
        align-items: center;

        input {
            width: 50px;
            padding: 6px;
            border: 1px solid #999999;
            border-radius: 4px;
            font-size: 18px;
            margin: 5px;
        }
    }
`;

export const Total = styled.div`
    display: flex;
    align-items: baseline;

    span {
        color: #999999;
    }

    strong {
        font-size: 28px;
        margin-left: 5px;
        color: #FD704D;
    }
`;