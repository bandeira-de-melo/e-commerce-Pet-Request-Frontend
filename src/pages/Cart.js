import React from "react"
// import { useNavigate } from "react-router-dom"
// import axios from "axios"

import styled from "styled-components"
import { Icon } from '@iconify/react';
// import { Input } from "../components/Input"
// import { Button } from "../components/Button"
// import { UserContext } from "../context/UserContext"

export default function Cart() {

    return (
        <Container>
            <Header>
                <Icon icon="material-symbols:arrow-back-ios-new-rounded" width="34px" color="#FFFFFF" />
                <h1>Carrinho</h1>
                <Icon icon="mdi:logout" width="34px" color="#FFFFFF" />
            </Header>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    background: #B8EAFF;
`

const Header = styled.header`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 73px;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 20px 25px 20px 25px;
    z-index: 1;
    background: #A328D6;

    h1 {
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
    }
`