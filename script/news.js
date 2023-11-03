function appendNewsItem(newsText) {
    const newsItem = document.createElement('div');
    newsItem.classList.add('news-item');
    newsItem.textContent = newsText;
    document.querySelector('.news-scroll').appendChild(newsItem);
}
  // Usage example:
        appendNewsItem("News 4: This is a new news item.");
        
        // Add more news items as needed.
        
        