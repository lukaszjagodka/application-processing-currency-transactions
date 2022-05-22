import capitalizeFirstLetter from '../helpers/capitalizeFirstLetter';

test('capitalize first letter in description', () => {
  expect(capitalizeFirstLetter('programming')).toBe('Programming');
});

test('capitalize first letter in description', () => {
  expect(capitalizeFirstLetter('Lorem ipsum')).not.toBe('lorem ipsum');
});
