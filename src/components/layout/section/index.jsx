import React from "react";

export const Section = ({ children, height }) => {
  return (
    <section style={{ minHeight: height + "vh" ? height + "vh" : "auto" }}>
      <div className="container mx-auto">
      {children}
      </div>
    </section>
  );
};
