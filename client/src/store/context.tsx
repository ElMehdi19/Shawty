import React, { createContext, useReducer } from "react";

type Props = {
  children: React.ReactNode;
};

export type CheckType = {
  short_route: string;
  original_url: string;
  visitors: { [country: string]: number };
  total_visitors: number;
};

export type ShortenType = {
  original_url: string;
  short_url: string;
};

export type ErrorType = {
  on: boolean;
  message: string;
};

type State = {
  Check: CheckType;
  Shorten: ShortenType;
  CheckError: ErrorType;
  ShortenError: ErrorType;
};

export type Action =
  | {
      type: "SHORTEN";
      data: ShortenType;
    }
  | {
      type: "CHECK";
      data: CheckType;
    }
  | {
      type: "SHORTEN_ERROR";
      message: string;
    }
  | {
      type: "CHECK_ERROR";
      message: string;
    };

const initState = {
  Check: {
    short_route: "",
    original_url: "",
    visitors: {},
    total_visitors: 0,
  },
  Shorten: {
    original_url: "",
    short_url: "",
  },
  CheckError: { on: false, message: "" },
  ShortenError: { on: false, message: "" },
};

type ContextValueType = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

export const Context: React.Context<ContextValueType> = createContext({
  state: initState,
  dispatch: (action: Action) => {},
});

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "CHECK":
      return { ...state, Check: action.data, CheckError: initState.CheckError };
    case "SHORTEN":
      return {
        ...state,
        Shorten: action.data,
        ShortenError: initState.ShortenError,
      };
    case "CHECK_ERROR":
      return {
        ...state,
        Check: initState.Check,
        CheckError: { on: true, message: action.message },
      };
    case "SHORTEN_ERROR":
      return {
        ...state,
        Shorten: initState.Shorten,
        ShortenError: { on: true, message: action.message },
      };
    default:
      return state;
  }
};

const ContextProvider = (props: Props) => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
