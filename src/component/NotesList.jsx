import React from 'react';
import PropTypes from 'prop-types';
import NoteCard from './NoteCard.jsx';

function NotesList({ notes, isArchive, onDelete, onArchive, onMove }) {
  // Check if there are no notes
  if (notes.length === 0) {
    return (
      <div className="notes-list">
        <div className="notes-list__empty-message">
          <img src="https://via.placeholder.com/150" alt="No Notes Available" />
          <p>No notes available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="notes-list">
      {notes
        .filter((note) => (isArchive ? note.archived : !note.archived))
        .map((note) => (
          <NoteCard
            key={note.id}
            onDelete={onDelete}
            secondaryAction={isArchive ? 'Move' : 'Archive'}
            onSecondaryAction={isArchive ? onMove : onArchive}
            {...note}
          />
        ))}
    </div>
  );
}

// PropTypes Validation
NotesList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      archived: PropTypes.bool.isRequired,
    })
  ).isRequired,
  isArchive: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  onMove: PropTypes.func.isRequired,
};

export default NotesList;
