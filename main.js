fetch('https://6560acc483aba11d99d151a5.mockapi.io/api/movies')
	.then(response => response.json())
	.then(data => {
		data.forEach(movie => {
			

			let box = document.querySelector('.quti')
			box.innerHTML += `
			 <div class="row">
    <div class="col">
      <div class="card">
        <div class="card-image">
          <img src='${movie.movieImg}'/>
          <span class="card-title">${movie.movieName}</span>
        </div>
        <div class="card-content">
          <h6>${movie.starring}</h6>
		  <p>${movie.releasedDate}</p>
        </div>
        <div class="card-action">
          <a href=${movie.trailer}>Watch trailer</a>
        </div>
      </div>
    </div>
  </div>
			`
		})
	})
