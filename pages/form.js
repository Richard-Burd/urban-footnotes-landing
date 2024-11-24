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
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      orderId: "12345", // Generate dynamically or fetch from context/state
      discretionaryOptions: selectedOptions.length ? selectedOptions : "None selected",
      logoUrl: uploadedFileUrl,
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Supplementary Form</h1>

      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="mb-6">
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
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-lg font-semibold mb-2">
            Email
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
            You may select up to 5 options, or leave this section blank.
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
            Acceptable file types: JPG, PNG, PDF, SVG. Max size: 5MB.
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
