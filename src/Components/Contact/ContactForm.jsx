import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    if (recaptchaValue) {
      console.log("Form Submitted");
    } else {
      alert("Please complete the reCAPTCHA.");
    }
  };

  return (
    <div className="p-4">
    <div className="max-w-5xl mx-auto bg-white p-5  border border-black rounded-md">
      <h2 className="text-red-600 text-lg mb-2 ">REQUIRED INFORMATION *</h2>
      <div className="w-full border-t mt-2 border-gray-400 mb-4"></div>
    <form onSubmit={onSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
            <label className="block text-sm font-bold mb-2">FULL NAME *</label>
            <input
            type="text"
            placeholder="First Name"
            className="w-full border  border-black p-2 rounded-md"
            required
            />
        </div>
        <div>
            <label className="block text-sm font-bold mb-2">&nbsp;</label>
            <input
              type="text"
              placeholder="Last Name"
              className="w-full border  border-black p-2 rounded-md"
              required
            />
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">ADDRESS *</label>
          <input
            type="text"
            placeholder="Enter address here"
            className="w-full border  border-black p-2 rounded-md"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-bold mb-2">EMAIL ADDRESS *</label>
            <input
              type="email"
              placeholder="Enter email address here"
              className="w-full border border-black p-2  rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2">PHONE *</label>
            <input
              type="tel"
              placeholder="Enter phone here"
              className="w-full border border-black p-2 rounded-md"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">QUESTION / COMMENT</label>
          <textarea
  placeholder="Enter your question or comment here"
  className="w-full h-32 border border-black rounded-md p-4"
/>
        </div>
        {/* div for the recaptcha and btn */}
            <div className="flex flex-row gap-6"> 
        <div className="mb-4">
          <ReCAPTCHA
            sitekey="your-recaptcha-site-key"
            onChange={(value) => setRecaptchaValue(value)}
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-6 rounded-md font-bold"
          >
            SUBMIT
          </button>
        </div>

            </div>

      </form>
    </div>
    </div>
  );
};

export default ContactForm;
