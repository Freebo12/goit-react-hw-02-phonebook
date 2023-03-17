import styled from '@emotion/styled';
import {
  Field as FormikField,
  Form as FormikForm,
  ErrorMessage as FormikError,
} from 'formik';

export const BtnSubmit = styled.button`
  border-color: gray;
  width: 250px;
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
    color: yellow;
  }
`;

export const Form = styled(FormikForm)`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
`;

export const Field = styled(FormikField)`
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid #9b9b9b;
  outline: 0;
  font-size: 1.3rem;
  color: black;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.5s;

  &::placeholder {
    color: transparent;
    opacity: 0.7;
  }

  &::placeholder {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
    color: white;
    &:focus {
      color: transparent;
      background-color: transparent;
    }
  }
  &:focus {
    color: white;
    font-weight: 900;
    font-size: 30;
  }
`;

export const ErrorMessage = styled(FormikError)`
  color: red;
`;
