import React from "react";

function Button({
  children,
  href = "#",
  variant = "primary",
  target = "_self",
}) {
  const classes =
    variant === "outline"
      ? "btn btn-outline"
      : "btn";

  return (
    <a
      href={href}
      target={target}
      rel="noreferrer"
      className={classes}
    >
      {children}
    </a>
  );
}

export default Button;