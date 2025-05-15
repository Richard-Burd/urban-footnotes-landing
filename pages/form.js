import React, { useState } from "react";

export default function SupplementaryForm() {
  // Form states
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientCompany, setClientCompany] = useState("");
  const [clientPhone, setClientPhone] = useState("");

  // Discretionary options
  const discretionaryOptions = [
    "Car Wash","Community Center","Costco","Farmers Market","Gas Station",
    "Gifts/Novelties","Hiking Trail","Hospital","Ice Skating Rink","Landmark",
    "Liquor Store","Sams Club","Sports Stadium","Target","Tobacco/Vape","Walmart",
  ];
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [customOptions, setCustomOptions] = useState(["", "", "", "", ""]);

  // File upload states
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [fileLink, setFileLink] = useState("");

  // Submission state
  const [comments, setComments] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderId, setOrderId] = useState("");
  const maxCommentLength = 2000;

  // Helpers: count total selections
  const totalSelections =
    customOptions.filter((opt) => opt.trim() !== "").length +
    selectedOptions.length;

  const handleCustomOptionChange = (index, value) => {
    if (totalSelections < 5 || customOptions[index].trim() !== "") {
      const opts = [...customOptions];
      opts[index] = value;
      setCustomOptions(opts);
    }
  };

  const handleCheckboxChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions((prev) => prev.filter((o) => o !== option));
    } else if (totalSelections < 5) {
      setSelectedOptions((prev) => [...prev, option]);
    }
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!address || !email) {
      alert("Please complete address and email before submitting.");
      return;
    }

    let logoUrl = "";
    try {
      if (file) {
        setUploading(true);
        const form = new FormData();
        form.append("file", file);
        const res = await fetch("/api/upload", { method: "POST", body: form });
        const json = await res.json();
        setUploading(false);
        if (!res.ok) {
          alert(`Upload failed: ${json.error}`);
          return;
        }
        logoUrl = json.fileLink;
      }
    } catch (err) {
      console.error(err);
      alert("Error uploading file.");
      setUploading(false);
      return;
    }

    // Build payload
    const combinedOptions = [
      ...customOptions.filter((opt) => opt.trim() !== ""),
      ...selectedOptions,
    ];

    const payload = {
      address,
      clientName,
      clientCompany,
      clientPhone,
      email,
      discretionaryOptions: combinedOptions.length ? combinedOptions : [],
      logoUrl: logoUrl || "https://cdn.filestackcontent.com/kaNkonzETJqkatZaMjiH",
      additionalComments: comments || "None",
    };

    // Final submission
    try {
      setIsSubmitting(true);
      const resp = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await resp.json();
      setIsSubmitting(false);

      if (resp.ok) {
        setOrderId(data.orderId);
        alert(`Form submitted! Order ID: ${data.orderId}`);
      } else {
        alert(`Submission failed: ${data.error || 'Unknown error'}`);
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting form.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="m-6 flex min-h-screen w-4/5 flex-col items-center justify-center rounded-lg bg-stone-300 text-neutral-900 shadow-sm">
      <h1 className="m-6 w-4/5 text-center text-2xl font-bold">
        Please fill out the supplemental information below to customize and complete your order:
      </h1>
      <form onSubmit={handleSubmit} className="m-6 w-full max-w-xl">
        {/* Address & Email */}
        <div className="mb-6">
          <label className="block mb-2 text-lg font-semibold">Confirm Property Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-3 border rounded-lg shadow-sm"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-lg font-semibold">Email Address:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-lg shadow-sm"
            required
          />
        </div>

        {/* Client Info */}
        <div className="mb-6 grid grid-cols-1 gap-6">
          <div>
            <label className="block mb-2 text-lg font-semibold">Your Name:</label>
            <input
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              placeholder="What should we call you?"
              className="w-full p-3 border rounded-lg shadow-sm"
            />
          </div>
          <div>
            <label className="block mb-2 text-lg font-semibold">Company Name:</label>
            <input
              type="text"
              value={clientCompany}
              onChange={(e) => setClientCompany(e.target.value)}
              placeholder="optional"
              className="w-full p-3 border rounded-lg shadow-sm"
            />
          </div>
          <div>
            <label className="block mb-2 text-lg font-semibold">Phone Number:</label>
            <input
              type="text"
              value={clientPhone}
              onChange={(e) => setClientPhone(e.target.value)}
              placeholder="optional"
              className="w-full p-3 border rounded-lg shadow-sm"
            />
          </div>
        </div>

        {/* Discretionary Options */}
        <div className="mb-6">
          <h2 className="mb-2 text-lg font-semibold">Discretionary Options (up to 5)</h2>
          <p className="mb-4 text-sm text-gray-600">
            Select from the list or enter custom options below.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {customOptions.map((opt, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <input type="checkbox" checked={!!opt.trim()} readOnly className="h-5 w-5"/>
                <input
                  type="text"
                  value={opt}
                  onChange={(e) => handleCustomOptionChange(idx, e.target.value)}
                  placeholder={`Custom ${idx+1}`}
                  className="flex-1 p-2 border rounded-lg shadow-sm"
                />
              </div>
            ))}
            {discretionaryOptions.map((opt) => (
              <label key={opt} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedOptions.includes(opt)}
                  disabled={!selectedOptions.includes(opt) && totalSelections >= 5}
                  onChange={() => handleCheckboxChange(opt)}
                  className="h-5 w-5"
                />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        </div>

        {/* File Upload */}
        <div className="mb-6">
          <label className="block mb-2 text-lg font-semibold">Upload Your File (max 100MB)</label>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="mb-2"
          />
          {uploading && <p className="text-sm text-gray-600">Uploading...</p>}
          {fileLink && (
            <p className="text-sm">
              File uploaded: <a href={fileLink} target="_blank" rel="noopener noreferrer" className="underline">View link</a>
            </p>
          )}
        </div>

        {/* Comments */}
        <div className="mb-6">
          <label className="block mb-2 text-lg font-semibold">Additional Comments</label>
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            maxLength={maxCommentLength}
            className="w-full p-3 border rounded-lg shadow-sm resize-none h-32"
            placeholder="Any questions or requests?"
          />
          <p className="mt-1 text-sm text-gray-600">{comments.length}/{maxCommentLength}</p>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting || uploading}
          className={`px-6 py-2 rounded-lg text-white shadow-md ${isSubmitting||uploading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'}`}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>

      {/* Order ID */}
      {orderId && (
        <div className="mt-6 text-center">
          <h2 className="text-lg font-bold">Your Order ID:</h2>
          <p className="text-lg text-green-600">{orderId}</p>
          <p className="text-sm text-gray-600">Please save this for your records.</p>
        </div>
      )}
    </div>
  );
}
