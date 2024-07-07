import { useState } from 'react';
import { EXAMPLES } from '../../utils/data';
import TabButton from '../TabButton/TabButton';
import Section from '../Section/Section';
import Tabs from '../Tabs/Tabs';
import './Examples.css';

function Examples() {
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
    <Section title="Examples" className="examples">
      <Tabs
        tabButtons={
          <>
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
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}

export default Examples;
