import styled from "styled-components";

type ButtonProps = {
  isActive?: boolean;
};
export const StyledTempButton = styled.button<ButtonProps>`
  border: 1px solid ${(props) => props.theme.colors.accent};
  border-radius: 10px;
  color: ${(props) => props.theme.colors.accent};
  padding: 0rem 1rem;

  opacity: ${(props) => (props.isActive ? "1" : "0.5")};

  box-shadow: 8px 5px 15px 5px rgba(0, 0, 0, 0.1);
`;
