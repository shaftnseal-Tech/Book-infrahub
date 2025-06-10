import { createContext, useState, useEffect } from 'react';

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {

  const storedAccount = localStorage.getItem('account');
  const [account, setAccount] = useState(storedAccount ? JSON.parse(storedAccount) : null);

  useEffect(() => {
    if (account) {
      localStorage.setItem('account', JSON.stringify(account)); 
    } else {
      localStorage.removeItem('account');
    }
  }, [account]);

  return (
    <DataContext.Provider value={{ account, setAccount }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
