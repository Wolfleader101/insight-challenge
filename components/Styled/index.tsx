import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  max-width: 100vw;
  height: 100vh;
  max-height: 100vh;
  width: 100vw;
  @media (min-width: 1024px) {
    width: 100%;
  }
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const ColContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
`;

export const Heading = styled.h1`
  font-weight: 800;
  text-align: center;
`;

export const SubText = styled.p`
  font-size: 15px;
  text-align: center;
`;
