// app
import { EnvironmentRoutes } from './environment-routes';

// prod environment
export const environment = {
	production: false
};

export const APP_URL = 'https://jovial-murdock-f13771.netlify.com';

// routing
export const ROUTING = APP_URL + EnvironmentRoutes;
