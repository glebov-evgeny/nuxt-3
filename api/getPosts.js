import apiRequest from '~~/composables/apiRequest';
import sortArray from '~~/composables/sortArray';

export default async function getPosts(opts) {
  const { data } = await apiRequest('/v1/posts', 'get', opts);

  return sortArray(data);
}
