import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex justify-center pt-24 pb-4">
      { children }
    </div>
  );
};

export default AuthLayout;
