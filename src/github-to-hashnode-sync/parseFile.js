import fs from 'fs-extra'
const matter = require('gray-matter')

export const parseFile = async (fileName) => {
    const content = await fs.readFile(fileName, "utf-8")
    const parsedArticle = matter(content, { language: "yaml" }) 
    return parsedArticle
}