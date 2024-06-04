import React from "react";
import { useState } from "react";
import "./SpamTool.css";

function SpamTool() {
	const [formData, setFormData] = useState({
		count: "",
		extension: "",
		from: "",
		subject: "",
	});
	const [response, setResponse] = useState(null);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		fetch("/predict", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				"Attachment Count": formData.count,
				"Attachment Extension": formData.extension,
				"Email From": formData.from,
				"Email Subject": formData.subject,
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log("Success:", data);
				setResponse(data); // Set the response data
			})
			.catch((error) => {
				console.error("Error:", error);
				// Handle the error here
			});
	};

	return (
		<div className="style-0">
			<div className="style-1">
				<div className="style-2">
					<div className="style-3">
						<div className="style-4">
							<div className="style-5">
								<div className="style-6">
									<h2 className="style-7">
										Fill the form. <br className="style-8" /> It's easy.
									</h2>
									<form className="style-9" onSubmit={handleSubmit} noValidate>
										<div className="style-10">
											<div className="style-11">
												<label htmlFor="count" className="style-label">
													Attachment Count
												</label>
												<input
													type="text"
													className="style-12"
													name="count"
													placeholder="2"
													value={formData.count}
													onChange={handleChange}
												/>
											</div>
											<div className="style-13">
												<label htmlFor="extension" className="style-label">
													Attachment Extension
												</label>
												<input
													type="text"
													className="style-14"
													name="extension"
													placeholder="png, pdf, xml, etc."
													value={formData.extension}
													onChange={handleChange}
												/>
											</div>
										</div>
										<div className="style-15">
											<div className="style-16">
												<label htmlFor="from" className="style-label">
													Email From
												</label>
												<input
													type="text"
													className="style-17"
													name="from"
													placeholder="some-address@site.com"
													value={formData.from}
													onChange={handleChange}
												/>
											</div>
										</div>
										<div className="style-18">
											<div className="style-19">
												<label htmlFor="subject" className="style-label">
													Email Subject
												</label>
												<textarea
													className="style-20"
													name="subject"
													cols="30"
													rows="7"
													placeholder="Enter your subject"
													value={formData.subject}
													onChange={handleChange}
												></textarea>
											</div>
										</div>
										<div className="style-21">
											<div className="style-22">
												<input
													type="submit"
													value="Evaluate"
													className="style-23"
													onClick={handleSubmit}
												/>
												<span className="style-24"></span>
											</div>
										</div>
									</form>
									<div className="style-25"></div>
									<div className="style-26">
										Your message was sent, thank you!
									</div>
								</div>
								<div className="style-27">
									<h3 className="style-28">Let's talk about everything.</h3>
									<p className="style-29">
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
										Nihil deleniti itaque similique magni. Magni, laboriosam
										perferendis maxime!
									</p>
									{response && (
										<div className="response-container">
											<h2>Response from Server:</h2>
											<p>Status: {response.prediction}</p>
											<p>Message: {response.probability}</p>
										</div>
									)}

									{/* Some link to get more info, not needed now */}
									{/*<p className="style-30"><a href="#" className="style-31">Read more</a></p>*/}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SpamTool;
