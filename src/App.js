import './App.css';
import Header from './components/Header/Header';
import CoreConcepts from './components/CoreConcepts/CoreConcepts';
import Examples from './components/Examples/Examples';

function App() {
  return (
    <div className="appContainer">
      <Header />
      <main className="mainContainer">
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;
