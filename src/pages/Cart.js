import React, { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

import styled from "styled-components"
import { Icon } from '@iconify/react';
import { Button } from "../components/Button"
import { UserContext } from "../context/UserContext"

export default function Cart() {
    const { user } = useContext(UserContext)

    const [cartProducts, setCartProducts] = useState([])

    const BASE_URL = "http://localhost:5000"

    // const products = [
    //     { name: "prod 1", value: 25 }, { name: "prod 2", value: 10 }
    // ]

    const token = user
    console.log(token)

    useEffect(() => {
        async function setProducts() {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            axios.get(`${BASE_URL}/cart`, config)
                .then((res) => {
                    console.log(res.data)
                    setCartProducts(res.data);
                })
                .catch((err) => {
                    console.log("ERR ", err.response.data);
                })
        }
        setProducts()
    }, [token])

    return (
        <Container>
            <Header>
                <Link to="/home">
                    <Icon icon="material-symbols:arrow-back-ios-new-rounded" width="34px" color="#FFFFFF" />
                </Link>
                <h1>Carrinho</h1>
                <Link to="/">
                    <Icon icon="mdi:logout" width="34px" color="#FFFFFF" />
                </Link>
            </Header>

            <CartContainer>
                {cartProducts.map((prod) => {
                    return (
                        <Item>
                            <p>{prod.name}</p>
                            <div>
                                <p>{prod.value}</p>
                                <Icon icon="mingcute:minus-circle-line" width="24px" color="#A328D6" />
                            </div>
                        </Item>
                    )
                })}
            </CartContainer>

            <Total>
                <p>Total</p>
                <p>{`R$ ${cartProducts.totalValue}`}</p>
            </Total>

            <Link to="/">
                <Button>Continuar</Button>
            </Link>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 100px 25px 25px 25px;
    background: #B8EAFF;
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

const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 25px;
    margin-bottom: 25px;
    border: none;
    border-radius: 30px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
    background: #FFFFFF;
`

const Item = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    box-sizing: border-box;
    margin-bottom: 24px;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;

    div {
        display: flex;
        min-width: 150px;
        max-width: 200px;
    }

    div > p {
        margin-right: 25px;
    }
`

const Total = styled.div`
    display: flex;
    width: 100%;
    height: 70px;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    margin-bottom: 25px;
    padding: 15px 25px;
    border: none;
    border-radius: 30px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
    background: #FFFFFF;
    
    p {
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
    }
`