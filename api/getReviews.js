import apiRequest from '~~/composables/apiRequest';
import sortArray from '~~/composables/sortArray';

export default async function getReviews(opts) {
  const { data } = await apiRequest('/v1/reviews', 'get', opts);

  return sortArray(data);
}
