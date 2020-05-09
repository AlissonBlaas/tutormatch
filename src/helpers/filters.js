export const Filters = (users, city) => users.filter(e => e.city === city);

export const sortName = users => [...users].sort((a, b) => {
  if (a.first_name < b.first_name) {
    return -1;
  }
  if (a.first_name > b.first_name) {
    return 1;
  }
  return 0;
});
export const sortCity = users => [...users].sort((a, b) => {
  if (a.city < b.city) {
    return -1;
  }
  if (a.city > b.city) {
    return 1;
  }
  return 0;
});
