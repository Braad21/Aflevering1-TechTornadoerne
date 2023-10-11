document.addEventListener("DOMContentLoaded", function() { 
    const buttonsContainer = document.getElementById("buttons");
    const albumContainer = document.getElementById("albumContainer");
  
    // Load the JSON data (albums)
    fetch("musik.json")
        .then(response => response.json()) 
        .then(albums => { 
  
            //Opret en funktion til at vise albums udefra genre
            function displayAlbumsByGenre(genre) {
                const filteredAlbums = albums.filter(album => album.genre === genre);
                displayAlbums(filteredAlbums);
            }
  
            //Opret en function til at vise albums
            function displayAlbums(albumsToDisplay) { 
              albumContainer.innerHTML = ""; 
              if (albumsToDisplay.length === 0) { 
                  albumContainer.innerHTML = "Ingen album at vise";
                  return; 
              }
          
            //opretter en for-loop for at vise albumoplysninger
              for (let i = 0; i < albumsToDisplay.length; i++) { 
                  const album = albumsToDisplay[i]; 
                  const albumDiv = document.createElement("div"); 
                  albumDiv.innerHTML = "<p>" + 
                      "<strong>Album: </strong>" + album.albumName + "<br>" +
                      "<strong>Artist: </strong>" + album.artistName + "<br>" +
                      "<strong>Genre: </strong>" + album.genre + "<br>" +
                      "<strong>Production Year: </strong>" + album.productionYear +
                      "</p>";
                  albumContainer.appendChild(albumDiv); 
              }
          }        
  
            //Opret event listeners for buttons
            document.getElementById("showAll").addEventListener("click", () => { 
                displayAlbums(albums); 
            });
  
            document.getElementById("genre1").addEventListener("click", () => {
                displayAlbumsByGenre("Rock/Classic Rock");
            });
  
            document.getElementById("genre2").addEventListener("click", () => {
                displayAlbumsByGenre("Alternative/Nu Metal");
            });
  
            document.getElementById("genre3").addEventListener("click", () => {
                displayAlbumsByGenre("Pop/Pop Rock");
            });
  
            document.getElementById("showNone").addEventListener("click", () => {
                albumContainer.innerHTML = "Ingen album at vise";
            });
  
  
          })
          //Magi - det taler vi om senere!!
          async function fetchContent(url) {
              let request = await fetch(url);
              let json = await request.json();
              return json;
              };
          })