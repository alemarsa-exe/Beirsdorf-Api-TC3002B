import React from "react";
import logo from '../../images/logo.svg'

const Footer = () => {
	return (
		<div>
			<footer class="bg-white dark:bg-gray-800">
				<div class="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
					<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
					<div class="text-center">
						<a
							href="#"
							class="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white"
						>
							<img
								src={logo}
								class="h-6 mr-3 sm:h-9"
								alt="Landwind Logo"
							/>
							Spammer
						</a>
						<span class="block text-sm text-center text-gray-500 dark:text-gray-400">
							© 2024 Spammer™. All Rights Reserved. Built with{" "}
							<a
								href="https://flowbite.com"
								class="text-purple-600 hover:underline dark:text-purple-500"
							>
								Flowbite
							</a>{" "}
							and{" "}
							<a
								href="https://tailwindcss.com"
								class="text-purple-600 hover:underline dark:text-purple-500"
							>
								Tailwind CSS
							</a>
							.
						</span>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
