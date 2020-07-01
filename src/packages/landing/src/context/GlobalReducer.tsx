export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const COVIDINFO = 'COVIDINFO';

export const GlobalReducer = (
  state: any,
  action: {
    type: any;
  },
) => {
  switch (action.type) {
    case LOGIN:
      return useLogin(state);
    case LOGOUT:
      return useLogout(state);
    case COVIDINFO:
      return getCovidInfo(state);
    default: {
      return state;
    }
  }
};

const useLogin = (state: any) => {
  console.log("User Login");
  isLoggedIn: true;
};
const useLogout = (state: any) => {
  console.log("User Logout");
  isLoggedIn: false;
};

const getCovidInfo = (state: any) => {
  console.log("Getting COVID information");
  
};


