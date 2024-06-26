import React, { useEffect } from "react";

const MyComponent = () => {
  useEffect(() => {
    throw new Error("This is a test error fro sentry");
  }, []);
  return <div>Sample component for checking Error in sentry</div>;
};

export default MyComponent;
