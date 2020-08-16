const formatter = Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

function numberFormat(number) {
  return formatter.format(number);
}

export { numberFormat };
