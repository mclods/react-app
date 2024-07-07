import './TabButton.css';

function TabButton({ children, isSelected, ...props }) {
  return (
    <li>
      <button className={`tabButton ${isSelected ? 'active' : ''}`} {...props}>
        {children}
      </button>
    </li>
  );
}

export default TabButton;
