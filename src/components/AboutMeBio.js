import profileImage from '../images/profile.jpeg';
import { AboutMeData } from '../utils/AboutMeData';

const AboutMeBio = () => {
	return (
		<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
			{/* About me portfolio image start */}
			<div className="w-full sm:w-1/4 mb-7 sm:mb-0">
				<img src={profileImage} className="rounded-lg w-96" alt="" />
			</div>
			{/* About me portfolio image end */}

			{/* About me details start */}
			<div className="w-full sm:w-3/4 text-left">
				{AboutMeData.map((bio) => (
					<p
						className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
						key={bio.id}
					>
						{bio.bio}
					</p>
				))}
			</div>
			{/* About me details end */}
		</div>
	);
};

export default AboutMeBio;
