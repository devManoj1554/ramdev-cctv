import React from "react";

function Loader() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-900 px-6 text-white">
      <div className="mb-6 flex gap-2.5" aria-label="Loading">
        <span className="h-[18px] w-[18px] animate-[loaderBounce_1.4s_infinite] rounded-full bg-sky-400" />
        <span className="h-[18px] w-[18px] animate-[loaderBounce_1.4s_0.2s_infinite] rounded-full bg-sky-400" />
        <span className="h-[18px] w-[18px] animate-[loaderBounce_1.4s_0.4s_infinite] rounded-full bg-sky-400" />
      </div>

      <h3 className="font-heading text-2xl font-bold">
        RAMDEV CCTV
      </h3>

      <p className="mt-2 text-slate-300">
        Loading secure services...
      </p>
    </div>
  );
}

export default Loader;
