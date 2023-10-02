import React from "react";

export default function Contact({ inputStyle, hrLineColor }) {
  return (
    <form className="flex flex-col gap-10 ">
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Enter your name"
        className={inputStyle}
      />
      <hr className={hrLineColor} />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Your Email address"
        className={inputStyle}
      />
      <hr className={hrLineColor} />

      <textarea
        name="message"
        id="message"
        placeholder="Write me a message"
        className={inputStyle}
      ></textarea>
      <hr className={hrLineColor} />
      <button type="submit">Send</button>
    </form>
  );
}
