export const githubSync = async (added_files, modified_files, deleted_files) => {
  const added_files_arr = added_files
    .split(" ")
    .filter((file) => file.endsWith(".md"));
  const publishPromises = added_files_arr.map((added_file) =>
    publishArticle(added_file, hashnode_token, publicationId)
  );
  await Promise.all(publishPromises);

  const modified_files_arr = modified_files
    .split(" ")
    .filter((file) => file.endsWith(".md"));
  const modifyPromises = modified_files_arr.map((modified_file) =>
    modifyArticle(modified_file, hashnode_token, publicationId)
  );
  await Promise.all(modifyPromises);

  const deleted_files_arr = deleted_files
    .split(" ")
    .filter((file) => file.endsWith(".md"));
  const deletePromises = deleted_files_arr.map((deleted_file) =>
    deleteArticle(deleted_file, hashnode_token, publicationId)
  );
  await Promise.all(deletePromises);
};
