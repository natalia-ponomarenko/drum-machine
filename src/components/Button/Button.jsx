import './Button.scss';

export function Button({ actionHandler, children }) {
  return (
    <button className="button" onClick={actionHandler}>
      {children}
    </button>
  );
}
