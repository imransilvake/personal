// app
import { EnvironmentRoutes } from './environment-routes';

// prod environment
export const environment = {
	production: false
};

export const APP_URL = 'http://localhost:4000';

// routing
export const ROUTING = APP_URL + EnvironmentRoutes;
