import React from "react";
import Headers from "./components/headers";
import Footer from "./components/footer";
import AlertSection from "./components/alertSection";
import FirstSection from "./components/firstSection";
import SecondSection from "./components/secondSection";
import ThirdSection from "./components/thirdSection";
import FourthSection from "./components/fourthSection";
import FivthSection from "./components/fivthSection";
import SixSection from "./components/sixSection";
import "./css/bootstrap.css";
import "./css/styles.css";
function App() {
	return (
		<div>
			<Headers />
			<AlertSection />
			<FirstSection />
			<SecondSection />
			<ThirdSection />
			<FourthSection />
			<FivthSection />
			<SixSection />
			<Footer />
		</div>
	);
}
export default App;
