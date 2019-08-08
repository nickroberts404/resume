import React from 'react';

const education = [
	{
		title: 'The University of Texas',
		secondary: 'Austin, TX',
		date: 'Fall 2012 - Spring 2016',
		details: [
			'B.S.A in Computer Science',
			'Relevant Coursework: Software Engineering, Info Retrieval and Web Search, Data Management',
		],
	},
];

const experience = [
	{
		title: 'StreamMe',
		secondary: 'Austin, TX',
		subtitle: 'Front End Engineer',
		date: 'April 2017 - August 2018',
		details: [
			'Collaborated closely with a team of 10 engineers to build and maintain a video streaming platform',
			'Led development of greenfield project "Communities" to build a more inclusive environment for streamers',
			'Used React and Flux to develop and enhance the UX/UI for an isomorphic web app, focusing on a realtime chat component and helpful style guide',
		],
	},
	{
		title: "The World's Coffee",
		secondary: 'Austin, TX',
		subtitle: 'Freelance Software Engineer',
		date: 'November 2016 - January 2017',
		details: [
			'Built and deployed early-stage coffee bean storefront in 2 months',
			"Used React and Redux to build out the client and admin sites, Express for the API, and Stripe's API for payments",
		],
	},
	{
		title: 'Weebly',
		secondary: 'San Francisco, CA',
		subtitle: 'Software Engineer Intern',
		date: 'June 2015-August 2015',
		details: [
			"Worked on the drag n' drop team to build a more secure and responsive website creator using PHP and Backbone.js",
			'Migrated the website editor to an iframe for security, focusing personally on inter-window communication',
		],
	},
];

const projects = [
	{
		title: 'PlaceList',
		secondary: 'Express, GraphQL, React, Google Maps API',
		date: 'July 2019',
		details: [
			'A simple app for creating and sharing "playlists" of places, using Google\'s Places API for location data',
			'Server authenticates with Facebook credentials and provides a GraphQL interface for client using Apollo',
		],
		link: 'https://placelist.casa',
	},
	{
		title: 'Groovin',
		secondary: 'React, D3',
		date: 'June 2019',
		details: [
			'A circular 8-part drum machine that outputs MIDI note/velocity in addition to playing samples through Web Audio',
			'Built to test capabilities of @react-midi, can receive as well as send MIDI clock and transport messages',
		],
		link: 'https://groovin.casa',
	},
	{
		title: '@react-midi',
		secondary: 'React',
		date: 'April 2019',
		details: [
			'A library of hooks and components for working with MIDI in React, used for communicating with music devices',
			'Encourages a more tactile web experience by making it easy to accept input from knobs, sliders, and buttons',
		],
		link: 'https://www.npmjs.com/package/@react-midi/hooks',
	},
	{
		title: 'Daily Journal',
		secondary: 'React, Redux, Local Storage',
		date: 'March 2019',
		details: [
			"A journal for keeping short summaries of day's activities used for personal reflection",
			"Implements drag n' drop for organization and a Github inspired contribution calendar for motivation/navigation",
		],
		link: 'https://dailyjournal.me/',
	},
];

function App() {
	return (
		<div className="resume">
			<Header />
			<Section title="Education" items={education} />
			<Section title="Work Experience" items={experience} />
			<Section title="Projects" items={projects} />
			<SkillSection />
		</div>
	);
}

const Header = () => (
	<div className="header">
		<div className="left-side">
			<h2 className="name">Nick Roberts</h2>
			<a className="website contact" href="https://meadowlab.io">
				meadowlab.io
			</a>
			<a className="website contact" href="https://github.com/nickroberts404">
				github.com/nickroberts404
			</a>
		</div>
		<div className="right-side">
			<a className="email contact" href="mailto:nickroberts404@gmail.com">
				nickroberts404@gmail.com
			</a>
			<div className="phone contact">512-788-3156</div>
			<div className="location contact">Austin, TX</div>
		</div>
	</div>
);

const Section = ({ title, items }) => (
	<div className="section">
		<div className="section-title">{title}</div>
		<div className="section-items">
			{items.map((i) => (
				<Item key={i.title} item={i} />
			))}
		</div>
	</div>
);

const Item = ({ item }) => (
	<div className="item">
		<div className="item-header">
			<a className="item-title" href={item.link || null}>
				{item.title}
			</a>
			<div className="secondary">{item.secondary}</div>
			<div className="date">{item.date}</div>
		</div>
		<div className="subtitle">{item.subtitle}</div>
		<div className="details">
			{item.details.map((d, i) => (
				<div key={i} className="detail">
					{d}
				</div>
			))}
		</div>
	</div>
);

const SkillSection = () => (
	<div className="section">
		<div className="section-title">Technical Skills</div>
		<div className="details">
			JavaScript, Python, React, Redux, Express, ES6, GraphQL, MongoDB, D3, Sass, GIS, Git,
			HTML5/CSS3
		</div>
	</div>
);

export default App;
