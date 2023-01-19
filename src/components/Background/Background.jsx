import './Background.scss';

export function Background({ children }) {
  return (
    <div className="background background__container">
      <img
        src="../../images/galaxy.png"
        alt="galaxy"
        className="background__image"
      />
      <div className="background__stars"></div>
      <div className="background__twinkling"></div>
      {children}
    </div>
  );
}
