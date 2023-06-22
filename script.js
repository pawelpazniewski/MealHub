
fetch('http://www.themealdb.com/api/json/v1/1/random.php')
  .then(response => response.json())
  .then(data => {
    const mealThumb = data.meals[0].strMealThumb; // Pobranie wartości 'strMealThumb' z odpowiedzi

    const imgElement = document.querySelector('.random-meal-featured-img'); // Znalezienie elementu HTML o klasie 'random-meal-featured-img'
    imgElement.src = mealThumb;


    const strMeal = data.meals[0].strMeal; // Pobranie wartości 'strMeal' z odpowiedzi

    const headingElement = document.querySelector('.heading.fav'); // Znalezienie elementu HTML o klasie 'heading fav'
    headingElement.textContent = strMeal; // Ustawienie zawartości tekstowej elementu

    // Możesz wykonać inne operacje lub manipulacje na stronie w tym miejscu
  })
  .catch(error => {
    console.error('Błąd:', error);
  });




  