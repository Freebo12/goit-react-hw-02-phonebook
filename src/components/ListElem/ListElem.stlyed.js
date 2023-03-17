import styled from '@emotion/styled';

export const BtnDelete = styled.button`
  border-color: gray;
  width: 150px;
  text-decoration: none;
  display: inline-block;
  color: white;
  font-weight: 900;
  padding: 20px 30px;
  margin: 10px 20px;
  border-radius: 10px;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  background-image: linear-gradient(
    to right,
    #a7be8e 0%,
    #067988 51%,
    #32264e 100%
  );
  background-size: 200% auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  transition: 0.5s;
  :hover {
    background-position: right center;
    color: red;
  }
`;
