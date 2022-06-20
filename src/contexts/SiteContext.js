import React, { useContext, useState } from "react";

const SiteContext = React.createContext();
const defaultState = {};

export function useSite() {
  return useContext(SiteContext);
}

export function initialState() {
  const localState = (window) ? window.localStorage.getItem('state') : false;

  if(localState) {
    return JSON.parse(localState);
  }

  return defaultState;
}

export function SiteProvider({ children }) {
  const [contextState, setContextState] = useState(initialState());

  function setState(newState) {
    const state = {...contextState, ...newState};

    if(window) {
      window.localStorage.setItem('state', JSON.stringify(state));
    }

    setContextState(state);
  }

  const value = {
    setState,
    state: contextState
  };

  return (
      <SiteContext.Provider value={value}>
        {children}
      </SiteContext.Provider>
  )
}