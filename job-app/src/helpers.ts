export const findPostedYears = (date: string) => {
  const dateNow = new Date();
  const datePosted = new Date(date);
  const timeDiff = Math.abs(dateNow.getTime() - datePosted.getTime());
  const postedYears = Math.ceil(timeDiff / (1000 * 3600 * 24) / 365);
  return postedYears;
};
