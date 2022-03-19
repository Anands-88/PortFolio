import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Projects = dynamic(() => import("../containers/Projects"));
const GithubProfileCard = dynamic(() =>
	import("../components/GithubProfileCard")
);
import { openSource } from "../portfolio";
import SEO from "../components/SEO";

export default function Home({ githubProfileData }) {
	return (
		<div>
			<SEO
				data={{
					title: "Ananda S Holla",
					description:
						"A passionate Full Stack Web Developer.",
					image: "./img/profile.png",
					url: "https://ash-portfolio-8.herokuapp.com/",
					keywords: [
						"Ananda",
						"Ananda S Holla",
						"@Anands-88",
						"Anands-88",
						"Portfolio",
						"Ananda Portfolio ",
						"Ananda S Holla Portfolio",
						"web developer",
						"full stack",
						"full stack web developer",
						"nodejs ",
						"expressjs",
						"reactjs ",
						"contextapi",
						"redux",
					],
				}}
			/>
			<Navigation />
			<Greetings />
			<Skills />
			<Projects />
			<GithubProfileCard prof={githubProfileData} />
		</div>
	);
}

Home.prototype = {
	githubProfileData: PropTypes.object.isRequired,
};

export async function getStaticProps(_) {
	const githubProfileData = await fetch(
		`https://api.github.com/users/${openSource.githubUserName}`
	).then((res) => res.json());

	return {
		props: { githubProfileData },
	};
}
