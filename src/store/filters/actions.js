import {
  FILTER_BY_PLATFORM,
  FILTER_BY_CATEGORY,
  FILTER_BY_PRICE,
  FILTER_BY_SORT,
  CLEAR_FILTERS,
} from './action.types';

export const filterByPlatform = (filters, dispatch) => (filter) => {
  let newPlatform = filters.platform;
  if (newPlatform?.includes(filter)) {
    newPlatform = newPlatform.filter((item) => item !== filter);
  } else {
    newPlatform = [...newPlatform, filter];
  }
  dispatch({ type: FILTER_BY_PLATFORM, payload: newPlatform });
};

export const filterByCategory = (filters, dispatch) => (filter) => {
  let newCategoryName = filters.categoryName;
  if (newCategoryName?.includes(filter)) {
    newCategoryName = newCategoryName.filter((item) => item !== filter);
  } else {
    newCategoryName = [...newCategoryName, filter];
  }
  dispatch({ type: FILTER_BY_CATEGORY, payload: newCategoryName });
};

export const filterByPrice = (filters, dispatch) => (filter) => {
  if (filter?.type === 'FREE' || 'MORE_THAN' || 'LESS_THAN' || 'DISCOUNTED') {
    let newPrice = filters.price;
    if (newPrice?.type === filter.type && newPrice?.amount === filter.amount) {
      newPrice = { type: '', amount: 0 };
    } else {
      newPrice = { type: filter.type, amount: filter.amount };
    }
    dispatch({
      type: FILTER_BY_PRICE,
      payload: newPrice,
    });
  }
};

export const filterBySort = (filters, dispatch) => (filter) => {
  if (
    filter?.type === 'ASCENDING' ||
    ('DESCENDING' && filter?.by === 'PRICE') ||
    'ALPHABET' ||
    'RELEASE'
  ) {
    let newSort = filters.sort;
    if (newSort?.type === filter.type) {
      newSort = { name: 'Relevance', type: '', by: '' };
    } else {
      newSort = { name: filter.name, type: filter.type, by: filter.by };
    }
    dispatch({
      type: FILTER_BY_SORT,
      payload: newSort,
    });
  }
};

export const clearFilters = (dispatch) => () => {
  dispatch({
    type: CLEAR_FILTERS,
  });
};
