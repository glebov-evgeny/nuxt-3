export default function sortArray(array) {
  return array.sort((a, b) => {
    if (a.attributes.sort < b.attributes.sort) {
      return -1;
    }

    if (a.attributes.sort > b.attributes.sort) {
      return 1;
    }

    return 0;
  });
}
