import React, { useState } from "react";
import * as filestack from "filestack-js";

export default function SupplementaryForm() {
  const filestackApiKey = process.env.NEXT_PUBLIC_FILESTACK_KEY; // Use environment variable
  const client = filestack.init(filestackApiKey);

  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [uploadedFileUrl, setUploadedFileUrl] = useState("");
  const [uploadedFileType, setUploadedFileType] = useState("");
  const [comments, setComments] = useState(""); // State for comments
  const [isSubmitting, setIsSubmitting] = useState(false);
  const maxCommentLength = 1000; // Max length for comments

  const discretionaryOptions = [
    "Trash Pickup",
    "Recycling Services",
    "Lawn Maintenance",
    "Snow Removal",
    "Pest Control",
    "Street Cleaning",
    "Parking Management",
    "Community Events",
    "Security Patrols",
    "Pet Waste Removal",
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
      email,
      orderId: "12345", // Example order ID
      discretionaryOptions: selectedOptions.length ? selectedOptions : "None selected",
      logoUrl: uploadedFileUrl,
      additionalComments: comments || "None", // Include comments or default to "None"
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

      if (response.ok) {
        alert("Form submitted and email sent successfully!");
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-stone-300 w-4/5 m-6 text-neutral-900">
      <h1 className="text-2xl font-bold m-6 text-center w-4/5">
        Your order has been placed! Please fill out the supplemental information below to customize your order.
      </h1>

      <form onSubmit={handleSubmit} className="m-6">
        <div className="mb-6">
          <label htmlFor="address" className="block text-lg font-semibold mb-2">
            Confirm property address for the report:
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
            Email address:
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
          <h2 className="text-lg font-semibold mb-2">Select Discretionary Options (Optional)</h2>
          <p className="text-sm text-gray-600 mb-4">
            Please select up to five discretionary service types. If fewer than 5 are selected, the remaining slots will be filled with default options.
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
            Upload your logo to appear on pages 1 - 3 of the report. Acceptable file types: JPG, PNG, PDF, SVG.
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
            Additional Comments or Questions (Optional):
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
    </div>
  );
}
