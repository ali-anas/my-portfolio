import React from 'react';
import Head from 'next/head';
import BaseLayout from '../components/layouts/BaseLayout';
import Typed from 'react-typed';

import { Container, Row, Col } from 'reactstrap';

class Index extends React.Component {

	constructor(props) {
		super(props);
		this.roles = ["Developer", "Team Player", "ReactJS"];
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
							<Col md="4" style={{'padding': "20px"}}>
								<div className="hero-section">
									<div className={`flipper`}>
										<div className="back">
											<div className="hero-section-content">
												<h2> Full Stack Web Developer </h2>
												{/* <div className="hero-section-content-intro">
													Have a look at my portfolio.
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
