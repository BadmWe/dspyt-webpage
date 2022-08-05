import React from "react";

const GlobalContext = React.createContext({
  data: "",
  update: () => {},
});

export default GlobalContext;
