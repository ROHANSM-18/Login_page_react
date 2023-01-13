import React from "react";
import "./App.css";
import styled from "styled-components";
import placer from "./asset/file.png";
import "@fontsource/poppins";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const eye = <FontAwesomeIcon icon={faEyeSlash} />;

const App = () => {
  const Main = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const Parent = styled.div`
    width: 100%;
    background: #fff;
    padding: 20px 60px 40px 40px;
  `;

  const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;

  const LeftSide = styled.div`
    width: 40%;
    height: 100%;
    position: relative;
  `;

  const RightSide = styled.div`
    width: 60%;
    padding-left: 2rem;
  `;

  const Image = styled.img`
    width: 100%;
    object-fit: cover;
  `;

  const Container = styled.div`
    height: 80vh;
    width: 100%;
    background: #fff;
    border-radius: 10px;
    padding: 20px 60px 40px 40px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  `;

  const FormBox = styled.div`
    position: relative;
    margin: 10% auto;
    padding: 5px;
  `;

  const Header = styled.p`
    text-align: center;
    margin: 2rem auto;
    font-size: 45px;
    font-weight: bold;
    padding-bottom: 2rem;
  `;

  const Label = styled.p`
    font-size: 18px;
    margin: 10px 10px;
  `;

  const StyledTF = styled.input`
    width: 98%;
    height: 60px;
    font-size: 18px;
    border-radius: 10px;
    border-color: #666;
    border-width: 1px;
    padding: 10px;
    margin-bottom: 10px;
  `;

  const InnerBody = styled.div`
    padding-left: 3rem;
    display: grid;
    align-items: center;
  `;

  const Check = styled.input`
    color: #111;
    margin: 0px 10px;
    width: 15px;
  `;

  const CB = styled.div`
    margin: 5px 0;
    display: flex;
    justify-content: evenly-spaced;
  `;

  const SP = styled.span`
    color: orange;
  `;

  const LoginButton = styled.button`
    margin: 2rem auto;
    width: 50%;
    background-color: #1874a4;
    color: #fff;
    border-radius: 10px;
    height: 50px;
    font-size: 18px;
    border-width: 0;
  `;

  const RegLink = styled.p`
    margin-top: 1.5rem;
    font-size: 18px;
  `;

  const ChangePwd = styled.div`
    display: flex;
    justify-content: space-between;
  `;

  const ParaText = styled.p`
    color: #666;
    font-size: 18px;
    margin-right: 10px;
  `;

  const Icon = styled.i`
    color: #666;
    position: absolute;
    top: 54.5%;
    right: 4%;
  `;

  return (
    <Main>
      <Parent>
        <Content>
          <LeftSide>
            <Image src={placer} />
          </LeftSide>
          <RightSide>
            <Container>
              <FormBox>
                <Header>Login</Header>
                <InnerBody><Label>Login ID</Label>
                  <center><StyledTF type="text" placeholder="Enter Login ID" /></center>
                  <Label>Password</Label>
                  <center><StyledTF type="password" placeholder="Enter Password" /><Icon>{eye}</Icon></center>
                  <ChangePwd><CB>
                    <Check type="checkbox" /><ParaText>Remember Me</ParaText></CB>
                    <ParaText><SP>Change Password</SP></ParaText>
                  </ChangePwd>
                  <CB><Check type="checkbox" /><ParaText>Agree to <SP><u>Terms & Conditions</u></SP></ParaText></CB>
                </InnerBody>
                <center><LoginButton>Login</LoginButton></center>
                <center><RegLink>Don't have an account? <b><SP><u>Register Here</u></SP></b></RegLink></center>
              </FormBox>
            </Container>
          </RightSide>
        </Content>
      </Parent>
    </Main>
  );
};

export default App;