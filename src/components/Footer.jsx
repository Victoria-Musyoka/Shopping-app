
import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
display:flex;
`

const Left=styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20
`

const Logo = styled.h1``;

const Description = styled.p`
margin: 20px 0px;
`;

const SocialContainer = styled.div`
display: flex;
`;

const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${(props) => props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`;

const Center=styled.div`
flex:1;
padding: 20px;
`
const Title = styled.h3`
  margin-bottom: 30px;
`;

// const List = styled.ul`
//   margin: 0;
//   padding: 0;
//   list-style: none;
//   display: flex;
//   flex-wrap: wrap;
// `;

// const ListItem = styled.li`
//   width: 50%;
//   margin-bottom: 10px;
// `;

const Right=styled.div`
flex:1;
padding: 20px;
`
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`; 


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>SHOPPING</Logo>
            <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolore doloremque placeat nemo repellat beatae molestias, iste recusandae temporibus! Ut dolor earum libero eos nihil laborum vel facilis commodi necessitatibus.
            </Description>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            {/* <Title>Useful links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List> */}
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><Room/>
               20th street Moi Avenue,Nairobi Kenya
            </ContactItem>
            <ContactItem><Phone/>
                +254702846299
            </ContactItem>
            <ContactItem><MailOutline/>
                beautysolutions@gmail.com
            </ContactItem>
          
        </Right>
    </Container>
  )
}

export default Footer