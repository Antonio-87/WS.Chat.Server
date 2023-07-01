function formatDate(timestamp) {
    const date = new Date(timestamp);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    if (month < 10 && hours < 10) {
      return `${day}.0${month}.${year} 0${hours}:${minutes}`;
    } else if (month < 10 && hours >= 10) {
      return `${day}.0${month}.${year} ${hours}:${minutes}`;
    } else if (month >= 10 && hours < 10) {
      return `${day}.${month}.${year} 0${hours}:${minutes}`;
    } else {
      return `${day}.${month}.${year} ${hours}:${minutes}`;
    }
  }

  module.exports = formatDate;