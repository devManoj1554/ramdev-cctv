import React from "react";

function Button({
  children,
  href = "#",
  variant = "primary",
  target = "_self",
}) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2";

  const variantClasses =
    variant === "outline"
      ? "border-2 border-blue-600 bg-transparent text-blue-600 hover:-translate-y-1 hover:bg-blue-600 hover:text-white"
      : "bg-blue-600 text-white hover:-translate-y-1 hover:bg-blue-700";

  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`${baseClasses} ${variantClasses}`}
    >
      {children}
    </a>
  );
}

export default Button;
