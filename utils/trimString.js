export default (str, limit) =>
  str.length > limit ? `${str.substring(0, limit)}...` : str;
