import { baseColors } from '@pomodoro/design';
import { createApi, createEvent, createStore } from 'effector';

function ui() {
  const $currentheme = createStore(baseColors.primary);
  const $themeColors = createStore(Object.values(baseColors));
  const $baseColors = createStore(baseColors);
  const $modal = createStore(false);

  // event actions
  const changeTheme = createEvent();
  const modalApi = createApi($modal, {
    openModal: () => true,
    closeModal: () => false,
  });
  $currentheme.on(changeTheme, (_, newTheme) => newTheme);

  return {
    $currentheme,
    $themeColors,
    $modal,
    $baseColors,
    changeTheme,
    ...modalApi,
  };
}

export default ui();
