export const findPostedYears = (date: string): number => {
  const dateNow = new Date();
  const datePosted = new Date(date);
  const timeDiff = Math.abs(dateNow.getTime() - datePosted.getTime());
  const postedYears = Math.ceil(timeDiff / (1000 * 3600 * 24) / 365);
  return postedYears;
};

export const formatSalary = (salary: string): string => {
  const formattedSalary = '€ ';
  const tempStr = salary
    .split('-')
    .map((elem) => (elem = elem.slice(0, elem.indexOf('k')) + ' 000'))
    .join(' — ');
  return formattedSalary + tempStr;
};

export const getOverview = (description: string): string => {
  const overviewText = `${description.slice(
    0,
    description.indexOf('Responsopilities')
  )}`;
  return overviewText;
};

export const getResponsibilities = (description: string): string => {
  const responsibilitiesText = `${description.slice(
    description.indexOf('Responsopilities'),
    description.indexOf('Compensation')
  )}`;
  return responsibilitiesText;
};

export const getCompensationText = (description: string): string => {
  const compensationText = `${description.slice(
    description.indexOf('Compensation') + 30
  )}`;
  return compensationText;
};
