import classNames from "classnames";

type CardProps = {
  children: React.ReactNode;
  figureUrl?: string;
  className?: string;
};

const Card: React.FC<CardProps> = ({ children, figureUrl, className }) => {
  return (
    <div
      className={classNames(
        "card lg:card-side bg-base-100 shadow-xl",
        className,
      )}
    >
      {figureUrl && (
        <figure className="h-full hidden lg:display">
          <img src={figureUrl} alt="Album" className="h-full"/>
        </figure>
      )}
      <div className="card-body gap-6">{children}</div>
    </div>
  );
};

export default Card;
