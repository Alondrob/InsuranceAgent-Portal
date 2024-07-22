import { clientId,domain} from '../auth.config.json';

// src/environments/environment.ts
export const environment = {
  production: false,
  auth0: {
    domain: 'dev-azdiz78l7mdfe8qv.us.auth0.com',
    clientId: 'roYIxVrrlZVyjje3N24ZBk6Bq2lOM5JA',
    redirectUri: window.location.origin
  }
};
