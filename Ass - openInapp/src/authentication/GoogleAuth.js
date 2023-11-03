import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";



const GoogleAuth = ({ redirectUrl }) => {
  const navigate = useNavigate();

  const handleGoogle = async (response) => {
    try {
      if (response?.credential) {
        localStorage.setItem("token-task", JSON.stringify(response.credential));
        console.log(response?.credential);
        navigate(redirectUrl);
        // window.location.reload();
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (window?.google?.accounts?.id) {
      window.google.accounts.id.initialize({
        // client_id: process.env.REACT_APP_PUBLIC_GOOGLE_CLIENT_ID,
        client_id:
          "120795696673-7jpr4mim17f10lh4i2j060q66u9ap5oh.apps.googleusercontent.com",
        callback: handleGoogle,
      });

      const parent = document.getElementById("googlePop-up");
      window.google.accounts.id.renderButton(parent, {
        size: "large",
      });
    }
  });

  return (
    <div>
      <div className="login__google-button">
        <div className="login__google-logo">
          {/* <img src="./assets/google.svg" /> */}
        </div>
        <div className="login__google-button-text">Continue with Google</div>
        <div id="googlePop-up"></div>
      </div>
    </div>
  );
};

export default GoogleAuth;
