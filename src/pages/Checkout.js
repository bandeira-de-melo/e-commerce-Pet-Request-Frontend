import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

import styled from "styled-components"
import { Icon } from '@iconify/react';
import { Input } from "../components/Input"
import { Button } from "../components/Button"
// import { UserContext } from "../context/UserContext"

export default function Checkout() {

    const [cardName, setCardName] = useState("")
    const [cardNumber, setCardNumber] = useState("")
    const [expirationDate, setExpirationDate] = useState("")
    const [cardCVC, setCardCVC] = useState("")

    const navigate = useNavigate("/home")

    const BASE_URL = "http://localhost:5000"

    function handleSubmit(e) {
        e.preventDefault();

        const body = {
            cardName,
            cardNumber,
            expirationDate,
            cardCVC,
        }

        axios.post(`${BASE_URL}/checkout`, body)
            .then((res) => {
                console.log(res.data);
                navigate("/home");
            })
            .catch((err) => {
                console.log(err.res.data);
            })
    }

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
            <form onSubmit={handleSubmit}>
                <Input
                    name="cardName"
                    type="text"
                    placeholder="Nome no cartão"
                    value={cardName}
                    onChange={e => setCardName(e.target.value)}
                    required
                />
                <Input
                    name="cardNumber"
                    type="text"
                    placeholder="Número do cartão"
                    value={cardNumber}
                    onChange={e => setCardNumber(e.target.value)}
                    required
                />
                <div>
                    <Input
                        name="expirationDate"
                        type="text"
                        placeholder="MM / AA"
                        value={expirationDate}
                        onChange={e => setExpirationDate(e.target.value)}
                        required
                    />
                    <Input
                        name="CVV"
                        type="text"
                        placeholder="CVC"
                        value={cardCVC}
                        onChange={e => setCardCVC(e.target.value)}
                        required
                    />
                </div>
                <Button type="submit" >Finalizar compra</Button>
            </form>
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