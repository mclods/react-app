function Tabs({ tabButtons, TabButtonsContainer = 'menu', children }) {
  return (
    <>
      <TabButtonsContainer>{tabButtons}</TabButtonsContainer>
      {children}
    </>
  );
}

export default Tabs;
