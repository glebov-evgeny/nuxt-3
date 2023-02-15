import { useRuntimeConfig, useFetch } from '#imports';

export default async function request(url, method, opts, body) {
  const config = useRuntimeConfig();

  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Accept': '*/*',
  };

  const formBody = new URLSearchParams(body);

  const { data } = await useFetch(url, {
    baseURL: config.public.baseURL,
    headers,
    method,
    ...opts,
    body: formBody,
  });

  return data;
}
