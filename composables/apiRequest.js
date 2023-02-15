import { useRuntimeConfig, useFetch } from '#imports';

export default async function apiRequest(request, method, opts, body) {
  const config = useRuntimeConfig();

  const headers = {
    Accept: 'application/vnd.api+json',
  };

  const { data, error } = await useFetch(request, {
    baseURL: config.public.baseURL,
    headers,
    method,
    ...opts,
    body,
  });

  if (error.value) {
    throw createError({ statusCode: 404, statusMessage: error.value });
  }

  if (data?.value) {
    return data.value;
  } else {
    throw createError({ statusCode: 404, statusMessage: 'Error request' });
  }
}
