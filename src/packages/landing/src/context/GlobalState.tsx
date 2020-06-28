import React, { useReducer } from 'react';
import {GlobalReducer, LOGIN, LOGOUT, COVIDINFO} from './GlobalReducer';
import { GlobalContext } from './GlobalContext';

const GlobalState = (props: any) => {
  const [globalState, globalDispatch] = useReducer(GlobalReducer, {});
  const useLogin = () => {
    globalDispatch({
      type: LOGIN,
    });
  };
  const useLogout = () => {
    globalDispatch({
      type: LOGOUT,
    });
  };
  const getCovidInfo = () => {
    globalDispatch({
      type: COVIDINFO,
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        useLogin: useLogin,
        useLogout: useLogout,
        getCovidInfo: getCovidInfo
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
