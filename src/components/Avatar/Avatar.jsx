import './Avatar.css';

function Avatar({ photo, name = '', isOnline = false }) {
  const status = isOnline ? '온라인' : '';

  return (
    <figure className="Avatar">
      <img src={photo} alt={name} />
      <figcaption
        className={isOnline ? 'online' : ''}
        aria-label={status}
        title={status}
      ></figcaption>
    </figure>
  );
}

// HTML -> JSX -> DATA
// Markup -> Component Design (props)

export default Avatar;
