export interface ContentSection {
  heading: string;
  body: string;
}

export interface KnowledgeArticle {
  slug: string;
  title: string;
  description: string;
  h1: string;
  category: string;
  readingTime: string;
  publishedDate: string;
  updatedDate: string;
  content: ContentSection[];
  faqs: { q: string; a: string }[];
  keywords: string[];
  relatedArticles: string[];
}
