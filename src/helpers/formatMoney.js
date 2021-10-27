// Create our number formatter.
export const formatMoney = (amount, currency = 'USD') => {
  var formatter = new Intl.NumberFormat('US', {
    style: 'currency',
    currency,
  });

  return formatter.format(amount);
};
