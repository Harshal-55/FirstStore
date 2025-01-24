import React, { useEffect, useRef } from "react";

export const VendorOnboarding = () => {
  const iframeRef = useRef(null);

  const handleMessage = (event) => {
    const { type, link } = event.data;

    console.log("Message received from iframe:", type);

    // Handle navigation if type matches
    if (type === "action/navigate" && link) {
      console.log("Navigating to link:", link);
      window.location.href = link;
    }
  };

  useEffect(() => {
    // Add event listener
    window.addEventListener("message", handleMessage);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  useEffect(() => {
    console.log("Iframe ref:", iframeRef.current);
  }, []);

  return (
    <iframe
    title="form"
      ref={iframeRef}
      src="https://dynamic-forms-git-master-xlongclaws-projects.vercel.app/forms/67921693fde725d5d9a24ad0"
      className="w-screen h-screen"
    ></iframe>
  );
};

export default VendorOnboarding;