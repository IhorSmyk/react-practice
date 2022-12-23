import css from "./Header.module.css";
import { Container } from "../Container/Container";
import sprite from "../../assets/icons/sprite.svg";

console.log(sprite);

const Header = ({ title, cb }) => {
  console.log(cb);
  return (
    <header>
      <Container>
        <div className={css.wrapper}>
          {cb && (
            <button>
              <svg className={css.svg}>
                <use href={sprite + "#icon-arrow-left"}></use>
              </svg>
            </button>
          )}
          {/* <button>
            <svg className={css.svg}>
              <use href={sprite + "#icon-arrow-left"}></use>
            </svg>
          </button> */}
          <h2>{title}</h2>
        </div>
      </Container>
    </header>
  );
};

export default Header;
