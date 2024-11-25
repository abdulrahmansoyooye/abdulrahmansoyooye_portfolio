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
      className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      {copied ? "Copied!" : "Copy my email"}
    </button>
  );
};

export default CopyButton;
