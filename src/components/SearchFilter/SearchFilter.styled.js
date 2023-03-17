import styled from '@emotion/styled';

export const FilterSearch = styled.input`
  font-family: inherit;
  width: 191px;
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
    text-align: center;
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

export const SearchBox = styled.div`
  padding: 15px 0 0;
  width: 30%;
  margin-left: auto;
  margin-right: auto;
`;
