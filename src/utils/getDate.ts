export const getDayTime = () => {
  const now = new Date();
  const hour = now.getHours();

  const morning = hour >= 6 && hour <= 12,
    afternoon = hour >= 12 && hour <= 18,
    evening = hour >= 18 && hour <= 23,
    night = hour >= 1 || hour <= 6;

  if (morning) {
    return 'Good morning';
  } else if (afternoon) {
    return 'Good afternoon';
  } else if (evening) {
    return 'Good evening';
  } else if (night) {
    return 'Good night';
  }
};

export const getMonth = arg => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const d = new Date();

  return monthNames[arg];
};

export const getDay = () => {
  const today = new Date();
  return String(today.getDate()).padStart(2, '0');
};

export const getYear = () => {
  const d = new Date();
  return d.getFullYear();
};

export const parseProfileDate = date => {
  const dateArr = date.toString().split(' ').slice(0, 4);
  return `${dateArr[1]} ${dateArr[2]}, ${dateArr[3]}`;
};
