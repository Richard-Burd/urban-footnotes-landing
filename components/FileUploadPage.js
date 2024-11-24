import React, { useState } from "react";
import * as filestack from "filestack-js";

export default function FileUploadPage() {
  const filestackApiKey = "AhJtHA69ATCK7bfBTgnbzz"; // Replace with your Filestack API key
  const client = filestack.init(filestackApiKey);

  // Form State
  const [address, setAddress] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [uploadedFileUrl, setUploadedFileUrl] = useState("");
  const [uploadedFileType, setUploadedFileType] = useState("");

  // Discretionary Options
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

  // Handle Checkbox Selection
  const handleCheckboxChange = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option) // Remove if already selected
        : prev.length < 5
        ? [...prev, option] // Add new if less than 5 selected
        : prev
    );
  };

  // Handle File Upload
  const openPicker = () => {
    if (!address || selectedOptions.length === 0) {
      alert("Please complete the address and select discretionary options before uploading.");
      return;
    }

    const options = {
      maxFiles: 1,
      uploadInBackground: false,
      fromSources: ["local_file_system"],
      accept: ["image/jpeg", "image/png", "application/pdf", "image/svg+xml"],
      maxSize: 5 * 1024 * 1024, // 5MB
      storeTo: {
        path: `${address.replace(/\s+/g, "_")}/`, // Save file under the address as the folder name
        filename: `${address.replace(/\s+/g, "_")}_logo`,
      },
      uploadConfig: {
        tags: {
          address,
          options: selectedOptions.join(", "),
        },
      },
      onUploadDone: (result) => {
        if (result.filesUploaded.length > 0) {
          const file = result.filesUploaded[0];
          console.log("Uploaded file:", file);

          // Set uploaded file details
          setUploadedFileUrl(file.url);
          setUploadedFileType(file.mimetype);
        }
      },
    };

    client.picker(options).open();
  };

  // Handle Form Submission
  const handleSubmit = () => {
    if (!address || selectedOptions.length === 0 || !uploadedFileUrl) {
      alert("Please complete all fields and upload your logo before submitting.");
      return;
    }

    const formData = {
      address,
      discretionaryOptions: selectedOptions,
      logoUrl: uploadedFileUrl,
    };

    console.log("Form Data Submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Complete Your Details</h1>

      {/* Address Input */}
      <div className="w-full max-w-md mb-6">
        <label htmlFor="address" className="block text-lg font-semibold mb-2">
          Address
        </label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter your address"
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
        />
      </div>

      {/* Discretionary Options */}
      <div className="w-full max-w-md mb-6">
        <h2 className="text-lg font-semibold mb-2">Select Discretionary Options</h2>
        <p className="text-sm text-gray-600 mb-4">
          Please select up to 5 options from the list below.
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

      {/* File Upload */}
      <div className="w-full max-w-md mb-6">
        <h2 className="text-lg font-semibold mb-2">Upload Your Logo</h2>
        <p className="text-sm text-gray-600 mb-4">
          Acceptable file types: JPG, PNG, PDF, SVG. Max size: 5MB.
        </p>
        <button
          onClick={openPicker}
          className={`${
            !address || selectedOptions.length === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          } text-white px-4 py-2 rounded-lg shadow-md`}
          disabled={!address || selectedOptions.length === 0}
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

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-600"
      >
        Submit
      </button>
    </div>
  );
}