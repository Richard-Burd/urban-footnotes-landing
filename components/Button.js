// components/ui/Button.jsx
import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

const base =
  "inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold shadow transition-colors " +
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-300 " +
  "disabled:opacity-50 disabled:pointer-events-none";
const variants = {
  primary: "bg-stone-900 text-stone-100 hover:bg-stone-800",
  secondary: "bg-stone-100 text-stone-900 hover:bg-stone-200",
  ghost: "bg-transparent text-stone-100 hover:bg-stone-800/20",
};

export function Button({
  href,
  variant = "primary",
  fullWidth = false,
  className = "",
  children,
  ...props
}) {
  const cls = [base, variants[variant], fullWidth ? "w-full" : "", className].join(" ");

  if (href) {
    return (
      <Link
        href={href}
        className={
          "appearance-none no-underline visited:no-underline " +
          "text-current visited:text-current " + // no blue/purple link colors
          cls
        }
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={"appearance-none " + cls} {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  href: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "secondary", "ghost"]),
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
