import { Dispatch, SetStateAction } from "react";
import {
  EMPTY_STRING,
  ONE,
  ZERO,
  SEVEN,
  EQUALS_TO,
  BY_SEMI_COLON,
} from "../constants";
import { MOVIE_LIST_TOKEN } from "../config/appConfig";
import { jwtDecode } from "jwt-decode";

export const handleRetrievedToken = (): Promise<string | null> => {
  return Promise.resolve(sessionStorage.getItem(MOVIE_LIST_TOKEN));
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
  const cookieName = name + EQUALS_TO;
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(BY_SEMI_COLON);
  for (let i = ZERO; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    // while (cookie.charAt(ZERO) == EMPTY_STRING) {
    //   cookie = cookie.substring(ONE);
    // }
    if (cookie.indexOf(cookieName) === ZERO) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }

  return EMPTY_STRING;
};

export const DecodeToken = (token: string): Promise<void> => {
  return jwtDecode(token);
};
