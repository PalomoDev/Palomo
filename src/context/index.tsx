'use client'
import React, {createContext, useContext, useState} from "react";

type AppContextType = {
    mobile: boolean | null;
    setMobile: (isMobile: boolean | null) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppWrapper({ children }: { children: React.ReactNode;}) {
    const [mobile, setMobile] = useState<boolean | null>(false)

    const contextValue: AppContextType = {
        mobile, setMobile: () => setMobile(!mobile)
    }
    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppWrapper");
    }
    return context;
}