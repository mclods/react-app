import { CORE_CONCEPTS } from '../../utils/data';
import CoreConcept from '../CoreConcept/CoreConcept';
import Section from '../Section/Section';
import './CoreConcepts.css';

function CoreConcepts() {
  return (
    <Section title="Core Concepts" className="coreConcepts">
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </Section>
  );
}

export default CoreConcepts;
