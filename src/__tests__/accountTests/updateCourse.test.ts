import { updateCourse } from '../../components/accountActions';
import accountReducer from '../../components/accountReducer';

test('should update course', () => {
  const previousState = {
    course: 4.60,
  };

  expect(accountReducer(previousState, updateCourse(4.65))).not.toBe(4.60);
});
