import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: scroll;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  h1 {
    font-size: 20px;
  }

  div {
    > button {
      margin-left: 10px;
    }
  }
`;

export const Project = styled.div`
  background: rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin: 0 0 20px;
  padding: 20px;
  cursor: pointer;
  transition: background 0.3s;

  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }

  button {
    opacity: 0.4;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.9;
    }
  }

  p {
    font-size: 18px;
  }
`;
