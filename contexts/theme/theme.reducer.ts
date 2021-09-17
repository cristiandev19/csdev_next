import { ThemeAction, ThemeState } from './theme.types';

export const ThemeActionTypes = {
  setTheme: '[schedule-data] set theme',
  changeTheme: '[schedule-data] change theme',
};

const ThemeReducer = (
  state: ThemeState,
  action: ThemeAction,
): ThemeState => {
  switch (action.type) {
    case ThemeActionTypes.setTheme:
      return {
        ...state,
        theme: action.payload,
      };
    case ThemeActionTypes.changeTheme:
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    default:
      return state;
  }
};

export default ThemeReducer;
