import { ui } from '../models';

describe('ui-model', () => {
  let themeColors;
  beforeAll(() => {
    themeColors = ui.$themeColors.getState();
  });

  it('should have initial theme primary', () => {
    expect(ui.$currentheme.getState()).toBe(themeColors[0]);
  });

  it('should change a theme and get the new theme', () => {
    ui.changeTheme(themeColors[1]);
    expect(ui.$currentheme.getState()).toBe(themeColors[1]);
  });
});
