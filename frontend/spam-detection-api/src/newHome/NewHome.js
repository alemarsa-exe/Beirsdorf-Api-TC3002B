import React, { useState } from "react";
import "./output.css";
import heroImage from "../images/hero.png";
import image1 from "../images/feature-1.png";
import image2 from "../images/feature-2.png";

function NewHome() {
	const [openSections, setOpenSections] = useState({});

	const toggleSection = (sectionId) => {
		setOpenSections((prevOpenSections) => ({
			...prevOpenSections,
			[sectionId]: !prevOpenSections[sectionId],
		}));
	};

	return (
		<div>
			{/* Hero landing */}
			<section className="bg-white dark:bg-gray-900">
				<div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
					<div className="mr-auto place-self-center lg:col-span-7">
						<h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
							{" "}
							Building digital products & brands.
						</h1>
						<p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
							This free and open-source landing page template was built using
							the utility classes from{" "}
							<a href="https://tailwindcss.com" className="hover:underline">
								Tailwind CSS
							</a>{" "}
							and based on the components from the{" "}
							<a
								href="https://flowbite.com/docs/getting-started/introduction/"
								className="hover:underline"
							>
								Flowbite Library
							</a>{" "}
							and the{" "}
							<a
								href="https://flowbite.com/blocks/"
								className="hover:underline"
							>
								Blocks System
							</a>
							.
						</p>
						<div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
							<a
								href="https://github.com/alemarsa-exe/Beirsdorf-Api-TC3002B"
								className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
							>
								<svg
									className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 496 512"
								>
									<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
								</svg>{" "}
								View on GitHub
							</a>
							<a
								href="https://www.figma.com/community/file/1125744163617429490"
								className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
							>
								<svg
									className="w-4 h-4 mr-2"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 200 300"
									width="1667"
									height="2500"
								>
									<style>
										{`
                      .st0 { fill: #0acf83; }
                      .st1 { fill: #a259ff; }
                      .st2 { fill: #f24e1e; }
                      .st3 { fill: #ff7262; }
                      .st4 { fill: #1abcfe; }
                    `}
									</style>
									<title>Figma.logo</title>
									<desc>Created using Figma</desc>
									<path
										className="st0"
										d="M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z"
									/>
									<path
										className="st1"
										d="M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z"
									/>
									<path
										className="st2"
										d="M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z"
									/>
									<path
										className="st3"
										d="M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50V0z"
									/>
									<path
										className="st4"
										d="M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z"
									/>
								</svg>
								Try Spam Tool
							</a>
						</div>
					</div>
					<div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
						<img src={heroImage} alt="hero image" />
					</div>
				</div>
			</section>

			{/* Next section Gray area */}
			<section class="bg-gray-50 dark:bg-gray-800">
				<div class="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
					<div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
						<div class="text-gray-500 sm:text-lg dark:text-gray-400">
							<h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
								Work with tools you already use
							</h2>
							<p class="mb-8 font-light lg:text-xl">
								Deliver great service experiences fast - without the complexity
								of traditional ITSM solutions. Accelerate critical development
								work, eliminate toil, and deploy changes with ease.
							</p>

							<ul
								role="list"
								class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
							>
								<li class="flex space-x-3">
									<svg
										class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clip-rule="evenodd"
										></path>
									</svg>
									<span class="text-base font-medium leading-tight text-gray-900 dark:text-white">
										Continuous integration and deployment
									</span>
								</li>
								<li class="flex space-x-3">
									<svg
										class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clip-rule="evenodd"
										></path>
									</svg>
									<span class="text-base font-medium leading-tight text-gray-900 dark:text-white">
										Development workflow
									</span>
								</li>
								<li class="flex space-x-3">
									<svg
										class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clip-rule="evenodd"
										></path>
									</svg>
									<span class="text-base font-medium leading-tight text-gray-900 dark:text-white">
										Knowledge management
									</span>
								</li>
							</ul>
							<p class="mb-8 font-light lg:text-xl">
								Deliver great service experiences fast - without the complexity
								of traditional ITSM solutions.
							</p>
						</div>
						<img
							class="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
							src={image1}
							alt="dashboard feature image"
						/>
					</div>

					<div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
						<img
							class="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
							src={image2}
							alt="feature image 2"
						/>
						<div class="text-gray-500 sm:text-lg dark:text-gray-400">
							<h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
								We invest in the world’s potential
							</h2>
							<p class="mb-8 font-light lg:text-xl">
								Deliver great service experiences fast - without the complexity
								of traditional ITSM solutions. Accelerate critical development
								work, eliminate toil, and deploy changes with ease.
							</p>

							<ul
								role="list"
								class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
							>
								<li class="flex space-x-3">
									<svg
										class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clip-rule="evenodd"
										></path>
									</svg>
									<span class="text-base font-medium leading-tight text-gray-900 dark:text-white">
										Dynamic reports and dashboards
									</span>
								</li>
								<li class="flex space-x-3">
									<svg
										class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clip-rule="evenodd"
										></path>
									</svg>
									<span class="text-base font-medium leading-tight text-gray-900 dark:text-white">
										Templates for everyone
									</span>
								</li>
								<li class="flex space-x-3">
									<svg
										class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clip-rule="evenodd"
										></path>
									</svg>
									<span class="text-base font-medium leading-tight text-gray-900 dark:text-white">
										Development workflow
									</span>
								</li>
								<li class="flex space-x-3">
									<svg
										class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clip-rule="evenodd"
										></path>
									</svg>
									<span class="text-base font-medium leading-tight text-gray-900 dark:text-white">
										Limitless business automation
									</span>
								</li>
								<li class="flex space-x-3">
									<svg
										class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clip-rule="evenodd"
										></path>
									</svg>
									<span class="text-base font-medium leading-tight text-gray-900 dark:text-white">
										Knowledge management
									</span>
								</li>
							</ul>
							<p class="font-light lg:text-xl">
								Deliver great service experiences fast - without the complexity
								of traditional ITSM solutions.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Next section Trusted Worldwide */}

			<section class="bg-white dark:bg-gray-900">
				<div class="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
					<div class="col-span-2 mb-8">
						<p class="text-lg font-medium text-purple-600 dark:text-purple-500">
							Trusted Worldwide
						</p>
						<h2 class="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">
							Trusted by over 600 million users and 10,000 teams
						</h2>
						<p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
							Our rigorous security and compliance standards are at the heart of
							all we do. We work tirelessly to protect you and your customers.
						</p>
						<div class="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
							<div>
								<a
									href="#"
									class="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700"
								>
									Explore Legality Guide
									<svg
										class="w-5 h-5 ml-1"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
											clip-rule="evenodd"
										></path>
									</svg>
								</a>
							</div>
							<div>
								<a
									href="#"
									class="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700"
								>
									Visit the Trust Center
									<svg
										class="w-5 h-5 ml-1"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
											clip-rule="evenodd"
										></path>
									</svg>
								</a>
							</div>
						</div>
					</div>
					<div class="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
						<div>
							<svg
								class="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z"
									clip-rule="evenodd"
								></path>
							</svg>
							<h3 class="mb-2 text-2xl font-bold dark:text-white">
								99.99% uptime
							</h3>
							<p class="font-light text-gray-500 dark:text-gray-400">
								For Landwind, with zero maintenance downtime
							</p>
						</div>
						<div>
							<svg
								class="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
							</svg>
							<h3 class="mb-2 text-2xl font-bold dark:text-white">
								600M+ Users
							</h3>
							<p class="font-light text-gray-500 dark:text-gray-400">
								Trusted by over 600 milion users around the world
							</p>
						</div>
						<div>
							<svg
								class="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
									clip-rule="evenodd"
								></path>
							</svg>
							<h3 class="mb-2 text-2xl font-bold dark:text-white">
								100+ countries
							</h3>
							<p class="font-light text-gray-500 dark:text-gray-400">
								Have used Landwind to create functional websites
							</p>
						</div>
						<div>
							<svg
								class="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
							</svg>
							<h3 class="mb-2 text-2xl font-bold dark:text-white">
								5+ Million
							</h3>
							<p class="font-light text-gray-500 dark:text-gray-400">
								Transactions per day
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* FAQs */}
			<section className="bg-white dark:bg-gray-900">
				<div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-24 lg:px-6 ">
					<h2 className="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white">
						Frequently asked questions
					</h2>
					<div className="max-w-screen-md mx-auto" style={{textAlign: "left"}}>
						<div id="accordion-flush" data-accordion="collapse">
							<h3 id="accordion-flush-heading-1">
								<button
									type="button"
									className={`flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 ${
										openSections["accordion-flush-body-1"]
											? "bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
											: ""
									}`}
									onClick={() => toggleSection("accordion-flush-body-1")}
									aria-expanded={openSections["accordion-flush-body-1"]}
									aria-controls="accordion-flush-body-1"
								>
									<span style={{fontWeight: "600"}}>Can I use Landwind in open-source projects?</span>
									<svg
										data-accordion-icon=""
										className={`w-6 h-6 shrink-0 ${
											openSections["accordion-flush-body-1"] ? "rotate-180" : ""
										}`}
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
											clipRule="evenodd"
										></path>
									</svg>
								</button>
							</h3>
							<div
								id="accordion-flush-body-1"
								className={`py-5 border-b border-gray-200 dark:border-gray-700 ${
									openSections["accordion-flush-body-1"] ? "" : "hidden"
								}`}
								aria-labelledby="accordion-flush-heading-1"
							>
								<div class="py-5 border-gray-200 dark:border-gray-700">
									<p class="mb-2 text-gray-500 dark:text-gray-400">
										Landwind is an open-source library of interactive components
										built on top of Tailwind CSS including buttons, dropdowns,
										modals, navbars, and more.
									</p>
									<p class="text-gray-500 dark:text-gray-400">
										Check out this guide to learn how to{" "}
										<a
											href="#"
											class="text-purple-600 dark:text-purple-500 hover:underline"
										>
											get started
										</a>{" "}
										and start developing websites even faster with components on
										top of Tailwind CSS.
									</p>
								</div>
							</div>
							{/* Repeat the structure below for the remaining questions */}
							<h3 id="accordion-flush-heading-2">
								<button
									type="button"
									className={`flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 ${
										openSections["accordion-flush-body-2"]
											? "bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
											: ""
									}`}
									onClick={() => toggleSection("accordion-flush-body-2")}
									aria-expanded={openSections["accordion-flush-body-2"]}
									aria-controls="accordion-flush-body-2"
								>
									<span style={{fontWeight: "600"}}>Is there a Figma file available?</span>
									<svg
										data-accordion-icon=""
										className={`w-6 h-6 shrink-0 ${
											openSections["accordion-flush-body-2"] ? "rotate-180" : ""
										}`}
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
											clipRule="evenodd"
										></path>
									</svg>
								</button>
							</h3>
							<div
								id="accordion-flush-body-2"
								className={`py-5 border-b border-gray-200 dark:border-gray-700 ${
									openSections["accordion-flush-body-2"] ? "" : "hidden"
								}`}
								aria-labelledby="accordion-flush-heading-2"
							>
								<div class="py-5 border-gray-200 dark:border-gray-700">
									<p class="mb-2 text-gray-500 dark:text-gray-400">
										Landwind is first conceptualized and designed using the
										Figma software so everything you see in the library has a
										design equivalent in our Figma file.
									</p>
									<p class="text-gray-500 dark:text-gray-400">
										Check out the{" "}
										<a
											href="#"
											class="text-purple-600 dark:text-purple-500 hover:underline"
										>
											Figma design system
										</a>{" "}
										based on the utility classes from Tailwind CSS and
										components from Landwind.
									</p>
								</div>
							</div>
							<h3 id="accordion-flush-heading-3">
								<button
									type="button"
									className={`flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 ${
										openSections["accordion-flush-body-3"]
											? "bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
											: ""
									}`}
									onClick={() => toggleSection("accordion-flush-body-3")}
									aria-expanded={openSections["accordion-flush-body-3"]}
									aria-controls="accordion-flush-body-3"
								>
									<span style={{fontWeight: "600"}}>
										What are the differences between Landwind and Tailwind UI?
									</span>
									<svg
										data-accordion-icon=""
										className={`w-6 h-6 shrink-0 ${
											openSections["accordion-flush-body-3"] ? "rotate-180" : ""
										}`}
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
											clipRule="evenodd"
										></path>
									</svg>
								</button>
							</h3>
							<div
								id="accordion-flush-body-3"
								className={`py-5 border-b border-gray-200 dark:border-gray-700 ${
									openSections["accordion-flush-body-3"] ? "" : "hidden"
								}`}
								aria-labelledby="accordion-flush-heading-3"
							>
								<div class="py-5  border-gray-200 dark:border-gray-700">
									<p class="mb-2 text-gray-500 dark:text-gray-400">
										The main difference is that the core components from
										Landwind are open source under the MIT license, whereas
										Tailwind UI is a paid product. Another difference is that
										Landwind relies on smaller and standalone components,
										whereas Tailwind UI offers sections of pages.
									</p>
									<p class="mb-2 text-gray-500 dark:text-gray-400">
										However, we actually recommend using both Landwind, Landwind
										Pro, and even Tailwind UI as there is no technical reason
										stopping you from using the best of two worlds.
									</p>
									<p class="mb-2 text-gray-500 dark:text-gray-400">
										Learn more about these technologies:
									</p>
									<ul class="pl-5 text-gray-500 list-disc dark:text-gray-400">
										<li>
											<a
												href="#"
												class="text-purple-600 dark:text-purple-500 hover:underline"
											>
												Landwind Pro
											</a>
										</li>
										<li>
											<a
												href="#"
												class="text-purple-600 dark:text-purple-500 hover:underline"
											>
												Tailwind UI
											</a>
										</li>
									</ul>
								</div>
							</div>
							<h3 id="accordion-flush-heading-4">
								<button
									type="button"
									className={`flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 ${
										openSections["accordion-flush-body-4"]
											? "bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
											: ""
									}`}
									onClick={() => toggleSection("accordion-flush-body-4")}
									aria-expanded={openSections["accordion-flush-body-4"]}
									aria-controls="accordion-flush-body-4"
								>
									<span style={{fontWeight: "600"}}>What about browser support?</span>
									<svg
										data-accordion-icon=""
										className={`w-6 h-6 shrink-0 ${
											openSections["accordion-flush-body-4"] ? "rotate-180" : ""
										}`}
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
											clipRule="evenodd"
										></path>
									</svg>
								</button>
							</h3>
							<div
								id="accordion-flush-body-4"
								className={`py-5 border-b border-gray-200 dark:border-gray-700 ${
									openSections["accordion-flush-body-4"] ? "" : "hidden"
								}`}
								aria-labelledby="accordion-flush-heading-4"
							>
								<div class="py-5 border-gray-200 dark:border-gray-700">
									<p class="mb-2 text-gray-500 dark:text-gray-400">
										The main difference is that the core components from
										Landwind are open source under the MIT license, whereas
										Tailwind UI is a paid product. Another difference is that
										Landwind relies on smaller and standalone components,
										whereas Tailwind UI offers sections of pages.
									</p>
									<p class="mb-2 text-gray-500 dark:text-gray-400">
										However, we actually recommend using both Landwind, Landwind
										Pro, and even Tailwind UI as there is no technical reason
										stopping you from using the best of two worlds.
									</p>
									<p class="mb-2 text-gray-500 dark:text-gray-400">
										Learn more about these technologies:
									</p>
									<ul class="pl-5 text-gray-500 list-disc dark:text-gray-400">
										<li>
											<a
												href="#"
												class="text-purple-600 dark:text-purple-500 hover:underline"
											>
												Landwind Pro
											</a>
										</li>
										<li>
											<a
												href="#"
												class="text-purple-600 dark:text-purple-500 hover:underline"
											>
												Tailwind UI
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default NewHome;