import React from 'react';

const education = [
	{
		title: 'The University of Texas',
		secondary: 'Austin, TX',
		date: 'Spring 2016',
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
		subtitle: 'Software Engineer',
		date: 'April 2017 - August 2018',
		details: [
			"Worked on a strong team of 5 engineers building the next iteration of Weebly's drag n' drop website editor",
			'Worked with PHP and Backbone.js to make the editor more secure and responsive',
		],
	},
	{
		title: "The World's Coffee",
		secondary: 'Austin, TX',
		subtitle: 'Freelance Software Engineer',
		date: 'November 2016 - January 2017',
		details: [
			'Built initial coffee bean storefront in 2 months',
			"Used React for the client and admin sites, Express for the API, and Stripe's API for payments",
		],
	},
	{
		title: 'Weebly',
		secondary: 'San Francisco, CA',
		subtitle: 'Software Engineer Intern',
		date: 'June 2015-August 2015',
		details: [
			"Worked on a strong team of 5 engineers building the next iteration of Weebly's drag n' drop website editor",
			'Worked with PHP and Backbone.js to make the editor more secure and responsive',
		],
	},
];

const projects = [
	{
		title: 'Daily Journal',
		secondary: 'Austin, TX',
		date: 'Spring 2016',
		details: [
			'Built initial coffee bean storefront in 2 months',
			"Used React for the client and admin sites, Express for the API, and Stripe's API for payments",
		],
		link: '',
	},
	{
		title: '@react-midi',
		secondary: 'Austin, TX',
		date: 'Spring 2016',
		details: [
			'Built initial coffee bean storefront in 2 months',
			"Used React for the client and admin sites, Express for the API, and Stripe's API for payments",
		],
		link: '',
	},
	{
		title: 'Patterning Clone',
		secondary: 'Austin, TX',
		date: 'Spring 2016',
		details: [
			'Built initial coffee bean storefront in 2 months',
			"Used React for the client and admin sites, Express for the API, and Stripe's API for payments",
		],
		link: '',
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
	<div className="resume-header">
		<div className="left-side">
			<h2 className="name">Nick Roberts</h2>
			<a className="website" href="https://meadowlab.io">
				meadowlab.io
			</a>
			<a className="website" href="https://github.com/nickroberts404">
				github.com/nickroberts404
			</a>
		</div>
		<div className="right-side">
			<a className="email" href="mailto:nickroberts404@gmail.com">
				nickroberts404@gmail.com
			</a>
			<div className="phone">512-788-3156</div>
			<div className="location">Austin, TX</div>
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
		<div className="header">
			<div className="title">{item.title}</div>
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
		<div>
			JavaScript, Python, React, Express, Mocha, ES6, MongoDB, D3, Sass, GIS, Git, HTML5/CSS3
		</div>
	</div>
);

export default App;
