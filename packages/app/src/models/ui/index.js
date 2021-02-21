import { createEvent, createStore } from 'effector';

function ui() {
  const $theme = createStore('');
  const $modal = createStore(false);
  const changeTheme = createEvent();

  // event actions
  const modalApi = createApi($modal, {
    openModal: () => true,
    closeModal: () => false,
  });
  $theme.on(changeTheme, (_, newTheme) => newTheme);

  return {
    $theme,
    $modal,
    ...modalApi,
  };
}

export default ui();
