import apiRequest from '~~/composables/apiRequest';
import sortArray from '~~/composables/sortArray';

export default async function getSocials(opts) {
  const { data } = await apiRequest('/v1/social-networks', 'get', opts);

  return sortArray(data);
}
