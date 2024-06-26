import './TabButton.css';

function TabButton({ children, onClick, isSelected }) {
  return (
    <li>
      <button
        className={`tabButton ${isSelected ? 'active' : ''}`}
        onClick={onClick}
      >
        {children}
      </button>
    </li>
  );
}

export default TabButton;
