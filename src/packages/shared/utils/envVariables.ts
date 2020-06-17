import { IEnvironmentConfig } from '../types/IEnvironmentConfig';

const ENVIRONMENT_VARIABLES: IEnvironmentConfig = {
  
  auth0Domain: {
    dev: `dev-remoteeducation.us.auth0.com`,
    prod: `dev-remoteeducation.us.auth0.com`,
  },
  auth0ClientId: {
    dev: `5UQQrGamzid3SBXHkawytRb46jiBtrRd`,
    prod: `5UQQrGamzid3SBXHkawytRb46jiBtrRd`,
  },
  mreHomeUrl: {
    dev: 'http://localhost:4000',
    prod: 'https://auth0integrationandnav.d1a5u1sgczkkyj.amplifyapp.com',
  },
  namespace: {
    dev: `https://dev-remoteeducationcollab.com`,
    prod: `https://dev-remoteeducationcollab.com`,
  },
  roleURL: {
    dev: `https://dev-remoteeducationcollab.com/roles`,
    prod: `https://dev-remoteeducationcollab.com/roles`,
  },
};

export default ENVIRONMENT_VARIABLES;
