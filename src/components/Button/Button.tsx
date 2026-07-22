type ButtonProps = {
  label: string;
  variant?: "primary" | "secondary";
};

export const Button = ({ label, variant = "primary" }: ButtonProps) => {
  const styles = {
    padding: "10px 20px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontWeight: 600,
    backgroundColor: variant === "primary" ? "#6366f1" : "#e5e7eb",
    color: variant === "primary" ? "#ffffff" : "#111827",
  };

  return <button style={styles}>{label}</button>;
};