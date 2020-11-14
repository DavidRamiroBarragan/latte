import {useCallback, useReducer} from 'react';

export const useThunkReducer = (reducer, initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Avoid reload when put enhancedDispatch in useEffect dendenciy array
  const enhancedDispatch = useCallback(
    (action) => {
      if (typeof action === 'function') {
        action(dispatch);
      } else {
        dispatch(action);
      }
    },
    [dispatch]
  );

  return [state, enhancedDispatch];
};
