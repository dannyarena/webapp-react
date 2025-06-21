import { createContext, useContext, useState } from "react";

const LoaderContext = createContext();

export function useLoader() {
    return useContext(LoaderContext);
}

export function LoaderProvider({ children }) {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
            {children}
        </LoaderContext.Provider>
    );
}