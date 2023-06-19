import styled from 'styled-components'
import { Link } from "react-router-dom";
import { Logout } from '@mui/icons-material';
import { useDispatch } from "react-redux";

const Container = styled.div`
height:80px;
background-color:#F7432E;
`
const Wrapper = styled.div`
padding:0px 20px;
display:flex;
align-items:center;
justify-content:space-between
`
const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`

const MenuItem = styled.button`
font-size: 24px;
cursor: pointer;
background-color: #F7432E;
color:#000000;
padding:20px 12px;
border:none;

`
const Right = styled.div`
flex:1;
display:flex;
align-items: center;
justify-content:flex-end;
`
const MenuItemFirst = styled.div`
width:80px;
margin-right:10%;
cursor: pointer;
color:#000000;
padding:10px;
&:hover {
    color: #EEEEEE;
  }
`
const MenuItemSecond = styled.div`
cursor: pointer;
color:#000000;
padding:10px;
&:hover {
    color: #EEEEEE;
  }
`


const LoginNavbar = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
    }

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Link to="/" style={{textDecoration:"none"}}>
                    </Link>
                    <Link to="/dashboard">
                        <MenuItem>Home</MenuItem>
                    </Link>
                    <Link to="/reports">
                        <MenuItem>Reports</MenuItem>
                    </Link>
                </Left>
                <Right>
                    <Link to="/" style={{ textDecoration: "none", marginRight: "10%"  }}>
                        <MenuItemFirst><Logout style={{ verticalAlign: "middle" }} onClick={handleLogout} /> Déconnection</MenuItemFirst>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default LoginNavbar