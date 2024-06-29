export const getInputToModifyPost = async (parsedArticle, slug, id) => {
  const input = {
    id,
    title: parsedArticle.data.title,
    slug: slug,
    contentMarkdown: parsedArticle.content
  }
    return input;
  };