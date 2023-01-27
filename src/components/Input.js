import styled from "styled-components";

export const Input = styled.input`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 500px;
    height: 58px;
    box-sizing: border-box;
    margin-bottom: 13px;
    padding: 15px;
    border: none;
    border-radius: 30px;
    background-color: "#FFFFFF";
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);

    color: #000000;
    font-family: "Raleway";
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;

    &::placeholder {
        font-family: "Raleway";
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: #000000;
    }
`