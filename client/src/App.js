import { Route, Routes } from "react-router-dom";
// BrowserRouter
// To add the ability to add routing functionality
// Switch
// Checks provided paths and stops checking all as soon as it finds a match
// Route
// Renders components based on the URL

// Home page
// import Navigation from "./Components/Nav/Nav";
// import Footer from "./Components/Footer/Footer";
// import Main from "./Components/Main/Main";

// Pages
import Iphone from "./Pages/Iphone/iphone";
import Ipad from "./Pages/Ipad/Ipad";
import Mac from "./Pages/Mac/Mac";
import Four04 from "./Pages/Four04/Four04";
import Productpage from "./Pages/Productpage/Productpage";
import Watch from "./Pages/Watch/Watch";
import Tv from "./Pages/TV/TV";
import Music from "./Pages/Music/Music";
import Support from "./Pages/Support/Support";
import Cart from "./Pages/Cart/Cart";

// import general css
import "./css/Style.css";
// import "./Components/Youtube/Youtube.css";
// Home page
import Nav from "./Components/Nav/Navigation";
import Paragraph from "./Components/Paragraph/Paragraph";
import First from "./Components/First/First";
import Second from "./Components/Second/Second";
import Third from "./Components/Third/Third";
import Fourth from "./Components/Fourth/Fourth";
import Fifth from "./Components/Fifth/Fifth";
import Sixth from "./Components/Sixth/Sixth";
import Youtube from "./Components/Youtube/Youtube";
import Footer from "./Components/Footer/Footer";

function App() {
	return (
		<>
			<Nav />
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Paragraph />
							<First />
							<Second />
							<Third />
							<Fourth />
							<Fifth />
							<Sixth />
							<Youtube />
						</>
					}
				/>
				<Route path="/iPhone" element={<Iphone />} />
				<Route path="/Ipad" element={<Ipad />} />
				<Route path="/mac" element={<Mac />} />
				<Route path="/watch" element={<Watch />} />
				<Route path="/tv" element={<Tv />} />
				<Route path="/Music" element={<Music />} />
				<Route path="/Support" element={<Support />} />
				<Route path="/Cart" element={<Cart />} />
				<Route path="*" element={<Four04 />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
