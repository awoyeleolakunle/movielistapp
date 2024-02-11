import { Dispatch, SetStateAction } from "react";
import { EMPTY_STRING, ONE, ZERO, SEVEN } from "../constants";

export const handleRetrievedToken = (): Promise<string | null> => {
  return Promise.resolve(sessionStorage.getItem("movieListToken"));
};

export const fetchToken = async (setState: Dispatch<SetStateAction<any>>) => {
  const retrievedToken: string | null = await handleRetrievedToken();
  setState(retrievedToken as any);
};

export const setCookie = (
  name: string,
  value: string,
  days: number = SEVEN
): void => {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=/`;
};

export const getCookie = (name: string): string | null => {
  const cookieName = name + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(";");
  console.log("All cookies:", cookieArray);
  for (let i = ZERO; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(ZERO) == EMPTY_STRING) {
      cookie = cookie.substring(ONE);
    }
    if (cookie.indexOf(cookieName) === ZERO) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }

  return EMPTY_STRING;
};
