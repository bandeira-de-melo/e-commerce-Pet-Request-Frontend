import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import dog from "../assets/dog.png"
import { useContext,useState } from "react"
import AuthContext from '../context/AuthContext'

export default function SignIn() {

    const iconeDog = dog

    const Navigate = useNavigate()


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { token, setToken, storageToken, storageName, Auth, name, setName } = useContext(AuthContext)

    function getIn(e){
       e.preventDefault()

       const body = { email, password }

       //continua
    }


    return (
        <>
            <Container>



                <Logo>
                    <img src={iconeDog} />
                    <p>PetRequest</p>
                </Logo>

                <ContentLogin>

                    <FormsLogin onSubmit={getIn}>
                        <input type='email' placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <input type='password' placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <button type='submit'><p>Fazer Login</p> </button>
                    </FormsLogin>


                    <Link to='/sign-up' style={{ textDecoration: 'none' }}>
                        <LinkSingUp>
                            <p>Primeira vez? Clique aqui e cadastre-se!</p>
                        </LinkSingUp>
                    </Link>

                </ContentLogin>

            </Container>
        </>
    )
}


const Container = styled.div`
width: 100%;
height: 667px;
background-color: #B8EAFF;
margin: 0 auto;
display: flex;
flex-direction: column;
@media (min-width: 375px){
   width: 375px;
}
`

const Logo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 147px;
height: 50px;
margin: 0 auto ;
margin-top: 155px;
p{
    font-family: 'Raleway', sans-serif;
    font-size: 32px;
    font-weight: 700;
    line-height: 50.37px;
    color: #A328D6;
}
img{
    width: 70px;
    height: 70px;

}
`

const ContentLogin = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 50px;
`

const FormsLogin = styled.form`
display: flex;
flex-direction: column;
align-items: center;
input{
    box-shadow: 0 1px 4px 0 #00000040;
    width: 299px;
    height: 52px;
    border-radius: 30px;
    margin-bottom: 16px;
    padding-left: 10px;
    border: 1px solid white;
    &::placeholder{
        font-family: 'Raleway', sans-serif;
        font-size: 20px;
        font-weight: 400;
        color:#000000;
    }
}
button{
width: 298px;
height: 52px;
background-color: #A328D6;
border-radius: 30px;
box-shadow: 0 1px 4px 0 #00000040;
margin-top: 10px;
border: 1px solid #A328D6;
&:hover{
cursor: pointer;
}
}
p{
  font-family: 'Raleway', sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 23.5px;
  color: #FFFFFF; 
}
`

const LinkSingUp = styled.div`
margin-top: 15px;
p{
    font-family: 'Raleway', sans-serif;
    font-size: 15px;
    font-weight: 700;
    line-height: 18px;
    color: blueviolet;
}
`