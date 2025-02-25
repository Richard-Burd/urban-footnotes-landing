import React, { useState } from "react";
import * as filestack from "filestack-js";

export default function SupplementaryForm() {

  
  const filestackApiKey = "AhJtHA69ATCK7bfBTgnbzz"; // Use environment variable
 /*  if (!process.env.NEXT_PUBLIC_FILESTACK) {
    throw new Error("filestack api key is not defined!");
  } */
  const client = filestack.init(filestackApiKey); 

  // State for form inputs
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientCompany, setClientCompany] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]); // For checkboxes
  const [customOptions, setCustomOptions] = useState(["", "", "", "", ""]); // For text inputs
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
    "Walmart",
  ];

  console.log("Filestack API Key:", filestackApiKey);


  // Track the total number of selected options
  const totalSelections =
    customOptions.filter((opt) => opt.trim() !== "").length +
    selectedOptions.length;

  const handleCustomOptionChange = (index, value) => {
    if (totalSelections < 5 || customOptions[index].trim() !== "") {
      const updatedCustomOptions = [...customOptions];
      updatedCustomOptions[index] = value;
      setCustomOptions(updatedCustomOptions);
    }
  };

  const handleCheckboxChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions((prev) => prev.filter((item) => item !== option));
    } else if (totalSelections < 5) {
      setSelectedOptions((prev) => [...prev, option]);
    }
  };
  const openPicker = () => {
    if (!address || !email) {
      alert("Please complete the address and email fields before uploading.");
      return;
    }
  
    console.log("Opening Filestack Picker...");
  
    const options = {
      maxFiles: 1,
      uploadInBackground: false,
      fromSources: ["local_file_system"],
      accept: ["image/jpeg", "image/png", "application/pdf", "image/svg+xml"],
      maxSize: 5 * 1024 * 1024, // 5MB limit (adjustable)
      onFileSelected: (file) => {
        console.log("File Selected:", file);
  
        if (file.size > 5 * 1024 * 1024) { // 5MB limit
          alert("File size exceeds 5MB. Please submit the form without uploading, and email us at contact@urbanfootnotes.com, and we will help you upload your logo.");
          return; // Stop further processing
        }
      },
      onUploadDone: (result) => {
        console.log("Filestack Upload Response:", result);
  
        if (result.filesUploaded.length > 0) {
          const file = result.filesUploaded[0];
  
          setUploadedFileUrl(file.url);
          setUploadedFileType(file.mimetype);
  
          console.log("Uploaded File URL:", file.url);
        } else {
          console.error("No files were uploaded.");
        }
      },
      onFileUploadFailed: (error) => {
        console.error("File Upload Failed:", error);
      },
      onClose: () => {
        console.log("Filestack Picker Closed without Uploading.");
      },
    };
  
    client.picker(options).open();
  };
  
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!address || !email ) {
      alert("Please complete all required fields before submitting.");
      return;
    }

    // Combine custom fields and selected checkboxes
    const combinedOptions = [
      ...customOptions.filter((opt) => opt.trim() !== ""),
      ...selectedOptions,
    ];

    const formData = {
      address,
      clientName,
      clientCompany,
      clientPhone,
      email,
      discretionaryOptions: combinedOptions.length ? combinedOptions : [],
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
    <div className="m-6 flex min-h-screen w-4/5 flex-col items-center justify-center rounded-lg bg-stone-300 text-neutral-900 shadow-sm">
      <h1 className="m-6 w-4/5 text-center text-2xl font-bold">
        Please fill out the supplemental information below to customize and
        complete your order:
      </h1>

      <form onSubmit={handleSubmit} className="m-6">
        {/* Address Input */}
        <div className="mb-6">
          <label htmlFor="address" className="mb-2 block text-lg font-semibold">
            Confirm Property Address for this Report:
          </label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your address"
            className="w-full rounded-lg border border-gray-300 p-3 shadow-sm"
            required
          />
        </div>

        {/* Email Input */}
        <div className="mb-6">
          <label htmlFor="email" className="mb-2 block text-lg font-semibold">
            Email Address:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full rounded-lg border border-gray-300 p-3 shadow-sm"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="clientName"
            className="mb-2 block text-lg font-semibold"
          >
            Your Name:
          </label>
          <input
            type="text"
            id="clientName"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            placeholder="What should we call you?"
            className="w-full rounded-lg border border-gray-300 p-3 shadow-sm"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="clientCompany"
            className="mb-2 block text-lg font-semibold"
          >
            Company Name:
          </label>
          <input
            type="text"
            id="clientCompany"
            value={clientCompany}
            onChange={(e) => setClientCompany(e.target.value)}
            placeholder="optional"
            className="w-full rounded-lg border border-gray-300 p-3 shadow-sm"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="clientPhone"
            className="mb-2 block text-lg font-semibold"
          >
            Phone Number:
          </label>
          <input
            type="text"
            id="clientPhone"
            value={clientPhone}
            onChange={(e) => setClientPhone(e.target.value)}
            placeholder="optional"
            className="w-full rounded-lg border border-gray-300 p-3 shadow-sm"
          />
        </div>

        {/* Discretionary Options (Custom + Predefined) */}
        <div className="mb-6">
          <h2 className="mb-2 text-lg font-semibold">
            Select or Enter Discretionary Options
          </h2>
          <p className="mb-4 text-sm text-gray-600">
            Please enter up to five(5) DISCRETIONARY service types. These appear
            in the lower left-hand corner of page 1 and are any service types
            that you may think would be important to you or your residents. If
            you do not enter any here, we will choose 5 from the list on page 4.
            If you choose less than 5, the remaining slots will get back filled
            with ones on our default list.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {/* Custom Fields as Text Inputs */}
            {customOptions.map((customOption, index) => (
              <div
                key={`custom-${index}`}
                className="flex items-center space-x-2"
              >
                <div className="group relative">
                  <input
                    type="checkbox"
                    checked={!!customOption.trim()} // Checkbox is checked if the input has a value
                    readOnly // Make the checkbox read-only for custom inputs
                    className="form-checkbox h-5 w-5 text-blue-500"
                  />
                  {/* Tooltip */}
                  {!customOption.trim() && (
                    <div className="absolute right-full ml-2 w-48 rounded bg-neutral-700 px-2 py-1 text-sm text-white opacity-0 shadow-lg group-hover:opacity-70">
                      Begin typing in the field to the right to select this
                      checkbox
                    </div>
                  )}
                </div>
                <input
                  type="text"
                  value={customOption}
                  onChange={(e) =>
                    handleCustomOptionChange(index, e.target.value)
                  }
                  placeholder={`Custom Option ${index + 1}`}
                  className="w-full rounded-lg border border-gray-300 p-2 shadow-sm"
                  maxLength={50}
                />
              </div>
            ))}

            {/* Predefined Options as Checkboxes */}
            {discretionaryOptions.map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={option}
                  checked={selectedOptions.includes(option)}
                  onChange={() => handleCheckboxChange(option)}
                  className="form-checkbox h-5 w-5 text-blue-500"
                  disabled={
                    !selectedOptions.includes(option) && totalSelections >= 5
                  } // Only disable if the limit is reached
                />
                <label>{option}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h2 className="mb-2 text-lg font-semibold">Upload Your Logo</h2>
          <p className="mb-4 text-sm text-gray-600">
            Your logo will be prominently displayed on pages 1 - 3 of the
            report. Acceptable file types: JPG, PNG, PDF, SVG. File must be less than 5 megabytes, for larger files, please email us at contact@urbanfootnotes.com
          </p>
          <button
            type="button"
            onClick={openPicker}
            className={`${
              !address || !email
                ? "cursor-not-allowed bg-gray-400"
                : "bg-blue-500 hover:bg-blue-600"
            } rounded-lg px-4 py-2 text-white shadow-md`}
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
                  className="h-32 w-32 rounded-lg border border-gray-300 object-contain"
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
          <label
            htmlFor="comments"
            className="mb-2 block text-lg font-semibold"
          >
            Additional Comments, Questions, or Requests:
          </label>
          <textarea
            id="comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            maxLength={maxCommentLength} // Enforce character limit
            placeholder="Enter any additional comments or questions here..."
            className="h-32 w-full resize-none rounded-lg border border-gray-300 p-3 shadow-sm"
          />
          <p className="mt-2 text-sm text-gray-600">
            {comments.length}/{maxCommentLength} characters used
          </p>
        </div>

        <button
          type="submit"
          className={`rounded-lg bg-green-500 px-6 py-2 text-white shadow-md ${
            isSubmitting
              ? "cursor-not-allowed opacity-50"
              : "hover:bg-green-600"
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
          <p className="text-lg text-green-600">{orderId}</p>
          <p className="text-sm text-gray-600">
            Please save this ID for your records.
          </p>
        </div>
      )}
    </div>
  );
}
