import styled from "styled-components";

type ButtonProps = {
  isActive?: boolean;
};
export const StyledTempButton = styled.button<ButtonProps>`
  border: 1px solid ${(props) => props.theme.colors.accent};
  border-radius: 10px;

  opacity: ${(props) => (props.isActive ? "1" : "0.5")};

  box-shadow: 8px 5px 15px 5px rgba(0, 0, 0, 0.1);

  margin: 1rem 0.5rem;
  padding: 0rem 1.25rem;
  text-align: center;

  color: ${(props) => props.theme.colors.accent};
  font-weight: bold;
`;
