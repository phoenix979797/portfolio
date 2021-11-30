import { FiMoon, FiSun } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import ThemeSwitcher from '../hooks/ThemeSwitcher';

import logoLight from '../images/logo-light.svg';
import logoDark from '../images/logo-dark.svg';

const AppHeader = () => {
	const [activeTheme, setTheme] = ThemeSwitcher();

	return (
		<div>
			<nav id="nav" className="sm:container sm:mx-auto">
				{/* Header start */}
				<div className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">
					{/* Header menu links and small screen hamburger menu start */}
					<div className="flex justify-between items-center px-4 sm:px-0">
						<div>
							<Link to="/">
								{activeTheme === 'dark' ? (
									<img
										src={logoDark}
										className="w-36"
										alt="Dark Logo"
									/>
								) : (
									<img
										src={logoLight}
										className="w-36"
										alt="Dark Logo"
									/>
								)}
							</Link>
						</div>

						{/* Theme switcher small screen */}

						{/* Small screen hamburger menu start */}
						<div className="sm:hidden">
							<button
								type="button"
								className="focus:outline-none"
								aria-label="Hamburger Menu"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									className="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"
								>
									<path
										v-if="isOpen"
										fill-rule="evenodd"
										d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
										clip-rule="evenodd"
									></path>
									<path
										v-if="!isOpen"
										fill-rule="evenodd"
										d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
									></path>
								</svg>
							</button>
						</div>
						{/* Small screen hamburger menu end */}
					</div>
					{/* Header menu links and small screen hamburger menu end */}

					{/* Header links start*/}
					<div className="m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
						<Link
							to="/projects"
							className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
							aria-label="Projects"
						>
							Projects
						</Link>
						<Link
							to="/about"
							className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
							aria-label="About Me"
						>
							About Me
						</Link>
						<Link
							to="/contact"
							className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
							aria-label="Contact"
						>
							Contact
						</Link>
						<div className="border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark">
							<button
								className="sm:hidden block text-left text-md font-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-4 py-2 mt-2"
								aria-label="Hire Me Button"
							>
								Hire Me
							</button>
						</div>
					</div>
					{/* Header links end */}

					{/* Header right section buttons start */}
					<div className="hidden sm:flex justify-between items-center flex-col md:flex-row">
						{/* Hire me button start */}
						<div>
							<button
								className="text-md font-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-lg px-5 py-2.5"
								aria-label="Hire Me Button"
							>
								Hire Me
							</button>
						</div>
						{/* Hire me button end */}

						{/* Theme switcher large screen */}
						<div
							onClick={() => setTheme(activeTheme)}
							aria-label="Theme Switcher"
							className="ml-8 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
						>
							{activeTheme === 'dark' ? (
								<FiMoon class="text-liText-ternary-dark hover:text-gray-400 dark:text-liText-ternary-light dark:hover:text-liBorder-primary-light text-xl" />
							) : (
								<FiSun class="text-gray-200 hover:text-gray-50 text-xl" />
							)}
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default AppHeader;
