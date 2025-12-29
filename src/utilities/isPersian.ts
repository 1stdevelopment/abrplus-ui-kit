export const isPersianOrArabic = (value: string) => {
  return /^[\u0600-\u06FF\s]+$/.test(value);
};
