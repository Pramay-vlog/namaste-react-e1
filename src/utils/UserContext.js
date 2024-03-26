import { createContext } from "react";

const UserContext = createContext({
  UserName: "Default User",
});

export { UserContext };
