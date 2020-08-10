import { CheckType, ShortenType } from "./store/context";

enum Endpoint {
  CHECK = "CHECK",
  SHORTEN = "SHORTEN",
}

export type fetchParams = { url: string; endpoint: "SHORTEN" | "CHECK" };

type apiResponse = {
  success: boolean;
  data?: CheckType | ShortenType;
  message?: string;
};

export const fetchIt = async (params: fetchParams): Promise<apiResponse> => {
  let resp: apiResponse;
  if (params.endpoint === Endpoint.SHORTEN) {
    resp = await Post(params.url);
  } else {
    resp = await Get(params.url);
  }

  return resp;
};

const Post = async (url: string): Promise<apiResponse> => {
  // const endpoint = "http://127.0.0.1:5000/api/1.0/shorten";
  const endpoint = "/api/1.0/shorten";
  const valid_url: string = url.startsWith("http") ? url : `http://${url}`;

  const resp = await fetch(endpoint, {
    method: "POST",
    body: JSON.stringify({ url: valid_url }),
    headers: { "content-type": "application/json" },
  });

  const body = await resp.json();

  return body;
};

const Get = async (route: string): Promise<apiResponse> => {
  // const endpoint: string = `http://127.0.0.1:5000/api/1.0/check?route=${route}`;
  const endpoint: string = `/api/1.0/check?route=${route}`;

  const resp = await fetch(endpoint);
  const body = await resp.json();

  return body;
};

type Visitors = {
  [country: string]: number;
};

export const visitorPerCountry = (
  visitors: Visitors
): { countries: string[]; count: number[] } => {
  let countries = Object.keys(visitors);
  let count = Object.values(visitors);

  return { countries, count };
};

type Report = {
  email: string;
  url: string;
  details: string;
};

export const sendReport = async (
  payload: Report
): Promise<{ success: boolean; message?: string }> => {
  // const endpoint = "http://127.0.0.1:5000/api/1.0/report";
  const endpoint = "/api/1.0/report";

  const resp = await fetch(endpoint, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: { "content-type": "application/json" },
  });
  const body = await resp.json();

  return body;
};

export const storeEmail = (email: string): void => {
  localStorage.setItem("email", email);
};

export const sendReportConfirmation = async (payload: {
  token: string;
}): Promise<{ success: boolean }> => {
  // const endpoint = "http://127.0.0.1:5000/api/1.0/report/confirm";
  const endpoint = "/api/1.0/report/confirm";

  const resp = await fetch(endpoint, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
  });

  const body = await resp.json();

  return body;
};
