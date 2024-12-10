import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

function ContactForm() {
  const [capVal, setCapVal] = useState(null);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!capVal) {
      alert("Please complete the reCAPTCHA.");
      return;
    }

    // Prepare the form data
    const formData = {
      firstName,
      lastName,
      email,
      phone,
      message,
      recaptchaToken: capVal, 
    };

    try {
      const response = await fetch("https://formspree.io/f/mqakoqqn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setCapVal(null); 
      } else {
        alert("There was an error submitting the form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error processing your request.");
    }
  };

  return (
    <div className="p-4">
    <div className="max-w-5xl mx-auto bg-white p-5 border border-black rounded-md">
      <h2 className="text-red-600 text-lg mb-2">REQUIRED INFORMATION *</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-bold mb-2">FULL NAME *</label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="w-full border border-black p-2 rounded-md"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2">&nbsp;</label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="w-full border border-black p-2 rounded-md"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-bold mb-2">EMAIL ADDRESS *</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email address here"
              className="w-full border border-black p-2 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2">PHONE *</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter phone here"
              className="w-full border border-black p-2 rounded-md"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">QUESTION / COMMENT*</label>
          <textarea
            name="message"
            placeholder="Enter your question or comment here"
            className="w-full h-32 border border-black rounded-md p-4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:mb-4">
        <ReCAPTCHA
        sitekey="6LcsoZYqAAAAAAfcJg7WwD_HO9uoIvpFeJnrSOJE"
        onChange={(val) => setCapVal(val)}
        />
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={!capVal}
              className="bg-green-500 text-white px-6 py-6 rounded-md font-bold w-full"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
  );
}

export default ContactForm;