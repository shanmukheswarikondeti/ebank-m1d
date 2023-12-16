import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #152850;
`
export const LoginCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 80vh;
  width: 80%;
  border-radius: 30px;
  background-color: #e0eefe;
`
export const LoginImage = styled.img`
  width: 50%;
`
export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 40%;
  height: 100%;
  background-color: #ffffff;
  border-radius: 30px;
  padding: 20px;
`
export const LoginHeading = styled.h1`
  font-size: 30px;
  font-weight: 500;
  font-family: 'Roboto';
  color: #183b56;
`
export const InputLabel = styled.label`
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto';
  color: #5a7184;
  margin-bottom: 15px;
`
export const Input = styled.input`
  color: #183b56;
  background-color: transparent;
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto';
  width: 80%;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #c3cad9;
  outline: none;
  padding-left: 20px;
  margin-bottom: 20px;
`
export const LoginButton = styled.button`
  font-size: 16px;
  font-weight: 500;
  border-radius: 10px;
  width: 90%;
  height: 40px;
  background-color: #1565d8;
  color: #ffffff;
  border: none;
  cursor: pointer;
  margin-top: 15px;
`
export const ErrorMsg = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: #ff0b37;
  align-self: center;
`
