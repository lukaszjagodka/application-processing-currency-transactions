/* eslint-disable consistent-return */
export const fetchCourse = async () => {
  try {
    const response = await fetch('https://api.nbp.pl/api/exchangerates/rates/a/eur/');
    const json = await response.json();
    return json.rates[0].mid;
  } catch (err) {
    console.error('Error: ', err);
  }
};
