export const formatDate = (
  date: Date,
  startSlice: number,
  endSlice: number
) => {
  return date.toString().slice(startSlice, endSlice);
};
