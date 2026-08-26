import React from "react";

function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-12 text-center md:mb-[60px]">
      <h2 className="mb-4 font-heading text-4xl font-bold leading-tight text-slate-900 sm:text-[2.7rem]">
        {title}
      </h2>

      <p className="mx-auto max-w-[700px] leading-7 text-slate-500">
        {subtitle}
      </p>
    </div>
  );
}

export default SectionTitle;
