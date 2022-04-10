import GetLevelPaths from "./get-level-paths.types";
import getArticleNames from "../get-article-names";

export default function getLevelPaths(): Array<GetLevelPaths> {
  return getArticleNames().map((name) => ({ params: { id: name } }));
}
