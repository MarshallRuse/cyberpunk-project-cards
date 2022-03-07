import { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import "./App.css";
import ReactIcon from "./icons/react.svg";
import NodejsIcon from "./icons/nodejs.svg";
import ExpressIcon from "./icons/express.svg";
import FirebaseIcon from "./icons/firebase.svg";

const container = {
	init: {},
	show: {
		transition: {
			staggerChildren: 0.2,
		},
	},
};

const stackItem = {
	init: { opacity: 0, y: -50 },
	show: { opacity: 1, x: 0, y: 0 },
};

function App() {
	const stackIcons = [
		{ class: "react", icon: ReactIcon },
		{ class: "nodejs", icon: NodejsIcon },
		{ class: "express", icon: ExpressIcon },
		{ class: "firebase", icon: FirebaseIcon },
	];
	return (
		<div className='App'>
			<div className='card-wrapper1'>
				<div className='card-body1' data-augmented-ui='tl-clip tr-2-clip-x br-clip-inset both'></div>
				<div className='card-title1'>Workout Logger</div>
				<div className='card-subtitle1'>Record reps, sets, and weights</div>
				<div className='card-description1' data-augmented-ui='tl-clip'>
					Create custom, detailed exercises. Track your progress, get detailed summaries by muscle-group and
					exercise.
				</div>
			</div>
			<motion.div variants={container} initial='init' whileHover='show'>
				<Tilt
					className='card-wrapper2'
					perspective={800}
					// glareEnable={true}
					// glareMaxOpacity={0.45}
					gyroscope={true}
					tiltReverse={true}
					tiltMaxAngleX={10}
				>
					<div
						className='card-body2'
						data-augmented-ui='tl-clip tr-2-clip-x br-2-clip-x bl-2-clip-x both'
					></div>
					<div className='card-title2'>Workout Logger</div>
					<div className='card-subtitle2'>Record reps, sets, and weights</div>
					<button className='btn-card-action btn-demo' data-augmented-ui='tr-clip tl-clip both'>
						Demo
					</button>
					<button className='btn-card-action btn-source' data-augmented-ui='tr-clip tl-clip both'>
						Source
					</button>
					<div className='card-icon-stack'>
						{stackIcons.map((item, i) => (
							<motion.div
								key={i}
								variants={stackItem}
								className={`stack-icon-wrapper ${item.class}`}
								data-augmented-ui='all-hex border'
							>
								<img src={item.icon} />
							</motion.div>
						))}
						{/* <div className='stack-icon-wrapper react' data-augmented-ui='all-hex border'>
						<img src={ReactIcon} />
					</div>
					<div className='stack-icon-wrapper nodejs' data-augmented-ui='all-hex border'>
						<img src={NodejsIcon} />
					</div>
					<div className='stack-icon-wrapper express' data-augmented-ui='all-hex border'>
						<img src={ExpressIcon} />
					</div>
					<div className='stack-icon-wrapper firebase' data-augmented-ui='all-hex border'>
						<img src={FirebaseIcon} />
					</div> */}
					</div>
				</Tilt>
			</motion.div>
		</div>
	);
}

export default App;
