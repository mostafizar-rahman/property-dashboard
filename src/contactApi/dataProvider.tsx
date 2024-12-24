import { initialProperties } from "@/db/initialProperties";
import { Property } from "@/types/property";
import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";

type ContextType = {
    properties: Property[];
    setProperties: Dispatch<SetStateAction<Property[]>>;
};

export const DataContext = createContext<ContextType>({
    properties: [],
    setProperties: () => { },
});

export const DataProvider = ({ children }: { children: ReactNode }) => {
    const [properties, setProperties] = useState<Property[]>([]);

    useEffect(() => {
        setProperties(initialProperties);

    }, []);
    useEffect(() => {
        const storedProperties = localStorage.getItem('properties');
        if (storedProperties) {
            setProperties(JSON.parse(storedProperties));
        } 
    }, []);


    return (
        <DataContext.Provider value={{ properties, setProperties }}>
            {children}
        </DataContext.Provider>
    );
};
