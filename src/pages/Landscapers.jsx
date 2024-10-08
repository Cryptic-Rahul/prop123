import React from "react";
import styles from "./Plumbers.module.css";
import NewsLetter from "./NewsLetter";
import SubFooter from "./SubFooter";
import Footer from "./Footer";
import Plumber_icon from "../utils/img/landscapers.png";
import { Link } from "react-router-dom";
function Landscapers() {
	return (
		<>
			<div className={`${styles.plumbers}`}>
				<h1>Our Best Landscapers </h1>
				<div className={`${styles.pcards} `}>
					<div className={`${styles.pcard}`}>
						<div className={`${styles.sec1}`}>
							<div className={`${styles.picon_card}`}>
								<img className="img1" src={Plumber_icon} alt="icon blue" />
								{/* <img className="img2" src={Plumber_icon_white} alt="icon white" /> */}
							</div>
							<h2> Souvik Mandal</h2>
						</div>
						<div className={`${styles.sec2}`}>
							<p>
								Service offered: <br />
								➡️ Fixture Repair and Replacement. <br />
								➡️ Drain Cleaning. <br />
								➡️ Water Supply Service on Kitchen.
							</p>
							<h4>
								Availability: <br />
								08:00 AM - 11:00 PM
							</h4>
						</div>
						<div className={`${styles.sec3}`}>
							<Link to="/Appointment1">
								<button className={`${styles.btn}`}>Book</button>
							</Link>
							<h4>
								You Pay: <br />
								150 - 200 rs /-
							</h4>
						</div>
					</div>
					<div className={`${styles.pcard}`}>
						<div className={`${styles.sec1}`}>
							<div className={`${styles.picon_card}`}>
								<img className="img1" src={Plumber_icon} alt="icon blue" />
								{/* <img className="img2" src={Plumber_icon_white} alt="icon white" /> */}
							</div>
							<h2>Biplab Samanta </h2>
						</div>
						<div className={`${styles.sec2}`}>
							<p>
								Service offered: <br />
								➡️ Fixture Repair and Replacement. <br />
								➡️ Drain Cleaning. <br />
								➡️ Water Supply Service on Kitchen.
							</p>
							<h4>
								Availability: <br />
								08:00 AM - 11:00 PM
							</h4>
						</div>
						<div className={`${styles.sec3}`}>
							<Link to="/Appointment1">
								<button className={`${styles.btn}`}>Book</button>
							</Link>
							<h4>
								You Pay: <br />
								150 - 200 rs /-
							</h4>
						</div>
					</div>
					<div className={`${styles.pcard}`}>
						<div className={`${styles.sec1}`}>
							<div className={`${styles.picon_card}`}>
								<img className="img1" src={Plumber_icon} alt="icon blue" />
								{/* <img className="img2" src={Plumber_icon_white} alt="icon white" /> */}
							</div>
							<h2>Soumitra Majumdar </h2>
						</div>
						<div className={`${styles.sec2}`}>
							<p>
								Service offered: <br />
								➡️ Fixture Repair and Replacement. <br />
								➡️ Drain Cleaning. <br />
								➡️ Water Supply Service on Kitchen.
							</p>
							<h4>
								Availability: <br />
								08:00 AM - 11:00 PM
							</h4>
						</div>
						<div className={`${styles.sec3}`}>
							<Link to="/Appointment1">
								<button className={`${styles.btn}`}>Book</button>
							</Link>
							<h4>
								You Pay: <br />
								150 - 200 rs /-
							</h4>
						</div>
					</div>
				</div>
			</div>

			{/* news letter */}
			<NewsLetter />
			{/* sub footer  */}
			<SubFooter />
			{/* footer  */}
			<Footer />
		</>
	);
}

export default Landscapers;
