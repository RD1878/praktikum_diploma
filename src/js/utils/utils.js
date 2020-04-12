const timeInterval = (daysAgo) => {
  const now = new Date();
  const from = Date.parse(now);
  const to = from - daysAgo * 86400000;
  const dateFrom = new Date(from);
  const dateTo = new Date(to);
  return {
    from: `${dateFrom.getFullYear()}-${String(dateFrom.getMonth() + 1).padStart(2, "0")}-${String(dateFrom.getDate()).padStart(2, "0")}`,
    to: `${dateTo.getFullYear()}-${String(dateTo.getMonth() + 1).padStart(2, "0")}-${String(dateTo.getDate()).padStart(2, "0")}`
  }
};

const newsArrayHandler = (array) => {

}

export { timeInterval, }
