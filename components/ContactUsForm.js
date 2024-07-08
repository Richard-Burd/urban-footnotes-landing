import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    about: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/submitContactUsForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Submission successful
        setFormData({ name: "", email: "", address: "", about: "" });
        setSubmissionStatus("success");
      } else {
        // Submission failed
        setSubmissionStatus("error");
      }
    } catch (error) {
      // Handle error
      setSubmissionStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="name-section mx-4 pb-10 lg:ml-40">
        <div className="pb-2 text-2xl text-slate-200">
          <label>Name:</label>
        </div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="h-10 w-full border border-gray-300 bg-purple-200 p-2 text-lg text-slate-950 lg:w-[690px]"
        />
      </div>
      <div className="email-section mx-4 pb-10 lg:ml-40">
        <div className="pb-2 text-2xl text-slate-200">
          <label>Email or Phone (Contact):</label>
        </div>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="h-10 w-full border border-gray-300 bg-purple-200 p-2 text-lg text-slate-950 lg:w-[690px]"
        />
      </div>
      <div className="address-section mx-4 pb-10 lg:ml-40">
        <div className="pb-2 text-2xl text-slate-200">
          <label>Property Address to be evaluated:</label>
        </div>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="h-10 w-full border border-gray-300 bg-purple-200 p-2 text-lg text-slate-950 lg:w-[690px]"
        />
      </div>
      <div className="comments-section mx-4 pb-10 lg:ml-40">
        <div className="pb-2 text-2xl text-slate-200">
          <label>Any questions or comments? (Optional)</label>
        </div>
        <textarea
          name="about"
          value={formData.about}
          onChange={handleChange}
          className="h-32 w-full border border-gray-300 bg-purple-200 p-2 text-lg text-slate-950 lg:w-[690px]"
        />
      </div>
      {submissionStatus !== "success" && (
        <button
          type="submit"
          className="mx-4 mt-10 rounded-xl bg-purple-300 px-4 py-2 text-2xl text-violet-950 lg:ml-40"
        >
          Submit Inquiry
        </button>
      )}
      <div className="comments-section mx-4 pb-10 pt-10 text-2xl text-slate-200 lg:ml-40">
        {submissionStatus === "success" && (
          <p className="text-green-300">
            Thank you for your submission, someone will contact you shortly!
          </p>
        )}
        {submissionStatus === "error" && (
          <p className="text-red-300">
            Form submission failed. Please try again.
          </p>
        )}
      </div>
    </form>
  );
}
