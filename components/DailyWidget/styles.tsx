import { Container } from "components/Styled";
import styled from "styled-components";

export const WidgetContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-shadow: 15px 15px 10px -3px rgba(0, 0, 0, 0.1);
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WidgetDay = styled.h2`
  font-weight: bold;
`;
export const WidgetDate = styled.p`
  font-weight: 400;
`;
