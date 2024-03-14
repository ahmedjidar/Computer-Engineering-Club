export function formatDate(inputDate) {
  const now = new Date();
  const postDate = new Date(inputDate);
  const timeDifferenceInMilliseconds = now - postDate;

  const seconds = Math.floor(timeDifferenceInMilliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30); // Approximation
  const years = Math.floor(days / 365); // Approximation

  if (seconds < 60) {
    return 'now';
  } else if (minutes === 1) {
    return '1m';
  } else if (minutes < 60) {
    return `${minutes}m`;
  } else if (hours === 1) {
    return '1h';
  } else if (hours < 24) {
    return `${hours}h`;
  } else if (days === 1) {
    return '1d';
  } else if (days < 7) {
    return `${days}d`;
  } else if (weeks === 1) {
    return '1w';
  } else if (weeks < 4) {
    return `${weeks}w`;
  } else if (months === 1) {
    return '1mo';
  } else if (months < 12) {
    return `${months}mo`;
  } else if (years === 1) {
    return '1y';
  } else {
    return `${years}y`;
  }
}