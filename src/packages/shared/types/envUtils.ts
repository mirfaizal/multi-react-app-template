import { Environment } from './Environment';
import ENVIRONMENT_VARIABLES from '../utils/envVariables';

export const getEnvironment = () => {
  const ipRegex = /^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/;
  const hostname = window.location.hostname;
  if (hostname.indexOf('localhost') > -1 || ipRegex.test(hostname)) {
    return Environment.DEV;
  }
  return Environment.PROD;
};

export const isProd = () => getEnvironment() === Environment.PROD;
export const isDev = () => getEnvironment() === Environment.DEV;

export const getEnvVariable = (key: any) => {
  const variablesMap = ENVIRONMENT_VARIABLES[key];

  switch (getEnvironment()) {
    case Environment.DEV:
      return variablesMap.dev;
    default:
      return variablesMap.prod;
  }
};
