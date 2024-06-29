export const getInputToPublishPost = async (parsedArticle, publicationId, slug) => {
  const input = {
    title: parsedArticle.data.title || '',
    subtitle: parsedArticle.data.subtitle || null,
    publicationId: publicationId,
    contentMarkdown: parsedArticle.content,
    publishedAt: parsedArticle.publishedAt || null,
    slug: slug,
    originalArticleURL: parsedArticle.data.originalArticleURL || null,
    disableComments: parsedArticle.data.disableComments || false,
    seriesId: null,
    settings: {
      enableTableOfContent: false,
      isNewsletterActivated: false
    },
  };

  return input;
};

const validateInput = (parsedArticle) => {};
