export const details = `import { Details, GetContent, Parser } from "types";\n
export const _details = (content: GetContent, parser: Parser) => {
  return async (route: string): Promise<Details> => {
    const url = "https://baseurl" + route;
    const { innerHTML } = await content(url);
    const $ = parser(innerHTML);

    return {
      title: "",
      description: "",
      status: "",
      img: "",
      type: "",
      genres: [],
      chapters: [],
    };
  };
};
`;
