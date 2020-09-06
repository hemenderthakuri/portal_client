import React, { useContext } from "react";
import { GlobalState } from "../../globalState";

interface ApplicationContext {
    globalState: GlobalState
}

// @ts-ignore
const ApplicationStateContext = React.createContext<ApplicationContext>();

interface ApplicationProviderProps {
    children: any,
    state: GlobalState
}

export const ApplicationStateProvider: React.FC<ApplicationProviderProps> = ({ children, state }) => {

    const contextValue = {
        globalState: state
    };

    return (
        <ApplicationStateContext.Provider value={contextValue}>
            {children}
        </ApplicationStateContext.Provider>
    )
};

export const useApplicationState = (): ApplicationContext => {
    return useContext(ApplicationStateContext);
};
