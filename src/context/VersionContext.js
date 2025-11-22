import React, { createContext, useContext, useState } from "react";

const VersionContext = createContext();

export const useVersion = () => {
  const context = useContext(VersionContext);
  if (!context) {
    throw new Error("useVersion must be used within a VersionProvider");
  }
  return context;
};

export const VersionProvider = ({ children }) => {
  const [version, setVersion] = useState("v0.2");

  const switchVersion = (newVersion) => {
    setVersion(newVersion);
    // Scroll to top when switching versions
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <VersionContext.Provider value={{ version, switchVersion }}>
      {children}
    </VersionContext.Provider>
  );
};
