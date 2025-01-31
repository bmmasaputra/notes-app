const getInitialData = () => [
  {
    id: 1,
    title: 'Welcome to NoteApp',
    body: "Welcome to NoteApp – your simple, sleek, and efficient way to capture thoughts, organize ideas, and stay productive. Whether you're jotting down quick notes or managing important tasks, NoteApp keeps everything at your fingertips. Start writing and never lose a great idea again!",
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: false,
  },
  {
    id: 2,
    title: 'Archive feature',
    body: 'Need to declutter without losing important notes? Keep your notes organized with the Archive feature! Store notes you don’t need now and restore them anytime.',
    createdAt: '2022-04-14T04:27:34.572Z',
    archived: true,
  },
];

const showFormattedDate = (date) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(date).toLocaleDateString('en-EN', options);
};

export { getInitialData, showFormattedDate };
