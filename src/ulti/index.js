const sortAssending = (a, b) => {
  var nameA = a.task.toUpperCase();
  var nameB = b.task.toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
};

const sortDesending = (a, b) => {
  var nameA = a.task.toUpperCase();
  var nameB = b.task.toUpperCase();
  if (nameA > nameB) {
    return -1;
  }
  if (nameA < nameB) {
    return 1;
  }
  return 0;
};

export { sortAssending, sortDesending };
