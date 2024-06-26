import { useState } from 'react';
import './App.css';
import { CORE_CONCEPTS, EXAMPLES } from './utils/data';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept/CoreConcept';
import TabButton from './components/TabButton/TabButton';

function App() {
  const [selectedButton, setSelectedButton] = useState();

  const handleClick = (selectedButton) => {
    // selectedButton = components, jsx, props, state
    setSelectedButton(selectedButton);
  };

  let tabContent = <p>Please select a topic!</p>;

  if (selectedButton) {
    tabContent = (
      <div className="tabContent">
        <h3>{EXAMPLES[selectedButton].title}</h3>
        <p>{EXAMPLES[selectedButton].description}</p>
        <pre>
          <code>{EXAMPLES[selectedButton].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div className="appContainer">
      <Header />
      <main className="mainContainer">
        <section className="coreConcepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        <section className="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedButton === 'components'}
              onClick={() => handleClick('components')}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedButton === 'jsx'}
              onClick={() => handleClick('jsx')}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedButton === 'props'}
              onClick={() => handleClick('props')}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedButton === 'state'}
              onClick={() => handleClick('state')}
            >
              State
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
