import { useState } from "react";

const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = (text) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(
        () => {
          console.log("Text copied to clipboard");
          // Optionally, you can display a success message here
        },
        (err) => {
          console.error("Could not copy text: ", err);
        }
      );
    } else {
      console.warn("Clipboard API not supported");
    }
  };
  const handleCopy = (text) => {
    copyToClipboard(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset the copied state after 2 seconds
  };

  return (
    <button
      onClick={() => handleCopy("abdulrahmansoyooye@gmail.com")}
      className="black_btn"
    >
      {copied ? "Copied!" : "Copy my email adress"}
    </button>
  );
};

export default CopyButton;
