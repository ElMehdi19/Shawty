import React, { createContext, useReducer } from "react";

type State = {
  themeState: {
    menuToggle: boolean;
    showModal: boolean;
  };
  dispatch: React.Dispatch<{ type: "MENU" | "MODAL" }>;
};

const initState = {
  menuToggle: false,
  showModal: false,
};

export const ThemeContext = createContext<State>({
  themeState: initState,
  dispatch: () => {},
});

const reducer = (
  state: { menuToggle: boolean; showModal: boolean },
  action: { type: "MENU" | "MODAL" }
) => {
  console.log(action.type, state);
  switch (action.type) {
    case "MENU":
      return { ...state, menuToggle: !state.menuToggle };
    case "MODAL":
      return { ...state, showModal: !state.showModal };
    default:
      return state;
  }
};

const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [themeState, dispatch] = useReducer(reducer, initState);
  return (
    <ThemeContext.Provider value={{ themeState, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
