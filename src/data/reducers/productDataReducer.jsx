import { GET_PRODUCT_DATA_SUCCESS, GET_PRODUCT_STYLES_SUCCESS, UPDATE_SELECTED_STYLE } from '../types/types';

const initialState = {
  productData: {},
  productStyles: {},
  selectedPrice: null,
  salePrice: null,
  selectedStyle: null,
};

const productDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_DATA_SUCCESS:
      return {
        ...state,
        productData: action.payload,
      };
    case GET_PRODUCT_STYLES_SUCCESS:
      return {
        ...state,
        productStyles: action.payload,
      };
    case UPDATE_SELECTED_STYLE:
      return {
        ...state,
        selectedStyle: action.payload.style_id,
        selectedPrice: action.payload.original_price,
        salePrice: action.payload.sale_price,
      };
    default:
      return state;
  }
};

export default productDataReducer;
