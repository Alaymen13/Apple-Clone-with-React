import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";

// import react-router-dom
import { BrowserRouter} from "react-router-dom";
// Bootstrap CSS import
import "bootstrap/dist/css/bootstrap.min.css";
import "./Components/Youtube/YouTube.css";

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById("root")
);
