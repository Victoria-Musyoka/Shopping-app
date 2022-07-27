import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";


const MenuItem1= styled.div`
margin:2rem;
padding:5;
font-size:20px;
`

const Container = styled.div`
  height: 100px;
  background-color: white;
  
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  border: 0.5px solid blue;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
`;
const Logo = styled.h1`
  flex: 1.5;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const MenuItem = styled.div`
  font-size: 20px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: "gray" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Shopping</Logo>
        </Center>
        <Right>
          <MenuItem1>
            <NavLink style={{ margin:" 0 1rem 0 0",textDecoration:"none" ,border:"1px solid black",padding:"1px"}} to="/" exact="true">
              <>HOME</>
            </NavLink>
            <NavLink style={{ margin:" 0 1rem 0 0",textDecoration:"none" ,border:"1px solid black",padding:"1px"}} className="addcomment"to="/comment" exact="true">
              <>ADD COMMENT</>
            </NavLink>
            <NavLink style={{ margin:" 0 1rem 0 0",textDecoration:"none" ,border:"1px solid black",padding:"1px"}}to="/register" exact="true">
              <>REGISTER</>
            </NavLink>
          </MenuItem1>
          <MenuItem>
            <NavLink style={{textDecoration:"none",border:"1px solid black",padding:"1px"}} to="/login" exact="true">
              <>SIGN IN</>
            </NavLink>
          </MenuItem>
          <MenuItem>
            <NavLink to="/cart" exact="true">
              <>
                {" "}
                <Badge badgeContent={2} color="primary">
                  <ShoppingCartOutlined />
                </Badge>
              </>
            </NavLink>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
