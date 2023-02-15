import apiRequest from '~~/composables/apiRequest';
import sortArray from '~~/composables/sortArray';

export default async function getPrograms(opts) {
  const { data } = await apiRequest('/v1/programs', 'get', opts);

  return sortArray(data);
}
