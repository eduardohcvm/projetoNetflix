"use client"

import { IShow } from "@/types/tvMazeTypes";
import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { createContext } from "react";

interface ShowProviderProps{
    children: ReactNode;
}

interface IShowContext{
    search: string;
    setSearch: Dispatch<SetStateAction<string>>;
}

export const showContext = createContext({} as IShowContext);

export default function ShowProvider({children}: ShowProviderProps){
    const [search,setSearch] = useState("");
    const [showList, setShowList] = useState<IShow[]>();
    return(
        <showContext.Provider value={{search, setSearch}}>
                {children}
        </showContext.Provider>
    )
}