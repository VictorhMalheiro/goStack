import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  padding: 30px;
  margin: 80px auto;
  box-shadow: 0 0px 20px -7px rgba(0, 0, 0, 0.15);
`;

export const Title = styled.div`
  background: #7159ce;
  max-width: 200px;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 100px;
  box-shadow: 0 5px 20px -7px rgba(113, 89, 206, 0.5);
  transition: all 0.2s ease-in-out;
  h1 {
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 5px;
    color: #fff;

    svg {
      color: #fff;
    }
    svg :hover {
      color: #2b2754;
    }
  }
  :hover {
    transform: scale(1.1);
    background: #7865e5;
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #7159ce;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & + li {
      border-top: 1px solid #eee;
    }

    a {
      color: #7159c1;
      text-decoration: none;
    }
  }
`;
