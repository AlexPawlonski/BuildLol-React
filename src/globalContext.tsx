import { ReactElement, createContext, useState } from "react";
import { Champion } from "./interface";

interface GlobalContextType {
  language: string;
  setLanguage: (language: string) => void;
  router: "data" | "champSelect";
  setRouter: (router: "data" | "champSelect") => void;
  region: string;
  setRegion: (region: string) => void;
  version: string;
  setVersion: (version: string) => void;
  champSelected: Champion | undefined;
  setChampSelected: (champSelected: Champion) => void;
}

export const GlobalContext = createContext({} as GlobalContextType);

export const GlobalContextProvider = ({ children }: { children: ReactElement }) => {
  const [router, setRouter] = useState<"data" | "champSelect">("champSelect");
  const [language, setLanguage] = useState("fr_FR");
  const [region, setRegion] = useState("EUW");
  const [version, setVersion] = useState("");
  const [champSelected, setChampSelected] = useState<Champion>();

  return (
    <GlobalContext.Provider
      value={{
        language,
        setLanguage,
        router,
        setRouter,
        region,
        setRegion,
        version,
        setVersion,
        champSelected,
        setChampSelected,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};