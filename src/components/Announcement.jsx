import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height:30px;
  background-color:blue;
  color:white;
  display:flex;
  align-items:center;
  justify-content:center;
  fontSize:14px;
  font-weight:500;
`



const Announcement = () => {
  return (
    <Container>
        New Deal! Free Delivery on orders over ksh 1000
    </Container>
  )
}

export default Announcement