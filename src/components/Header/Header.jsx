import css from "./Header.module.css";
import { Container } from "../Container/Container";

console.log(css);

const Header = () => {
  return (
    <header>
      <Container>
        <h2>Журнал витрат</h2>
      </Container>
    </header>
  );
};

export default Header;
