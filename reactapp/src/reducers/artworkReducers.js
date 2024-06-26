import { 
  ARTWORK_LIST_REQUEST,
  ARTWORK_LIST_SUCCESS,
  ARTWORK_LIST_FAIL,
  ARTWORK_DETAILS_REQUEST,
  ARTWORK_DETAILS_SUCCESS,
  ARTWORK_DETAILS_FAIL,

  ARTWORK_LIKE_REQUEST,
  ARTWORK_LIKE_SUCCESS,
  ARTWORK_LIKE_FAIL,

  ARTWORK_DELETE_REQUEST,
  ARTWORK_DELETE_SUCCESS,
  ARTWORK_DELETE_FAIL,

  ARTWORK_CREATE_REQUEST,
  ARTWORK_CREATE_SUCCESS,
  ARTWORK_CREATE_FAIL,
  ARTWORK_CREATE_RESET,

  ARTWORK_UPDATE_REQUEST,
  ARTWORK_UPDATE_SUCCESS,
  ARTWORK_UPDATE_FAIL,
  ARTWORK_UPDATE_RESET,

  FETCH_REACTIONS_REQUEST,
  FETCH_REACTIONS_SUCCESS,
  FETCH_REACTIONS_FAIL,
  ADD_COMMENT,

  ARTWORK_CAROUSEL_REQUEST,
  ARTWORK_CAROUSEL_SUCCESS,
  ARTWORK_CAROUSEL_FAIL,

} from '../constants/artworkConstants'; 

export const artworkListReducer = (state = { artworks: [] }, action) => {
  switch (action.type) {
      case ARTWORK_LIST_REQUEST:
          return { loading: true, artworks: [] };
      case ARTWORK_LIST_SUCCESS:
          return { loading: false, artworks: action.payload };
      case ARTWORK_LIST_FAIL:
          return { loading: false, error: action.payload };
      default:
          return state;
  }
};

export const artworkDetailsReducer = (state = { artwork: { reactions: [] } }, action) => {
    switch (action.type) {
        case ARTWORK_DETAILS_REQUEST:
            return { loading: true, ...state };
        case ARTWORK_DETAILS_SUCCESS:
            return { loading: false, artwork: action.payload };
        case ARTWORK_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        case ARTWORK_LIKE_SUCCESS:
            return {
                ...state,
                artwork: action.payload,
            };
        default:
            return state;
    }
};

export const artworkLikeReducer = (state = {}, action) => {
    switch (action.type) {
      case ARTWORK_LIKE_REQUEST:
        return { loading: true };
      case ARTWORK_LIKE_SUCCESS:
        return { loading: false, success: true };
      case ARTWORK_LIKE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

  export const artworkDeleteReducer = (state = { }, action) => {
    switch (action.type) {
        case ARTWORK_DELETE_REQUEST:
            return { loading: true };
        case ARTWORK_DELETE_SUCCESS:
            return { loading: false, success: true };
        case ARTWORK_DELETE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
  };

  export const artworkCreateReducer = (state = { }, action) => {
    switch (action.type) {
        case ARTWORK_CREATE_REQUEST:
            return { loading: true };
        case ARTWORK_CREATE_SUCCESS:
            return { loading: false, success: true, artwork: action.payload };
        case ARTWORK_CREATE_FAIL:
            return { loading: false, error: action.payload };
        case ARTWORK_CREATE_RESET:
            return { };
        default:
            return state;
    }
  };

  export const artworkUpdateReducer = (state = { artwork: {} }, action) => {
    switch (action.type) {
        case ARTWORK_UPDATE_REQUEST:
            return { loading: true };
        case ARTWORK_UPDATE_SUCCESS:
            return { loading: false, success: true, artwork: action.payload };
        case ARTWORK_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        case ARTWORK_UPDATE_RESET:
            return { 
              artwork: {}
            };
        default:
            return state;
    }
  };

  const initialState = {
    reactions: [],
    loading: false,
    error: null,
};

export const reactionReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REACTIONS_REQUEST:
            return { ...state, loading: true };
        case FETCH_REACTIONS_SUCCESS:
            return { ...state, loading: false, reactions: action.payload };
        case FETCH_REACTIONS_FAIL:
            return { ...state, loading: false, error: action.payload };
       case ADD_COMMENT:
            return {
                ...state,
                reactions: [...state.reactions, action.payload],
            };
        default:
            return state;
    }
};


export const carouselReducer = (state = { artworks: [] }, action) => {
    switch (action.type) {
        case ARTWORK_CAROUSEL_REQUEST:
            return { loading: true, artworks: [] };
        case ARTWORK_CAROUSEL_SUCCESS:
            return { loading: false, artworks: action.payload };
        case ARTWORK_CAROUSEL_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};