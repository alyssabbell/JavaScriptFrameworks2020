import { createContext } from "react";

/**
 * I'm initializing the Context API here.
 * Every component that either sets or gets something from the Context API
 * will need to import this.
 */
const TranslatorContext = createContext();

export default TranslatorContext;
