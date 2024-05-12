// components/AppProvider.tsx
//"use client"

import React, { ReactNode, createContext, useContext, useState } from "react";

interface AppContextType {
  customerData: string | null;
  scriptCode: string;
  updateCustomerData: (data: string) => void;
  fetchScriptCode: (code: string) => void;
}
type Props = {
    children: ReactNode;
};

const AppContext = createContext<AppContextType>({
  customerData: null,
  scriptCode: "",
  updateCustomerData: () => {},
  fetchScriptCode: () => {},
});

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export function AppProvider ({ children }: Props) {
  const [customerData, setCustomerData] = useState<string | null>(null);
  const [scriptCode, setScriptCode] = useState("");

  const updateCustomerData = (data: string) => {
    setCustomerData(data);
  };

  const fetchScriptCode = (code: string) => {
    fetch(`/api/script?code=${encodeURIComponent(code)}`)
      .then((response) => response.text())
      .then((data) => setScriptCode(data))
      .catch((error) => console.error("Error fetching script:", error));
  };

  const contextValue: AppContextType = {
    customerData,
    scriptCode,
    updateCustomerData,
    fetchScriptCode,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
  
};

export const useApp = () => useContext(AppContext) as AppContextType;
