let sectionChar = document.getElementById('seccion');

scouts.forEach(scout => {
    let card = document.createElement('div');
    card.className = 'card'
    card.style.width = '18rem'
    // card.style.height = '36rem'
    card.innerHTML = `<img src="${scout.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h4 class="card-title">${scout.scoutName}</h4>
      <h5 class="">${scout.japaneseName}</h5>  
      <h5 class="">${scout.englishName}</h5>
      <p class="card-text">Affiliation: ${scout.affiliation}</p>
      <p class="card-text">Cat Guardian: ${scout.guardianCat? "Yes":"No"}</p>
      <a href="#" class="btn btn-primary">Gallery</a>
    </div>`
    sectionChar.appendChild(card)
})  


