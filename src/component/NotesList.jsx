import React from 'react';
import PropTypes from 'prop-types';
import NoteCard from './NoteCard.jsx';

function NotesList({ notes, isArchive, search, onDelete, onArchive, onMove }) {
  const filteredNotes = notes.filter((note) => {
    const matchesArchive = isArchive ? note.archived : !note.archived;
    const matchesSearch = !search.trim() || note.title.toLowerCase().includes(search.toLowerCase());
    return matchesArchive && matchesSearch;
  });

  if (filteredNotes.length === 0) {
    return (
      <div className="notes-list">
        <div className="notes-list__empty-message">
          <img src="/empty.svg" alt="No Notes Available" />
          <h3>No notes available</h3>
        </div>
      </div>
    );
  }

  const secondaryAction = isArchive ? 'Move' : 'Archive';
  const onSecondaryAction = isArchive ? onMove : onArchive;

  return (
    <div className="notes-list">
      {filteredNotes.map((note) => (
        <NoteCard
          key={note.id}
          onDelete={onDelete}
          secondaryAction={secondaryAction}
          onSecondaryAction={onSecondaryAction}
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
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      archived: PropTypes.bool.isRequired,
    })
  ).isRequired,
  isArchive: PropTypes.bool.isRequired,
  search: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  onMove: PropTypes.func.isRequired,
};

export default NotesList;
