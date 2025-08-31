import { closest } from "fastest-levenshtein";

export const getActivePath = (
  path: string,
  paths: string[],
  ignorePaths?: string[]
) => {
  const clostestPath = closest(path, paths.concat(ignorePaths || []));
  const index = paths.indexOf(clostestPath);

  return { active: clostestPath, activeIndex: index };
};
