import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

export const Title = styled(Link).attrs({
  to: "/"
})`
  color: var(--color-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;

export const ModeSwitcher = styled.div`
  color: var(--color-text);
  font-size: var(--fs-sm);
  /* font-weight: var(--fw-bold); */
  text-transform: capitalize;
  cursor: pointer;
  span {
    margin-left: 0.75rem;
  }
`;
