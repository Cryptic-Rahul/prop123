import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<Auth0Provider
			domain="dev-ys0f6mw3pjm2zagj.us.auth0.com"
			clientId="vRZdlxsuM8c560NWvTTAExsyHszOJtt5"
			authorizationParams={{
				redirect_uri: window.location.origin,
			}}
		>
			<App />
		</Auth0Provider>
		,
	</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
