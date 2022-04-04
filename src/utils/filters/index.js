export const filterList = (list, filters) => {
  // Filter by Platform

  const newList = list.filter((item) => {
    if (
      filters.platform.length > 0 &&
      !filters.platform.every((filter) => item.platform.includes(filter))
    ) {
      return false;
    }

    // Filter by Category
    if (
      filters.categoryName.length > 0 &&
      !item.categoryName.some((item) => filters.categoryName.includes(item))
    ) {
      return false;
    }

    // Filter by Price
    if (filters.price.type) {
      let isValid = true;

      switch (filters.price.type) {
        case 'FREE':
          if (item.price !== 0) {
            isValid = false;
          }
          break;
        case 'DISCOUNTED':
          if (item.discount === 0) {
            isValid = false;
          }
          break;
        case 'LESS_THAN':
          if (item.price > filters.price.amount) {
            isValid = false;
          }
          break;
        case 'MORE_THAN':
          if (item.price < filters.price.amount) {
            isValid = false;
          }
          break;
        default:
          isValid = false;
          break;
      }
      if (!isValid) return false;
    }
    return true;
  });

  if (filters.sort.type === 'ASCENDING') {
    switch (filters.sort.by) {
      case 'PRICE':
        return [...newList].sort((a, b) => a.price - b.price);

      case 'ALPHABET':
        return [...newList].sort((a, b) => a.title.localeCompare(b.title));

      case 'RELEASE':
        return [...newList].sort((a, b) => {
          const dateA = new Date(a.releaseDate);
          const dateB = new Date(b.releaseDate);
          return dateA.getTime() - dateB.getTime();
        });

      default:
        break;
    }
  } else if (filters.sort.type === 'DESCENDING') {
    switch (filters.sort.by) {
      case 'PRICE':
        return [...newList].sort((a, b) => b.price - a.price);

      case 'ALPHABET':
        return [...newList].sort((a, b) => b.title.localeCompare(a.title));

      case 'RELEASE':
        return [...newList].sort((a, b) => {
          const dateA = new Date(a.releaseDate);
          const dateB = new Date(b.releaseDate);
          return dateB.getTime() - dateA.getTime();
        });

      default:
        break;
    }
  }
  return newList;
};

export const getFiltersCount = (filters) => {
  let count = 0;
  if (filters.price?.type) {
    count += 1;
  }
  if (filters.platform?.length > 0) {
    count += filters.platform.length;
  }
  if (filters.categoryName?.length > 0) {
    count += filters.categoryName.length;
  }
  if (filters.sort.by) {
    count += 1;
  }
  return count;
};
