import React from 'react';
import PropTypes from 'prop-types';

function ActionButton({ id, type, action }) {
  return (
    <button
      className={`note-item__${type.toLowerCase()}-button`}
      onClick={() => action(id)}
      aria-label={type === 'delete' ? 'Delete note' : `${type} note`}
    >
      {type === 'delete' ? 'Delete' : `${type}`}
    </button>
  );
}

ActionButton.propTypes = {
  id: PropTypes.number.isRequired, // Ensure 'id' is a string
  type: PropTypes.oneOf(['delete', 'Archive', 'Move']).isRequired, // Restrict 'type' to specific values
  action: PropTypes.func.isRequired, // Ensure 'action' is a function
};

export default ActionButton;
