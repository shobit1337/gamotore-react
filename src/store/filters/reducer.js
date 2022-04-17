import { getFiltersCount } from '../../utils/filters';
import {
  FILTER_BY_PLATFORM,
  FILTER_BY_PRICE,
  FILTER_BY_CATEGORY,
  FILTER_BY_SORT,
  CLEAR_FILTERS,
  FILTER_BY_SEARCH,
} from './action.types';

const initialState = {
  appliedFilters: 0,
  price: { type: '', amount: 0 },
  platform: [],
  categoryName: [],
  sort: { name: 'Relevance', type: '', by: '' },
  searchName: '',
};

const filtersReducer = (state, action) => {
  switch (action.type) {
    case FILTER_BY_PLATFORM:
      return {
        ...state,
        platform: [...action.payload],
        appliedFilters: getFiltersCount({
          ...state,
          platform: [...action.payload],
        }),
      };
    case FILTER_BY_PRICE:
      return {
        ...state,
        price: {
          ...action.payload,
        },
        appliedFilters: getFiltersCount({
          ...state,
          price: {
            ...action.payload,
          },
        }),
      };
    case FILTER_BY_CATEGORY:
      return {
        ...state,
        categoryName: [...action.payload],
        appliedFilters: getFiltersCount({
          ...state,
          categoryName: [...action.payload],
        }),
      };
    case FILTER_BY_SORT:
      return {
        ...state,
        sort: { ...action.payload },
        appliedFilters: getFiltersCount({
          ...state,
          sort: { ...action.payload },
        }),
      };
    case FILTER_BY_SEARCH:
      return {
        ...state,
        searchName: action.payload.searchName,
        appliedFilters: getFiltersCount({
          ...state,
          searchName: action.payload.searchName,
        }),
      };

    case CLEAR_FILTERS:
      return {
        ...initialState,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export { filtersReducer, initialState };
