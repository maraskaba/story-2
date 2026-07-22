import illustrationPrimary from "./assets/illustration-primary.svg";
import illustrationColor from "./assets/illustration-color.svg";
import chevronWhite from "./assets/chevron-white.svg";
import chevronDark from "./assets/chevron-dark.svg";
import "./CardFeatures.css";

export type CardFeaturesType = "primary" | "info" | "success" | "warning" | "error";

export type CardFeaturesProps = {
  title?: string;
  description?: string;
  type?: CardFeaturesType;
  className?: string;
  onClick?: () => void;
};

export const CardFeatures = ({
  title = "Título",
  description = "Descripción del feature",
  type = "primary",
  className,
  onClick,
}: CardFeaturesProps) => {
  const isPrimary = type === "primary";
  const illustration = isPrimary ? illustrationPrimary : illustrationColor;
  const chevron = isPrimary ? chevronWhite : chevronDark;

  return (
    <button
      type="button"
      className={`card-features card-features--${type}${className ? ` ${className}` : ""}`}
      onClick={onClick}
    >
      <div className="card-features__illustration">
        <img src={illustration} alt="" />
      </div>
      <div className="card-features__body">
        <p className="card-features__title">{title}</p>
        <p className="card-features__description">{description}</p>
      </div>
      <div className="card-features__chevron">
        <img src={chevron} alt="" />
      </div>
    </button>
  );
};
