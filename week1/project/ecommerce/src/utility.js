// Normalize category names by removing 'FAKE:' prefix and trimming extra spaces
export const cleanCategory = (category) => {
  if (!category) return '';
  return category
    .replace('FAKE: ', '')
    .trim()
    .toLowerCase()
    .replace(/^\w/, (c) => c.toUpperCase());
};
