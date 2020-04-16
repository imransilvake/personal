// app
import { EnvironmentRoutes } from './environment-routes';

// environment
export const environment = {
	production: false,
	firebaseConfig : {
		apiKey: "AIzaSyB6TTS6-1lojsocjABh_NkKyZrllm2vbWY",
		authDomain: "ikhan-personal.firebaseapp.com",
		databaseURL: "https://ikhan-personal.firebaseio.com",
		projectId: "ikhan-personal",
		storageBucket: "ikhan-personal.appspot.com",
		messagingSenderId: "799335037736",
		appId: "1:799335037736:web:25c0ebc1d30787e04a2e1d"
	}
};

// routing
export const ROUTING = EnvironmentRoutes;
