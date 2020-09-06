export async function getArticles() {
  try {
    let articles = await fetch(
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=79af8a0825ba4443adf9c1f76f8913cb"
    );
    let result = await articles.json();
    return result.articles;
  } catch (error) {
    throw error;
  }
}
