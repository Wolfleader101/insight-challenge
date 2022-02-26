import styled from "styled-components";

export const StyledGeoCoderInput = styled.div`
  z-index: 1;
  margin: 2rem 1rem;

  .mapboxgl-ctrl-geocoder {
    border-radius: 10px;
    box-shadow: inset 6px 5px 9px -1px rgb(0 0 0 / 10%);
  }

  .mapboxgl-ctrl-geocoder--icon {
    fill: ${(props) => props.theme.colors.accent};
    transform: scale(1.5);
  }

  .mapboxgl-ctrl-geocoder--input {
    color: ${(props) => props.theme.colors.accent};
    text-align: center;
    outline: none;

    &::placeholder {
      color: ${(props) => props.theme.colors.accent};
    }
  }
`;
