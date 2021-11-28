// Components
import { Container } from '../Container/Container';

// Styles
import {Wrapper} from "./Main.styles"


export const Main = ({ children }) => {
  return (
    <Wrapper>
      <Container>
      {children}
      </Container>
    </Wrapper>
  );
};