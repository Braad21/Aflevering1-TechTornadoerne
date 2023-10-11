document.addEventListener("DOMContentLoaded", function() { //når hele HTML-dokumentet (websiden) er færdig med at blive indlæst i browseren, udførers en funktion (en blok med kode)
    const buttonsContainer = document.getElementById("buttons"); //opretter en variabel med navnet "buttonsContainer" og gemmer en reference til et HTML-element i variablen
    const albumContainer = document.getElementById("albumContainer");
  
    // Load the JSON data (albums)
    fetch("musik.json") //sender anmodning om at hente indhold
        .then(response => response.json()) 
        .then(albums => { 
  
            //Opret en funktion til at vise albums udefra genre
            function displayAlbumsByGenre(genre) { //funktion kaldet "displayAlbumsByGenre" oprettes, og den tager en parameter kaldet "genre"
                const filteredAlbums = albums.filter(album => album.genre === genre); //inde i funktionen bruges en metode kaldet ".filter()" på listen af albums, hver albums "genre" sammenlignes med den genre, som vi har fået som parameter (genre), hvis de er ens bevares albummet i "filteredAlbums" og ellers bliver det fjernet
                displayAlbums(filteredAlbums);
            }
  
            //Opret en function til at vise albums
            function displayAlbums(albumsToDisplay) { 
              albumContainer.innerHTML = ""; //alt eksisterende indhold ryddes i containeren (ingen albums vises før vi tilføjer dem)
              if (albumsToDisplay.length === 0) { //sammenligner om de to ting til venstre og højre for operatoren er ens både i værdi og datatype - undersøger om der er 0 elementer i "albumsToDisplay"
                  albumContainer.innerHTML = "No albums to display."; //hvis der er 0 elementer vil betingelsen i if-sætningen være sand og koden inde i {}-blokken udføres
                  return; //afslutter funktionen og returnere kontrol og eventuelt data tilabge til det sted, hvor funktionen blev kaldt fra
              }
          
            //opretter en for-loop for at vise albumoplysninger
              for (let i = 0; i < albumsToDisplay.length; i++) { //opretter variablen 'i' og starter en tæller ved 0 - i++ æger værdien af 'i' med 1 og sikrer at vi bevæger os fremad gennem arrayet
                  const album = albumsToDisplay[i]; //henter det aktuelle album fra listen ved at bruge tælleren 'i'
                  const albumDiv = document.createElement("div"); //opretter et nyt HTML-element med navnet "albumDiv"
                  albumDiv.innerHTML = "<p>" + //innerHTML bruges til at insætte HTML-indhold i "albumDiv"
                      "<strong>Album: </strong>" + album.albumName + "<br>" +
                      "<strong>Artist: </strong>" + album.artistName + "<br>" +
                      "<strong>Genre: </strong>" + album.genre +
                      "</p>";
                  albumContainer.appendChild(albumDiv); //"albumDiv" tilføjes til albumContainer på websiden (hvert album bliver vist som en separat boks på websiden)
              }
          }        
  
            //Opret event listeners for buttons
            document.getElementById("showAll").addEventListener("click", () => { //når knappen med id'en "showAll" klikkes uføres handlingen indenfor {}-blokken
                displayAlbums(albums); //kalder funktionen med navnet "displayAlbums" og giver den listen af albums, som hedder "albums"
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
                albumContainer.innerHTML = "No albums to display.";
            });
  
  
          })
          //Magi - det taler vi om senere!!
          async function fetchContent(url) {
              let request = await fetch(url);
              let json = await request.json();
              return json;
              };
          })