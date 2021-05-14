export const formatDateStart = (date: Date) => {
  let formattedDate = `${date.toString().slice(0, 4)},  
    ${date.toString().slice(4, 11)}`;
  return formattedDate;
};
export const formatDateEnd = (date: Date) => {
  let formattedDate = `${date.toString().slice(16, 21)}- ${date
    .toString()
    .slice(16, 21)}`;
  return formattedDate;
};

export const formatDate = (
  date: Date,
  startSlice: number,
  endSlice: number
) => {
  return date.toString().slice(startSlice, endSlice);
};
