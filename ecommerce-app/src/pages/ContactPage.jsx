import React, { useState } from "react";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";

function ContactPage() {
  const [captchaToken, setCaptchaToken] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!captchaToken) {
      alert("Please verify you're not a robot.");
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("Message sent!");
        setCaptchaToken(null);
        e.target.reset();
      })
      .catch((error) => {
        console.error("Email error:", error);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <div className="flex justify-center px-4 pt-24 pb-16">
      <div className="w-full max-w-3xl">
        <h1 className="text-4xl font-extrabold mb-4 text-center">CONTACT ME</h1>
        <p className="text-gray-600 text-center mb-10">
          Feel free to reach out with questions, feedback, or collaboration
          ideas.
        </p>

        <form onSubmit={sendEmail} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <div className="flex justify-center">
            <ReCAPTCHA
              sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
              onChange={(value) => setCaptchaToken(value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-12 text-sm text-gray-500 leading-relaxed text-center">
          <p>
            This Contact page is part of a personal portfolio project created by{" "}
            <span className="font-semibold">Roy Marven Miranda II</span>. It was
            built using <span className="font-semibold">React</span> for dynamic
            rendering and <span className="font-semibold">Tailwind CSS</span>{" "}
            for responsive styling. The form is powered by{" "}
            <span className="font-semibold">EmailJS</span>, allowing real-time
            email delivery without a backend server.
          </p>
          <p className="mt-4">
            This project demonstrates frontend integration, clean UI/UX design,
            and practical use of third-party APIs. It’s part of my ongoing
            journey toward becoming a professional full-stack developer.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
