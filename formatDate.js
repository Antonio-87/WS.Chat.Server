function formatDate(timestamp) {
    const date = new Date(timestamp);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    if (month < 10 && hours < 10) {
      return `0${hours}:${minutes} ${day}.0${month}.${year}`;
    } else if (month < 10 && hours >= 10) {
      return `${hours}:${minutes} ${day}.0${month}.${year}`;
    } else if (month >= 10 && hours < 10) {
      return `0${hours}:${minutes} ${day}.${month}.${year}`;
    } else {
      return `${hours}:${minutes} ${day}.${month}.${year} `;
    }
  }

  module.exports = formatDate;