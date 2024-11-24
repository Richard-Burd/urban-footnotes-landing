import React, { useState } from "react";
import * as filestack from "filestack-js";

export default function SupplementaryForm() {
  const filestackApiKey = "AhJtHA69ATCK7bfBTgnbzz"; // Use environment variable
  const client = filestack.init(filestackApiKey);

  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [clientName, setClientName] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [uploadedFileUrl, setUploadedFileUrl] = useState("");
  const [uploadedFileType, setUploadedFileType] = useState("");
  const [comments, setComments] = useState(""); // State for comments
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderId, setOrderId] = useState(""); // Track Order ID after submission
  const maxCommentLength = 2000;
  const discretionaryOptions = [
    "Car Wash",
    "Community Center",
    "Costco",
    "Farmers Market",
    "Gas Station",
    "Gifts/Novelties",
    "Hiking Trail",
    "Hospital",
    "Ice Skating Rink",
    "Landmark",
    "Liquor Store",
    "Sams Club",
    "Sports Stadium",
    "Target",
    "Tobacco/Vape",
    "Walmart"
  ];
  

  const handleCheckboxChange = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : prev.length < 5
        ? [...prev, option]
        : prev
    );
  };

  const openPicker = () => {
    if (!address || !email) {
      alert("Please complete the address and email fields before uploading.");
      return;
    }

    const options = {
      maxFiles: 1,
      uploadInBackground: false,
      fromSources: ["local_file_system"],
      accept: ["image/jpeg", "image/png", "application/pdf", "image/svg+xml"],
      maxSize: 5 * 1024 * 1024,
      onUploadDone: (result) => {
        if (result.filesUploaded.length > 0) {
          const file = result.filesUploaded[0];
          setUploadedFileUrl(file.url);
          setUploadedFileType(file.mimetype);
        }
      },
    };

    client.picker(options).open();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!address || !email || !uploadedFileUrl) {
      alert("Please complete all required fields before submitting.");
      return;
    }

    const formData = {
      address,
      clientName,
      email,
      discretionaryOptions: selectedOptions.length ? selectedOptions : "None selected",
      logoUrl: uploadedFileUrl,
      additionalComments: comments || "None",
    };

    try {
      setIsSubmitting(true);
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Store Order ID and alert the user
        setOrderId(data.orderId);
        alert(`Form submitted successfully! Your Order ID is ${data.orderId}`);
      } else {
        alert("Failed to submit the form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-stone-300 w-4/5 m-6 text-neutral-900 rounded-lg shadow-sm resize-none">
      <h1 className="text-2xl font-bold m-6 text-center w-4/5">
        Please fill out the supplemental information below to customize and complete your order:
      </h1>

      <form onSubmit={handleSubmit} className="m-6">
        <div className="mb-6">
          <label htmlFor="address" className="block text-lg font-semibold mb-2">
            Confirm Property Address for this Report:
          </label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your address"
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-lg font-semibold mb-2">
            Email Address:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="clientName" className="block text-lg font-semibold mb-2">
            Your Name:
          </label>
          <input
            type="text"
            id="clientName"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            placeholder="What should we call you?"
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
            required
          />
        </div>
        

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Select Discretionary Options (Optional)</h2>
          <p className="text-sm text-gray-600 mb-4">
          Please enter up to five(5) DISCRETIONARY service types. These
appear in the lower left-hand corner of page 1 and are any
service types that you may think would be important to you or
your residents. If you do not enter any here, we will choose 5
from the list on page 4. If you choose less than 5, the remaining
slots will get back filled with ones on our default list.
          </p>
          <div className="grid grid-cols-2 gap-2">
            {discretionaryOptions.map((option) => (
              <label key={option} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={option}
                  checked={selectedOptions.includes(option)}
                  onChange={() => handleCheckboxChange(option)}
                  className="form-checkbox h-5 w-5 text-blue-500"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Upload Your Logo</h2>
          <p className="text-sm text-gray-600 mb-4">
          Your logo will be prominently displayed on
          pages 1 - 3 of the report. Acceptable file types: JPG, PNG, PDF, SVG.
          </p>
          <button
            type="button"
            onClick={openPicker}
            className={`${
              !address || !email
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            } text-white px-4 py-2 rounded-lg shadow-md`}
            disabled={!address || !email}
          >
            {uploadedFileUrl ? "Re-upload Logo" : "Upload Logo"}
          </button>
          {uploadedFileUrl && (
            <div className="mt-4">
              {uploadedFileType.startsWith("image/") ? (
                <img
                  src={uploadedFileUrl}
                  alt="Uploaded Preview"
                  className="w-32 h-32 object-contain border border-gray-300 rounded-lg"
                />
              ) : (
                <p className="text-sm text-gray-600">
                  Uploaded File:{" "}
                  <a
                    href={uploadedFileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    View File
                  </a>
                </p>
              )}
            </div>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="comments" className="block text-lg font-semibold mb-2">
            Additional Comments, Questions, or Requests:
          </label>
          <textarea
            id="comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            maxLength={maxCommentLength} // Enforce character limit
            placeholder="Enter any additional comments or questions here..."
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm h-32 resize-none"
          />
          <p className="text-sm text-gray-600 mt-2">
            {comments.length}/{maxCommentLength} characters used
          </p>
        </div>

        <button
          type="submit"
          className={`bg-green-500 text-white px-6 py-2 rounded-lg shadow-md ${
            isSubmitting ? "cursor-not-allowed opacity-50" : "hover:bg-green-600"
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>

      {/* Display Order ID */}
      {orderId && (
        <div className="mt-6 text-center">
          <h2 className="text-lg font-bold">Your Order ID:</h2>
          <p className="text-green-600 text-lg">{orderId}</p>
          <p className="text-gray-600 text-sm">Please save this ID for your records.</p>
        </div>
      )}
    </div>
  );
}
