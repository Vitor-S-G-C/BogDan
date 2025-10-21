import React from "react";

const DesingGodOne: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "lightgreen",
      }}
    >
      {children}
    </div>
  );
};

export default DesingGodOne;
