import React from "react";
import "./Footer.scss";

const Footer = () => {
	return (
		<div className="footer">
			<div className="top">
				<div className="item">
					<h1>Categories</h1>
					<span>Women</span>
					<span>Men</span>
					<span>Shoes</span>
					<span>Accessories</span>
					<span>New Arrivals</span>
				</div>
				<div className="item">
					<h1>Links</h1>
					<span>FAQ</span>
					<span>Pages</span>
					<span>Stores</span>
					<span>Compare</span>
					<span>Cookies</span>
				</div>
				<div className="item">
					<h1>About</h1>
					<span>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum,
						praesentium exercitationem pariatur dolorum dolorem deserunt totam!
						Labore dolore provident molestiae perspiciatis natus? Voluptatum ad
						id laboriosam amet, odio consequuntur reprehenderit.
					</span>
				</div>
				<div className="item">
					<h1>Contact</h1>
					<span>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum,
						praesentium exercitationem pariatur dolorum dolorem deserunt totam!
						Labore dolore provident molestiae perspiciatis natus? Voluptatum ad
						id laboriosam amet, odio consequuntur reprehenderit.
					</span>
				</div>
			</div>
			<div className="bottom">
				<div className="left">
					<span className="logo">SabStore</span>
					<span className="copyright">
						© 2023 SabStore. All rights reserved.
					</span>
				</div>
				<div className="right">
					<img src="/img/payment.png" alt="payments" />
				</div>
			</div>
		</div>
	);
};

export default Footer;
