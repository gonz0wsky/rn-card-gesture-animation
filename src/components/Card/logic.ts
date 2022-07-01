import {Gesture} from 'react-native-gesture-handler';
import {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {DURATION, HEIGHT, WIDTH, X_MAX_ROTATE, Y_MAX_ROTATE} from './constants';

const useLogic = () => {
  const x = useSharedValue(0);
  const y = useSharedValue(0);

  const panGesture = Gesture.Pan()
    .onBegin(e => {
      const axisX = e.x - WIDTH / 2;
      const axisY = e.y - HEIGHT / 2;
      x.value = withTiming(axisX, {duration: DURATION});
      y.value = withTiming(axisY, {duration: DURATION});
    })
    .onChange(e => {
      const axisX = e.x - WIDTH / 2;
      const axisY = e.y - HEIGHT / 2;
      x.value = axisX;
      y.value = axisY;
    })
    .onFinalize(() => {
      x.value = withTiming(0, {duration: DURATION});
      y.value = withTiming(0, {duration: DURATION});
    });

  const gesture = Gesture.Race(panGesture);

  const animation = useAnimatedStyle(() => {
    const rotateX = interpolate(
      y.value,
      [-(WIDTH / 2), 0, WIDTH / 2],
      [X_MAX_ROTATE, 0, -X_MAX_ROTATE],
      Extrapolate.CLAMP,
    );
    const rotateY = interpolate(
      x.value,
      [-(HEIGHT / 2), 0, HEIGHT / 2],
      [-Y_MAX_ROTATE, 0, Y_MAX_ROTATE],
      Extrapolate.CLAMP,
    );
    return {
      transform: [
        {perspective: 250},
        {rotateX: `${rotateX}deg`},
        {rotateY: `${rotateY}deg`},
      ],
    };
  }, [x, y]);

  return {animation, gesture};
};

export default useLogic;
