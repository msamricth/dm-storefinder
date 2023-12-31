
const sidebar = document.querySelector(".sidebar");

const app = document.getElementById('app');
var isAppLoaded;
const observer = new MutationObserver((mutations) => {
  if (mutations[0].attributeName === 'class') { 
    isAppLoaded = app.classList.contains('app2-completed');
        if(isAppLoaded){ 

            const MBinput = document.querySelector(".mapboxgl-ctrl-geocoder--input");
            const MBinputContainer = document.querySelector(".mapboxgl-ctrl-geocoder.mapboxgl-ctrl");
            const closeBTN = document.querySelector(".button.mapboxgl-ctrl-geocoder--button");
            if(MBinput){
              MBinput.addEventListener("input", (event) => {
                event.stopPropagation();
                if(MBinputContainer.classList.contains('active')) {
                  MBinputContainer.classList.remove('active');
                }
                MBinputContainer.classList.add('active');
              });
              MBinput.addEventListener("click", (event) => {
                event.stopPropagation();
                if(MBinputContainer.classList.contains('active')) {
                  MBinputContainer.classList.remove('active');
                }
                MBinputContainer.classList.add('active');
              });
              document.addEventListener("click", (event) => {
                if(MBinputContainer.classList.contains('active')) {
                  MBinputContainer.classList.remove('active');
                }
              });
              if(closeBTN){
                closeBTN.addEventListener("click", (event) => {
                    MBinputContainer.classList.remove('active');
                });
              }
              MBinput.addEventListener("input", (e) => {
                if (MBinput.value == null || MBinput.value == "") {
                  sidebar.classList.remove("search-suggestions-displayed");
                } else {
                  sidebar.classList.add("search-suggestions-displayed");
                }
              });
            }
            const suggestions = document.querySelectorAll(".suggestions a");
            suggestions.forEach(element => {
              element.addEventListener("click", (evt) => {
                sidebar.classList.remove("search-suggestions-displayed");
              });
              
            });
            document.addEventListener("click", (evt) => {
              const flyoutEl = MBinput;
              let targetEl = evt.target; // clicked element      
              do {
                if(targetEl == flyoutEl) {
                  // This is a click inside, does nothing, just return.
                  if (flyoutEl.value == null || flyoutEl.value == "") {
                    sidebar.classList.remove("search-suggestions-displayed");
                  } else {
                    sidebar.classList.add("search-suggestions-displayed");
                  }
                  return;
                }
                // Go up the DOM
                targetEl = targetEl.parentNode;
              } while (targetEl);
              // This is a click outside.
              sidebar.classList.remove("search-suggestions-displayed");
            });




        }
    }
});
observer.observe(app, { attributes: true });
