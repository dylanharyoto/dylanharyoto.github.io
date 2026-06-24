import React from "react";

const SectionHeading = ({ index, label, title, subtitle }) => (
  <div className="text-center mb-10 sm:mb-14">
    <h4 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-theme">
      {title}
    </h4>
    <p className="text-sm sm:text-base md:text-lg text-muted mt-2">
      {subtitle}
    </p>
  </div>
);

export default SectionHeading;