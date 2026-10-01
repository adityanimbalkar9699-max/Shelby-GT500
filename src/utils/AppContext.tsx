import React, { createContext, useContext, useState } from "react";

interface AppContextType {
  carColor: string;
  setCarColor: (color: string) => void;
  soundEnabled: boolean;
  setSoundEnabled: (enabled: boolean) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [carColor, setCarColor] = useState("#0A0A0A"); // Default Obsidian Black
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  return (
    <AppContext.Provider
      value={{
        carColor,
        setCarColor,
        soundEnabled,
        setSoundEnabled,
        activeSection,
        setActiveSection,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}
