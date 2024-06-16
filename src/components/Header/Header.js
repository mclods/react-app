import reactLogo from '../../media/reactLogo.png';
import './Header.css';

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const descriptions = ['Fundamental', 'Core', 'Crucial'];
  const description = descriptions[getRandomInt(2)];

  return (
    <header className="headerContainer">
      <img src={reactLogo} className="appLogo" alt="logo" />
      <h2>React Essentials</h2>
      <p>Let's learn the {description.toLocaleLowerCase()} concepts of React</p>
    </header>
  );
}

export default Header;
