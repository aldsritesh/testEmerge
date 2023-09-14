import React, { useState } from "react";

function MobileDesktopPreview() {
  const [isMobilePreview, setIsMobilePreview] = useState(false);

  const togglePreview = () => {
    setIsMobilePreview(!isMobilePreview);
  };

  return (
    <div>
      <button onClick={togglePreview}>
        {isMobilePreview ? "Desktop Preview" : "Mobile Preview"}
      </button>
      <div className={`content ${isMobilePreview ? "mobile" : "desktop"}`}>
        <p>This is some content.</p>
        <p>Current preview mode: {isMobilePreview ? "Mobile" : "Desktop"}</p>
        {/* Add more content here */}
      </div>
    </div>
  );
}

export default MobileDesktopPreview;
