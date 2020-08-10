import { CheckType, ShortenType, Action } from "./context";

export const ShortenSuccess = (data: ShortenType): Action => ({
  type: "SHORTEN",
  data,
});

export const CheckSuccess = (data: CheckType): Action => ({
  type: "CHECK",
  data,
});

export const ShortenError = (message: string): Action => ({
  type: "SHORTEN_ERROR",
  message,
});

export const CheckError = (message: string): Action => ({
  type: "CHECK_ERROR",
  message,
});
