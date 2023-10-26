

    window.onload = () => {
        getOriginals ();
        getTrendingNow ();
        getTopRated ();
    }

    function fetchMovies (url, dom_element, path_type) {
        fetch(url)
        .then(response => {
            if(response.ok) {
                return response.json();
            }else {
                throw new Error('Went something wrong');
            }
        }).then(data => {
            showMovies(data, dom_element, path_type)
        }).catch(error => {
            console.log(error);
        })
    }

    fetchMovies('https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213')

    showMovies = (movies, dom_element, path_type) => {
        // Create a variable that grab an id or class
        var moviesEl = document.querySelector(dom_element);
        // Loop through movies object
        for(let movie of movies.results) {
            // Within loop create An img element
            let imageElement = document.createElement('img');
            // Set attribute
            imageElement.setAttribute('data-id', movie.id);

            // Set Source
            imageElement.src = `https://image.tmdb.org/t/p/original${movie[path_type]}`;

            // Apppend the imageElement to the dom_element selected
            moviesEl.appendChild(imageElement);
        }
    }

    // fetchMovies('https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213', 'original_movies', 'poster_path')

    function getOriginals () {
        let url = 'https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213';

        fetchMovies(url, '.original__movies', 'poster_path');
    }

    function getTrendingNow () {

        let url =  'https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045';

        fetchMovies(url, '#trending', 'backdrop_path');
    }

    function getTopRated  () {

        let url =  'https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1';

        fetchMovies(url, '#top_rated', 'backdrop_path')
    }

        // Project is all done in above part, after that just prictice
        // Movies trailrs
    // async function getMovieTrailer(id) {
    //     var url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US`
    //     return await fetch(url).then(response => {
    //     if (response.ok) {
    //         return response.json()
    //     } else {
    //         throw new Error('something went wrong')
    //     }
    //     })
    // }

    // // Set trailer

    // const setTrailer = trailers => {
    //     const iframe = document.getElementById('movieTrailer')
    //     const movieNotFound = document.querySelector('.movieNotFound')
    //     if (trailers.length > 0) {
    //       movieNotFound.classList.add('d-none')
    //       iframe.classList.remove('d-none')
    //       iframe.src = `https://www.youtube.com/embed/${trailers[0].key}`
    //     } else {
    //       iframe.classList.add('d-none')
    //       movieNotFound.classList.remove('d-none')
    //     }
    //   }

    // //   Handling selection of movies

    // const handleMovieSelection = e => {
    //     const id = e.target.getAttribute('data-id')
    //     const iframe = document.getElementById('movieTrailer')
    //     // here we need the id of the movie
    //     getMovieTrailer(id).then(data => {
    //       const results = data.results
    //       const youtubeTrailers = results.filter(result => {
    //         if (result.site == 'YouTube' && result.type == 'Trailer') {
    //           return true
    //         } else {
    //           return false
    //         }
    //       })
    //       setTrailer(youtubeTrailers)
    //     })
      
    //     // open modal
    //     $('#trailerModal').modal('show')
    //     // we need to call the api with the ID
    //   }
      