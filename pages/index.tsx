import styled from "styled-components";

import { DivStyled } from "./api/styled";

const Title = styled.h1`
  color: blue;
`;

const Home = () => {
  return (
    <div>
      <p>hello</p>
      <Title>Title</Title>
      <DivStyled />
    </div>
  );
};

export default Home;
