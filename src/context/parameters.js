import { createContext, useContext } from "react";

export const ParameterContext = createContext(null);

export const ParameterProvider = ParameterContext.Provider;

export function useParameterContext() {
  const context = useContext(ParameterContext);
  if (!context) {
    throw new Error("useParameterContext must be used within a FormProvider");
  }
  return context;
}
