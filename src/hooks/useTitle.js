import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} / Movie Flick`;
  });

  return null;
};
