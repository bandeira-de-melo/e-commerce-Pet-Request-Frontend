import React from "react"
import { Link } from "react-router-dom"
// import axios from "axios"

import styled from "styled-components"
import { Icon } from '@iconify/react';
import { Button } from "../components/Button"
// import { UserContext } from "../context/UserContext"

export default function Checkout() {

    // const navigate = useNavigate()

    return (
        <Container>
            <Header>
                <Link to="/cart">
                    <Icon icon="material-symbols:arrow-back-ios-new-rounded" width="34px" color="#FFFFFF" />
                </Link>
                <h1>Checkout</h1>
                <Link to="/">
                    <Icon icon="mdi:logout" width="34px" color="#FFFFFF" />
                </Link>
            </Header>
            <p>Insira os dados do cartão</p>
            <Button>Finalizar compra</Button>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 100px 25px 25px 25px;
    background: #B8EAFF;

    p {
        margin-left: 10px;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: #000000;
    }
`

const Header = styled.header`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
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