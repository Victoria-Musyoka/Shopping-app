
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
                The shop that allows you to express yourself. We have many options to choose from. The best services are provided for the customer. Here to serve you. WELCOME BACK!!
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