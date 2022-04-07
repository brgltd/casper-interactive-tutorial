import Level from "../../components/level/level";
import LevelMarkdown from "../../components/level-markdown/level-markdown";
import LevelEditor from "../../components/level-editor/level-editor";
import getLevelPaths from "../../utils/get-level-paths/get-level-paths";
import getLevelProps from "../../utils/get-level-props/get-level-props";
import useIsClient from "../../hooks/useIsClient";
import CONFIG from "../../config";
import type {
  GetStaticPropsContext,
  GetStaticPropsResult,
  GetStaticPathsResult,
} from "next";
import type ContentHTML from "../../types/content-html";

export function getStaticPaths(): GetStaticPathsResult {
  const levelPaths = getLevelPaths();
  return {
    paths: levelPaths,
    fallback: true,
  };
}

export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<ContentHTML>> {
  const { params } = context;
  if (!params) {
    return { notFound: true };
  }
  const levelProps = await getLevelProps(params);
  return {
    props: levelProps,
    revalidate: CONFIG.REVALIDATE,
  };
}

export default function ID({ contentHTML }: ContentHTML): JSX.Element {
  const isClient = useIsClient();
  return (
    <Level>
      {isClient && <LevelMarkdown contentHTML={contentHTML} />}
      <LevelEditor />
    </Level>
  );
}
