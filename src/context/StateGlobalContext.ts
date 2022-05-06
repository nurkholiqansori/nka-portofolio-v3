import React, { Context, Dispatch, SetStateAction } from "react";

export interface StateGlobalContextType {
  loading: boolean
  setLoading: Dispatch<SetStateAction<boolean>>
}

export const StateGlobalContext: Context<StateGlobalContextType | null> = React.createContext<StateGlobalContextType | null>(null);
