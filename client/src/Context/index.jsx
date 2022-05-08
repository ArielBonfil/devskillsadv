import React, { useState, useEffect } from "react";

export const AppContext = React.createContext();
export const AppContextProvider = (props) => {
  const [actualData, setActualData] = useState();
  const [token, setToken] = useState();
  const addMember = (memberToAdd) => {
    var url = "http://localhost:8081/api/members";

    fetch(url, {
      method: "POST",
      body: JSON.stringify(memberToAdd),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .catch((error) => {
        return error;
      })
      .then((response) => {
        setActualData([...actualData, memberToAdd]);
        return response;
      });
  };
  const getData = () => {
    var url = "http://localhost:8081/api/members";

    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .catch((error) => {
        return error;
      })
      .then((response) => {
        setActualData(response);
      });
  };
  const authenticate = () => {
    var url = "http://localhost:8081/auth";

    fetch(url, {
      method: "POST",
      body: JSON.stringify({ username: "sarah", password: "connor" }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => {
        return error;
      })
      .then((response) => {
        setToken(response.token);
      });
  };
  useEffect(() => {
    if (token) {
      getData();
    }
  }, [token]);

  let data = {
    actualData,
    setActualData,
    addMember,
    authenticate,
    setToken,
    getData,
  };
  return (
    <AppContext.Provider value={data}>{props.children}</AppContext.Provider>
  );
};
