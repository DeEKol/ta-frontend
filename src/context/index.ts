import type { Dispatch, SetStateAction } from "react";
import { createContext } from "react";

type IAboutContext = [
  string | undefined,
  Dispatch<SetStateAction<string>> | undefined,
];
export const AboutContext = createContext<IAboutContext>(["", () => null]);
