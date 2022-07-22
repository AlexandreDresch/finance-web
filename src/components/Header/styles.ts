import styled from "styled-components";

export const Container = styled.header`
    background: var(--primary);
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: .2rem 1rem 10rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        width: 13%;
    }

    button {
        font-size: 1rem;
        color: #FFFFFF;
        background: var(--success);
        border: 0;
        padding: 0 1.8rem;
        border-radius: 0.25rem;
        height: 2.2rem;

        transition: filter .2s;

        &:hover {
            filter: brightness(.9)
        }
    }
`;