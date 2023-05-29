export const randomAvatarByUser = (id) => {
  id = id.replace(/[^\d.-]/g, '');
  id = parseInt(id);

  return `/assets/images/avatars/avatar_${id % 24}.jpg`;
};
