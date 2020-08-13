import React from 'react';
import Head from 'next/head';
import BaseLayout from '../components/layouts/BaseLayout';
import Typed from 'react-typed';
import ReactDOM from "react-dom";
import App from "./_app";
import { Auth0Provider } from "@auth0/auth0-react";


import { Container, Row, Col } from 'reactstrap';

class Index extends React.Component {

	constructor(props) {
		super(props);
		this.roles = ["Developer", "Team Player", "Learner", "ReactJS"];
	}

	render() {
		return (
			<BaseLayout className="cover">
				<div className="main-section">
					{/* <div className="background-image">
						<img src="/images/background-index.png" />
					</div> */}
					
					<Container>
						<Row>

						{/* <svg className="wave"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
							<path fill="#00cba9" fill-opacity="0.75" d="M0,192L40,208C80,224,160,256,240,240C320,224,400,160,480,112C560,64,640,32,720,53.3C800,75,880,149,960,170.7C1040,192,1120,160,1200,149.3C1280,139,1360,149,1400,154.7L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
						</svg> */}

						{/* <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00cba9" fill-opacity="1" d="M0,0L40,53.3C80,107,160,213,240,218.7C320,224,400,128,480,74.7C560,21,640,11,720,53.3C800,96,880,192,960,224C1040,256,1120,224,1200,186.7C1280,149,1360,107,1400,85.3L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg> */}
						
						{/* !<svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,160L40,160C80,160,160,160,240,138.7C320,117,400,75,480,69.3C560,64,640,96,720,128C800,160,880,192,960,213.3C1040,235,1120,245,1200,224C1280,203,1360,149,1400,122.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg> */}
						
						{/* !<svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,160L40,138.7C80,117,160,75,240,74.7C320,75,400,117,480,165.3C560,213,640,267,720,240C800,213,880,107,960,85.3C1040,64,1120,128,1200,160C1280,192,1360,192,1400,192L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg> */}
						
						{/* !<svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="0.75" d="M0,256L30,213.3C60,171,120,85,180,53.3C240,21,300,43,360,64C420,85,480,107,540,122.7C600,139,660,149,720,133.3C780,117,840,75,900,85.3C960,96,1020,160,1080,202.7C1140,245,1200,267,1260,250.7C1320,235,1380,181,1410,154.7L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg> */}
						
						{/* <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00cba9" fill-opacity="0.75" d="M0,64L30,80C60,96,120,128,180,160C240,192,300,224,360,197.3C420,171,480,85,540,53.3C600,21,660,43,720,96C780,149,840,235,900,234.7C960,235,1020,149,1080,122.7C1140,96,1200,128,1260,144C1320,160,1380,160,1410,160L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg> */}
						
						{/* <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="0.75" d="M0,224L30,240C60,256,120,288,180,250.7C240,213,300,107,360,80C420,53,480,107,540,138.7C600,171,660,181,720,160C780,139,840,85,900,80C960,75,1020,117,1080,144C1140,171,1200,181,1260,165.3C1320,149,1380,107,1410,85.3L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg> */}
						
						{/* <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f ff" fill-opacity="0.75" d="M0,160L30,149.3C60,139,120,117,180,144C240,171,300,245,360,277.3C420,309,480,299,540,277.3C600,256,660,224,720,186.7C780,149,840,107,900,106.7C960,107,1020,149,1080,154.7C1140,160,1200,128,1260,101.3C1320,75,1380,53,1410,42.7L1440,32L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg> */}
						{/* <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00cba9" fill-opacity="1" d="M0,224L30,234.7C60,245,120,267,180,256C240,245,300,203,360,165.3C420,128,480,96,540,112C600,128,660,192,720,202.7C780,213,840,171,900,133.3C960,96,1020,64,1080,74.7C1140,85,1200,139,1260,154.7C1320,171,1380,149,1410,138.7L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg> */}
							<Col md="4" style={{'padding': "20px"}}>
								<div className="hero-section">
									<div className={`flipper`}>
										<div className="back">
											<div className="hero-section-content">
												<h2> Full Stack Web Developer </h2>
												{/* <div className="hero-section-content-intro">
													Senior Year Undergraduate Student
												</div> */}
											</div>
											{/* <div className="image"></div> */}
											<img className="image" src="/images/anas-blue-ic.png"/>
											<div className="shadow-custom">
												<div className="shadow-inner"> </div>
											</div>
										</div>
									</div>
								</div>
							</Col>
							<Col md="6" className="hero-welcome-wrapper" style={{'padding': "20px"}}>
								<div className="hero-welcome-text">
									<h1>
										Hi all, I'm Anas Ali.
										{/* Get informed, collaborate and discover projects I was working on through the years! */}
									</h1>
								</div>
								<div className="self-typed">
									<Typed
										loop
										typeSpeed={70}
										backSpeed={70}
										strings={this.roles}
										smartBackspace
										shuffle={false}
										backDelay={1000}
										fadeOut={false}
										fadeOutDelay={100}
										loopCount={0}
										showCursor
										cursorChar="|"
										/>
								</div>
								
								<div className="hero-welcome-bio">
									<h1>
										Let's take a look on my work.
									</h1>
								</div>
							</Col>
						</Row>
					</Container>
					
				</div>
			</BaseLayout>
		)
	}
}

export default Index;
