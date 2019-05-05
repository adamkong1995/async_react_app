import jsonPlaceholder from '../apis/jsonPlaceholder';

// Passing a functional actions creator to react thunk
export const fetchPosts = () => async (dispatch, getState) => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response });
};