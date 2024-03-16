import reactLogo from './media/reactLogo.png';
import './App.css';
import { CORE_CONCEPTS } from './utils/data';

const descriptions = ['Fundamental', 'Core', 'Crucial'];
const description = descriptions[getRandomInt(2)];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function Header() {
  return (
    <header className="headerContainer">
      <img src={reactLogo} className="appLogo" alt="logo" />
      <h2>React Essentials</h2>
      <p>Let's learn the {description.toLocaleLowerCase()} concepts of React</p>
    </header>
  );
}

function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {
  return (
    <div className="appContainer">
      <Header />
      <main className="mainContainer">
        <section className="coreConcepts">
          <h2>{description} Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
