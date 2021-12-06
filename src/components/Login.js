import React from 'react'
import styled from 'styled-components';

const Login = () => {
    return (
  <Container>
      <Content>
       <CTA>
       <CTALogoOne src="/images/cta-logo-one.svg" alt=""/>
       <Signup>GET ALL THERE</Signup>
       <Description>
         this is disney  hotstar you are
          watching this is a clone of disney 
          just for practicing react that i 
          learn by myself
       </Description>
       <CTALogoTwo src="/images/cta-logo-two.png" alt=""/>
       </CTA>
        <BgImage/>
      </Content>
  </Container>
    )
};

const Container = styled.section`
  overflow: hidden;
  display: flex;  
  flex-direction: column;
  text-align: center;
  height:100vh;
`;
const Content = styled.div`
margin-bottom: 10vh;
width: 100%;
position: relative;
min-height : 100vh;
box-sizing: border-box;
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 80px 40px;
height: 100%;
`;
const BgImage  = styled.div`
height:100%;
background-position:top;
background-size:cover;
background-repeat:no-repeat;
background-image: url("/images/login-background.jpeg");
position: absolute;
top:0;
right:0;
left:0;
z-index:-1;
`;

const CTA = styled.div`
max-width:650px;
flex-direction:column;
width:100%;
display:flex;

`;
const CTALogoOne = styled.img`
margin-bottom:12px;
max-width:600px;
min-height:1px;
display: block;
width:100%;
`;

const Signup = styled.a`
font-weight:bold;
color:white;
background-color:#0063e5;
margin-bottom:12px;
width:100%;
letter-spacing:1.5px;
font-size:18px;
padding:17px 0;
border:1px solid transparent;
border-radius:4px;
 
  &:hover {
    background-color:pink;
  }
`;

const Description = styled.p`
color:hsla(0,0%,95.3%,1);
font-size:16px;
margin:0 0 24;
line-height:1.5;
letter-spacing:1.5px;
`;
const CTALogoTwo = styled.img`
max-width:600px;
margin-bottom:20px;
width:100%;
`;

export default Login;
