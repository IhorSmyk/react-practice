import css from './Header.module.css';

console.log(css);

const Header = () => {
  return (
    <header>
          <div className={ css.container}>
        <h2>Журнал витрат</h2>
      </div>
    </header>
  );
};

export default Header;
