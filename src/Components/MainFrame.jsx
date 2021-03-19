import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import DisplayImages from "./DisplayImages";
import axios from "axios";
import "../index.css";

const MainFrame = () => {
	const [images, setImages] = useState();
	const [show, setShow] = useState();

	const handleClick = (e) => {
		setShow(e);
	};

	useEffect(() => {
		const getData = async () => {
			const { data: Images } = await axios.get(
				"https://www.mocky.io/v2/5ecb5c353000008f00ddd5a0/"
			);
			setImages(Images);
			console.log(Images);
		};
		getData();
	}, []);
	return (
		<>
			<div className="gallery">
				{images &&
					images.map((e) => (
						<>
							<img
								onClick={() => handleClick(e.urls.raw)}
								data-toggle="modal"
								data-target="#exampleModalCenter"
								src={e.urls.raw}
								alt="images"
							/>
						</>
					))}
			</div>
			<DisplayImages Src={show} />
		</>
	);
};

export default MainFrame;
