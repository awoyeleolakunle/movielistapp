import { Dispatch, SetStateAction } from "react";

export const handleRetrievedToken = (): Promise<string | null> => {
  return Promise.resolve(sessionStorage.getItem("movieListToken"));
};

export const fetchToken = async (setState: Dispatch<SetStateAction<any>>) => {
  const retrievedToken: string | null = await handleRetrievedToken();
  setState(retrievedToken as any);
};
