import {device} from 'theme';

export const DURATION = 150;
export const RATIO = 1.5;
export const MAX_ROTATE = 10;
export const X_MAX_ROTATE = MAX_ROTATE;
export const Y_MAX_ROTATE = X_MAX_ROTATE / RATIO;
export const WIDTH = device.width - 40;
export const HEIGHT = WIDTH / RATIO;
