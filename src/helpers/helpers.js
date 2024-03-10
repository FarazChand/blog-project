export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { month: "short", day: "2-digit", year: "numeric" };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};

export const formatPreview = (previewStr) => {
  const maxCharLength = 300;

  return previewStr.length > maxCharLength
    ? previewStr.slice(0, maxCharLength) + "..."
    : previewStr;
};

export const sortByDates = (blogs) => {
  const comparator = (a, b) => new Date(b._createdAt) - new Date(a._createdAt);
  return [...blogs].sort(comparator);
};
