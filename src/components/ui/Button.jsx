/**
 * Button Component
 * Props:
 * text, variant, size, onClick, disabled
 */

function Button({
  text,
  variant = "primary",
  size = "md",
  onClick,
  disabled = false,
}) {
  const variants = {
    primary: "bg-green-700 text-white",
    secondary: "bg-gray-600 text-white",
    outline: "border border-green-700 text-green-700",
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${variants[variant]} ${sizes[size]} rounded-lg`}
    >
      {text}
    </button>
  );
}

export default Button;