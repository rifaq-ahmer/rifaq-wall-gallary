import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import axios from "axios";
import "../index.css";

const Home = () => {
	const [images, setImages] = useState();
	useEffect(() => {
		const getData = async () => {
			const { data: Images } = await axios.get(
				"http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0"
			);
			setImages(Images);
			console.log(Images);
		};
		getData();
	}, []);
	return (
		<div className="gallery">
			{images &&
				images.map((e) => (
					<>
						<img src={e.urls.raw} alt="images" />
					</>
				))}
		</div>
	);
};

export default Home;
