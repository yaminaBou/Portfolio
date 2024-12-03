document.getElementById('filter').addEventListener('change', function() {
    const filterValue = this.value;
    const articleCards = document.querySelectorAll('.article-card');
  
    articleCards.forEach(card => {
      card.style.display = 'none'; // Hide all cards initially
  
      if (filterValue === 'recent' && card.dataset.category === 'recent') {
        card.style.display = 'block';
      } else if (filterValue === 'top-rated' && card.dataset.category === 'top-rated') {
        card.style.display = 'block';
      } else if (filterValue === 'low-rated' && card.dataset.category === 'low-rated') {
        card.style.display = 'block';
      }
    });
  });
  