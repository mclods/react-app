import './TabButton.css';

function TabButton({ children }) {
  return (
    <li>
      <button className="tabButton">{children}</button>
    </li>
  );
}

export default TabButton;
