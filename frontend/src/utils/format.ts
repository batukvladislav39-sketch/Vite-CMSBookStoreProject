export const formatNumber = (n: number): string => Number(n ?? 0).toLocaleString('uk-UA');
export const formatPrice = (n: number): string => `${formatNumber(n)} ₴`;