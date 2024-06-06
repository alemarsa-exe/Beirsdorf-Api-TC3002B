import React, {useCallback} from "react";
import {useState} from "react";
import "./SpamTool.css";
import FileUploader from "../components/uppy/uppy";
import Uploader from "../components/uploader/uploader";

function SpamTool() {
    const [formData, setFormData] = useState({
        count: "",
        extension: "",
        from: "",
        subject: "",
    });
    const [response, setResponse] = useState(null);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const [activeTab, setActiveTab] = useState("form");

    // Handler function for changing the active tab
    const handleToggle = (tab) => {
        if (tab !== activeTab) {
            setActiveTab(tab);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("/predict-single", {
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


    //-------------------------------------
    // For handling response of file upload
    //-------------------------------------
    const [responseCsv, setResponseCsv] = useState(null);
    const [error, setError] = useState(null);

    const handleUploadSuccess = (data) => {
        setResponseCsv(data);
        setError(null);
    };

    const handleUploadError = (errorMessage) => {
        setError(errorMessage);
        setResponseCsv(null);
    };

    const renderResponse = () => {
        if (!responseCsv) return null;

        // Assuming the response is an array of objects
        return (
            <div>
                <h3>Results:</h3>
                <table>
                    <thead>
                    <tr>
                        {Object.keys(responseCsv[0]).map((key) => (
                            <th key={key}>{key}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {responseCsv.map((item, index) => (
                        <tr key={index}>
                            {Object.values(item).map((value, i) => (
                                <td key={i}>{value}</td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    };


    const TableComponent = ({data}) => {
        const headers = Object.keys(data[0]);

        return (
            <table>
                <thead>
                <tr>
                    {headers.map(header => (
                        <th key={header}>{header}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        {headers.map(header => (
                            <td key={header}>{item[header]}</td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        );
    }


    return (
        <div className="style-0">
            <div className="style-1">
                <div className="style-2">
                    <div className="style-3">
                        <div className="style-4">
                            <div className="style-5">
                                <div className="style-6">
                                    <h2 className="style-7">
                                        Spam Detection <br className="style-8"/> Tool
                                    </h2>

                                    <div className="tabs">
                                        <button
                                            className={activeTab === "form" ? "active" : ""}
                                            onClick={() => handleToggle("form")}
                                        >
                                            Form
                                        </button>
                                        <button
                                            className={activeTab === "csv" ? "active" : ""}
                                            onClick={() => handleToggle("csv")}
                                        >
                                            CSV
                                        </button>
                                    </div>

                                    {activeTab === "form" ? (
                                        <form
                                            className="style-9"
                                            onSubmit={handleSubmit}
                                            noValidate
                                        >
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
                                                        style={{paddingLeft: "10px"}}
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
                                                        style={{
                                                            textDecoration: "none solid #6c2bd9",
                                                            transition: "all 0.3s ease 0s",
                                                            color: "#fff",
                                                            backgroundColor: "#6c2bd9",
                                                            boxSizing: "border-box",
                                                        }}
                                                        onClick={handleSubmit}
                                                    />
                                                    <span className="style-24"></span>
                                                </div>
                                            </div>
                                        </form>
                                    ) : (
                                        <div>
                                            <h2> Upload your file </h2>
                                            <Uploader onUploadSuccess={handleUploadSuccess}
                                                          onUploadError={handleUploadError}/>
                                            {error && (
                                                <div style={{color: 'red'}}>
                                                    <h3>Error:</h3>
                                                    <pre>{error}</pre>
                                                </div>
                                            )}
                                            {renderResponse()}
                                        </div>
                                    )}

                                    <div className="style-25"></div>
                                    <div className="style-26">
                                        Your message was sent, thank you!
                                    </div>
                                </div>
                                <div className="style-27">
                                    <h3 className="style-28">How to use</h3>
                                    <p className="style-29">
                                        You can fill in the form, or upload a csv file. Just make sure that the csv
                                        has
                                        the same fields that the form.
                                    </p>
                                    {response && activeTab === "form" ? (
                                        <div className="response-container">
                                            <h3 className="style-28"> Result:</h3>
                                            <p>Prediction: {response.prediction}</p>
                                            <p>Confidence: {response.probability}</p>
                                        </div>
                                    ) : (
                                        <br/>
                                    )}

                                    {/* Some link to get more info, not needed now */}
                                    {/*<p className="style-30"><a href="#" className="style-31">Read more</a></p>*/}
                                </div>
                            </div>
                            <div style={{margin: '10px'}}>
                                {/* <TableComponent data={SpamData}/> */}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SpamTool;


const SpamData = [
    {
        "Attachment Count": "1",
        "Attachment Extension": "png",
        "Email From": "Haldin <sales@haldin-natural.com>",
        "Email Subject": "Natural Product is Desirable to Household With Children",
        "prediction": "Spam",
        "probability": 0.6512312312
    },
    {
        "Attachment Count": "2",
        "Attachment Extension": "pdf pdf",
        "Email From": "Dave Douglas <dave.d@businessesinsight.com>",
        "Email Subject": "Re: Overview Analysis For Skin Lightening Products Market",
        "prediction": "Spam",
        "probability": 0.12312312
    },
    {
        "Attachment Count": "1",
        "Attachment Extension": "xml",
        "Email From": "NIVEA Newsletter\" <newsletter@n.nivea.co.th>",
        "Email Subject": "ลุ้นรับ Watson Voucher 500 บาท 100 รางวัล กับนีเวีย ง่ายๆ แค่ตอบแบบสอบถามกับ NIVEA Thailand",
        "prediction": "Spam",
        "probability": 0.87399312
    },
    {
        "Attachment Count": "3",
        "Attachment Extension": "pdf pdf pdf",
        "Email From": "NIVEA Newsletter\" <newsletter@n.nivea.co.th>",
        "Email Subject": "ลุ้นรับ Watson Voucher 500 บาท 100 รางวัล กับนีเวีย ง่ายๆ แค่ตอบแบบสอบถามกับ NIVEA Thailand",
        "prediction": "Spam",
        "probability": 0.9512354312
    },
    {
        "Attachment Count": "",
        "Attachment Extension": "",
        "Email From": "NIVEA Newsletter\" <newsletter@n.nivea.co.th>",
        "Email Subject": "ลุ้นรับ Watson Voucher 500 บาท 100 รางวัล กับนีเวีย ง่ายๆ แค่ตอบแบบสอบถามกับ NIVEA Thailand",
        "prediction": "Spam",
        "probability": 0.6512312312
    },
    {
        "Attachment Count": "",
        "Attachment Extension": "",
        "Email From": "correos@correos.com",
        "Email Subject": "Información sobre su envío",
        "prediction": "Spam",
        "probability": 0.6512312312
    },
    {
        "Attachment Count": "",
        "Attachment Extension": "",
        "Email From": "NIVEA Newsletter\" <newsletter@n.nivea.co.th>",
        "Email Subject": "ลุ้นรับ Watson Voucher 500 บาท 100 รางวัล กับนีเวีย ง่ายๆ แค่ตอบแบบสอบถามกับ NIVEA Thailand",
        "prediction": "Spam",
        "probability": 0.6512312312
    },
    {
        "Attachment Count": "",
        "Attachment Extension": "",
        "Email From": "LinkedIn Learning <messages-noreply@linkedin.com>",
        "Email Subject": "Welcome to LinkedIn Learning, Christoph!",
        "prediction": "Spam",
        "probability": 0.6512312312
    },
    {
        "Attachment Count": "",
        "Attachment Extension": "",
        "Email From": "NIVEA Newsletter\" <newsletter@n.nivea.co.th>",
        "Email Subject": "ลุ้นรับ Watson Voucher 500 บาท 100 รางวัล กับนีเวีย ง่ายๆ แค่ตอบแบบสอบถามกับ NIVEA Thailand",
        "prediction": "Spam",
        "probability": 0.6512312312
    },
    {
        "Attachment Count": "",
        "Attachment Extension": "",
        "Email From": "Das HubSpot-Team <hubspotgermany@hubspot.com>",
        "Email Subject": "Bestätigen Sie Ihre Anmeldung",
        "prediction": "Spam",
        "probability": 0.6512312312
    },
    {
        "Attachment Count": "",
        "Attachment Extension": "",
        "Email From": "(574) 144-856\" <phonevpzod@appsr88.com>",
        "Email Subject": "Tesa:Vm for Stefan Stefan 01:09 Seconds Friday, December 30, 2022",
        "prediction": "Spam",
        "probability": 0.6512312312
    },
    {
        "Attachment Count": "",
        "Attachment Extension": "",
        "Email From": "SSC GL 0345 POL /BSS HAM <SSCGL0345POL@Beiersdorf.com>",
        "Email Subject": "RE: Bank details confirmation",
        "prediction": "Spam",
        "probability": 0.6512312312
    },
    {
        "Attachment Count": "",
        "Attachment Extension": "",
        "Email From": "NIVEA Newsletter\" <newsletter@n.nivea.co.th>",
        "Email Subject": "ลุ้นรับ Watson Voucher 500 บาท 100 รางวัล กับนีเวีย ง่ายๆ แค่ตอบแบบสอบถามกับ NIVEA Thailand",
        "prediction": "Spam",
        "probability": 0.6512312312
    },
    {
        "Attachment Count": "",
        "Attachment Extension": "",
        "Email From": "NIVEA Newsletter\" <newsletter@n.nivea.co.th>",
        "Email Subject": "ลุ้นรับ Watson Voucher 500 บาท 100 รางวัล กับนีเวีย ง่ายๆ แค่ตอบแบบสอบถามกับ NIVEA Thailand",
        "prediction": "Spam",
        "probability": 0.6512312312
    },
    {
        "Attachment Count": "",
        "Attachment Extension": "",
        "Email From": "NIVEA Newsletter\" <newsletter@n.nivea.co.th>",
        "Email Subject": "ลุ้นรับ Watson Voucher 500 บาท 100 รางวัล กับนีเวีย ง่ายๆ แค่ตอบแบบสอบถามกับ NIVEA Thailand",
        "prediction": "Spam",
        "probability": 0.6512312312
    },
    {
        "Attachment Count": 1,
        "Attachment Extension": "pdf",
        "Email From": "QIMA Billing <support@qima.com>",
        "Email Subject": "tesa SE: First Payment Reminder for Invoice(s)",
        "prediction": "Spam",
        "probability": 0.6512312312
    },
    {
        "Attachment Count": "",
        "Attachment Extension": "",
        "Email From": "NIVEA Newsletter\" <newsletter@n.nivea.co.th>",
        "Email Subject": "ลุ้นรับ Watson Voucher 500 บาท 100 รางวัล กับนีเวีย ง่ายๆ แค่ตอบแบบสอบถามกับ NIVEA Thailand",
        "prediction": "Spam",
        "probability": 0.6512312312
    },
    {
        "Attachment Count": 2,
        "Attachment Extension": "",
        "Email From": "Dain Kim <Dain@kudoway.com>",
        "Email Subject": "Re: KUDO on MS Teams or Zoom",
        "prediction": "Spam",
        "probability": 0.6512312312
    }
]
