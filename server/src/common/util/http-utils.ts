import { HttpStatus } from '@nestjs/common';
import { JSONPayload } from 'common';

// Response Payloads
export const handleSuccess = ({ message, data }: JSONPayload) => {
  return {
    message,
    data,
  };
};

export const handleFailed = ({ message }: JSONPayload) => {
  return { message };
};

// URL
export const getUrl = (path: string, queryParams: string[]) => {
  const url = new URL(path);

  for (const key in queryParams) {
    url.searchParams.set(key, queryParams[key]);
  }

  return url;
};
