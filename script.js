function searchRecipes(event) {
    event.preventDefault();
    
    let searchTerm = document.getElementById('searchInput').value.toLowerCase();
    let cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
      let title = card.querySelector('.card-title').textContent.toLowerCase();
      if (title.includes(searchTerm)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }

});
  }

  function changeTextandredirect() {
    let button =document.getElementById('rec')
    if (button.innerHTML === "Save Recipe") {
        button.innerHTML = "Saved";
        button.classList.add('saved');  
    } else {
        button.innerHTML = "Save Recipe";
        button.classList.remove('saved');  
    }
}
function changeTextandredirect(recipeName) {
  localStorage.setItem('savedRecipe', recipeName);
  
  
  let button = document.getElementById('rec');
  button.innerHTML = "Saved";
  button.classList.add('saved');
  

  setTimeout(() => {
      window.location.href = 'book.html';
  }, 2000);
}
function displaySavedRecipes() {
  const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes') || '[]');
  const container = document.querySelector('.saved-recipes-container');
  
  if (savedRecipes.length === 0) {
      container.innerHTML = '<p>No recipes saved yet</p>';
      return;
  }
  
  let recipesList = savedRecipes.map(recipe => `
      <div class="card">
          <div class="card-body">
              <h5 class="card-title">${recipe}</h5>
              <button onclick="removeRecipe('${recipe}')" class="btn btn-danger">Remove</button>
          </div>
      </div>
  `).join('');
  container.innerHTML = recipesList;
}

function removeRecipe(recipeName) {
    let savedRecipes = JSON.parse(localStorage.getItem('savedRecipes') || '[]');
    savedRecipes = savedRecipes.filter(recipe => recipe !== recipeName);
    localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
    displaySavedRecipes();
}
function changeWordsandredirect() {
  let bttn =document.getElementById('rec')
  if (bttn.innerHTML === "Save Recipe") {
      bttn.innerHTML = "Saved";
      bttn.classList.add('saved');  
  } else {
      bttn.innerHTML = "Save Recipe";
      bttn.classList.remove('saved');  
  }
}
function changeWordsandredirect(recipeName) {
localStorage.setItem('savedRecipe', recipeName);


let bttn = document.getElementById('rec');
bttn.innerHTML = "Saved";
bttn.classList.add('saved');


setTimeout(() => {
    window.location.href = 'book.html';
}, 2000);
}
function removeRecipe(recipeName) {
  let savedRecipes = JSON.parse(localStorage.getItem('savedRecipes') || '[]');
  savedRecipes = savedRecipes.filter(recipe => recipe !== recipeName);
  localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
  displaySavedRecipes();
}
function changeWordsandredirect() {
let buttn =document.getElementById('rcp')
if (buttn.innerHTML === "Save Recipe") {
    buttn.innerHTML = "Saved";
    buttn.classList.add('saved');  
} else {
    buttn.innerHTML = "Save Recipe";
    buttn.classList.remove('saved');  
}
}
function changeWordandredirect(recipeName) {
localStorage.setItem('savedRecipe', recipeName);


let bttn = document.getElementById('pmk');
bttn.innerHTML = "Saved";
bttn.classList.add('saved');


setTimeout(() => {
  window.location.href = 'book.html';
}, 2000);
}
function removeRecipe(recipeName) {
  let savedRecipes = JSON.parse(localStorage.getItem('savedRecipes') || '[]');
  savedRecipes = savedRecipes.filter(recipe => recipe !== recipeName);
  localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
  displaySavedRecipes();
}
function changeWordingandredirect(recipeName) {
  localStorage.setItem('savedRecipe', recipeName);
  
  
  let btton = document.getElementById('dmp');
  btton.innerHTML = "Saved";
  btton.classList.add('saved');
  
  
  setTimeout(() => {
    window.location.href = 'book.html';
  }, 2000);
  }
  function removeRecipe(recipeName) {
    let savedRecipes = JSON.parse(localStorage.getItem('savedRecipes') || '[]');
    savedRecipes = savedRecipes.filter(recipe => recipe !== recipeName);
    localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
    displaySavedRecipes();
  }
  
  function changeWordingsandredirect(recipeName) {
    localStorage.setItem('savedRecipe', recipeName);
    
    
    let bton = document.getElementById('snd');
    bton.innerHTML = "Saved";
    bton.classList.add('saved');
    
    
    setTimeout(() => {
      window.location.href = 'book.html';
    }, 2000);
    }
    function removeRecipe(recipeName) {
      let savedRecipes = JSON.parse(localStorage.getItem('savedRecipes') || '[]');
      savedRecipes = savedRecipes.filter(recipe => recipe !== recipeName);
      localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
      displaySavedRecipes();
    }
    function changeWordngsandredirect(recipeName) {
      localStorage.setItem('savedRecipe', recipeName);
      
      
      let butn = document.getElementById('pnk');
      butn.innerHTML = "Saved";
      butn.classList.add('saved');
      
      
      setTimeout(() => {
        window.location.href = 'book.html';
      }, 2000);
      }
      function removeRecipe(recipeName) {
        let savedRecipes = JSON.parse(localStorage.getItem('savedRecipes') || '[]');
        savedRecipes = savedRecipes.filter(recipe => recipe !== recipeName);
        localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
        displaySavedRecipes();
      }
      
    
  