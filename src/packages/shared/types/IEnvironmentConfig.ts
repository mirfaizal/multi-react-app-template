import { IEnvironmentMap } from './IEnvironmentMap';

export interface IEnvironmentConfig {
  auth0ClientId: IEnvironmentMap;
  auth0Domain: IEnvironmentMap;
  mreHomeUrl: IEnvironmentMap;
  namespace: IEnvironmentMap;
  roleURL: IEnvironmentMap;
}
