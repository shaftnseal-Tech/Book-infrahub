import React from "react";
import '../style/tab.css'

const Tabs = ({ selectedTab, onTabChange }) => {
  const tabs = ["new", "story", "special"];

  return (
    <div className="tabs">
      {tabs.map(tab => (
        <button
          key={tab}
          className={selectedTab === tab ? "active" : ""}
          onClick={() => onTabChange(tab)}
        >
          {tab.toUpperCase()} BOOK
        </button>
      ))}
    </div>
  );
};

export default Tabs;
