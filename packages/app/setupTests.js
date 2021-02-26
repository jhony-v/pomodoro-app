import '@testing-library/jest-dom/extend-expect';

// audio
window.HTMLMediaElement.prototype.play = () => {};
window.HTMLMediaElement.prototype.pause = () => {};

jest.mock('./src/assets/alarm.mp3', () => null);
