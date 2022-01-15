import { HttpStatus } from '@nestjs/common';
import { JSONPayload } from 'types';

// Response Payloads
export const handleSuccess = ({
  status = HttpStatus.OK,
  message,
  data,
}: JSONPayload) => {
  return {
    status,
    message,
    data,
  };
};

export const handleFailed = ({
  status = HttpStatus.NOT_FOUND,
  message,
}: JSONPayload) => {
  return { status, message };
};

// URL
export const getUrl = (path: string, queryParams: string[]) => {
  const url = new URL(path);

  for (const key in queryParams) {
    url.searchParams.set(key, queryParams[key]);
  }

  return url;
};
