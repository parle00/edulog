import { DELAY_TIME } from "./constants";

export const delay = () => {
  return new Promise((resolve) => setTimeout(resolve, DELAY_TIME));
};
