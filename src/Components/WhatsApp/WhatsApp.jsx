// WhatsAppIcon.js
import React from "react";
// import { useHistory } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const WhatsAppIcon = () => {
  const redirectToWhatsApp = () => {
    // Replace the phone number and message parameters with your desired values
    const phoneNumber = "9119967505";
    const message = "Hello, this is a message from my website!";

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;

    // Redirect to WhatsApp
    window.location.href = whatsappUrl;
  };

  return (
    <div>
      {/* Your WhatsApp icon here */}
      <button
        onClick={redirectToWhatsApp}
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "none",
          outline: "none",
          background: "transparent",
        }}
      >
        <img
          src="/whatsapp.png"
          alt="WhatsApp"
          style={{
            width: "100%",
            height: "100%",
            cursor: "pointer",
          }}
        />
      </button>
    </div>
  );
};

export default WhatsAppIcon;
