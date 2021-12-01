import AboutClientSingle from './AboutClientSingle';
import { ClientsData, ClientsHeading } from '../utils/ClientsData';

const AboutClients = () => {
	return (
		<div className="mt-10 sm:mt-20">
			<p className="text-2xl sm:text-4xl text-primary-dark dark:text-primary-light font-sans font-semibold">
				{ClientsHeading}
			</p>
			<div className="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-20 gap-2">
				{ClientsData.map((client) => (
					<AboutClientSingle
						title={client.title}
						image={client.img}
						key={client.id}
					/>
				))}
			</div>
		</div>
	);
};

export default AboutClients;
