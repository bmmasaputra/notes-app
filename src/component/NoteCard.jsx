import React from 'react';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../utils/data.js';
import ActionButton from './ActionButton.jsx';

function NoteCard({ id, title, createdAt, body, onDelete, secondaryAction, onSecondaryAction }) {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{title}</h3>
        <h5 className="note-item__date">{showFormattedDate(createdAt)}</h5>
        <p className="note-item__body">{body}</p>
      </div>
      <div className="note-item__action">
        <ActionButton id={id} type="delete" action={onDelete}></ActionButton>
        <ActionButton id={id} type={secondaryAction} action={onSecondaryAction}></ActionButton>
      </div>
    </div>
  );
}

// Prop Validation
NoteCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  secondaryAction: PropTypes.oneOf(['Archive', 'Move']).isRequired,
  onSecondaryAction: PropTypes.func.isRequired,
};

export default NoteCard;
