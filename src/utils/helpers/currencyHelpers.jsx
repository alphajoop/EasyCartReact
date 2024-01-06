const CurrencyHelper = {
  formatPrice: (price, currency) => {
    const numericPrice = parseFloat(price);

    if (isNaN(numericPrice)) {
      return 'N/A';
    }

    switch (currency) {
      case 'USD':
        return `$${numericPrice.toFixed(2)}`;
      case 'EUR':
        return `€${numericPrice.toFixed(2)}`;
      case 'FCFA':
        return `${numericPrice.toFixed(0)} FCFA`;
      default:
        return `$${numericPrice.toFixed(2)}`;
    }
  },
};

export default CurrencyHelper;
