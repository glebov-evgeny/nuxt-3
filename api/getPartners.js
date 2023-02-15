import apiRequest from '~~/composables/apiRequest';
import sortArray from '~~/composables/sortArray';

export default async function getPartners(opts) {
  const { data } = await apiRequest('/v1/partners', 'get', opts);

  return sortArray(data);
}
