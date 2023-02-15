import apiRequest from '~~/composables/apiRequest';
import sortArray from '~~/composables/sortArray';

export default async function getDirections(opts) {
  const { data } = await apiRequest('/v1/directions', 'get', opts);

  return sortArray(data);
}
