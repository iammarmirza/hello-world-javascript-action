export const makeSlug = (file) => {
    const slug = file.replace('.md', '')
    return slug
}