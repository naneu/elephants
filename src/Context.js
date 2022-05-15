import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { filter } from "lodash";

const url = "https://elephant-api.herokuapp.com/elephants";
const proxy = "https://api.allorigins.win/get?url=";
const AppContext = React.createContext();

function AppProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [elephants, setElephants] = useState([]);

  const getElephants = async () => {
    setLoading(true);
    try {
      const response = await axios.get(proxy + url);
      const data = await response.data;
      const results = JSON.parse(data.contents);
      const elephantsData = filter(results, "index");
      setLoading(false);
      setElephants(elephantsData);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    getElephants();
  }, []);
  return (
    <AppContext.Provider value={{ loading, elephants }}>
      {children}
    </AppContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(AppContext);
}

export { AppContext, AppProvider };
