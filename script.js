window.addEventListener("scroll", setScrollVar)
window.addEventListener("resize", setScrollVar)

function setScrollVar() {
  const htmlElement = document.documentElement
  const percentOfScreenHeightScrolled = htmlElement.scrollTop / htmlElement.clientHeight
  // console.log(htmlElement.scrollTop, Math.min(percentOfScreenHeightScrolled * 100, 100))
  // htmlElement.style.setProperty("--scroll",Math.min(percentOfScreenHeightScrolled * 100, 100))

  var airesearch = document.querySelector(".airesearch");
  var airesearch_top = airesearch.getBoundingClientRect().top;
  var airesearch_height = airesearch.getBoundingClientRect().height;
  var kayan_yazi = document.querySelector(".kayan-yazi");
  console.log(airesearch_top, airesearch_height)
  if(airesearch_top < airesearch_height/2 && airesearch_top > -airesearch_height/2){
    console.log("girdi")
    kayan_yazi.classList.add('active');
  }

}

setScrollVar()

const observer = new IntersectionObserver(entries => {
  for (let i = entries.length - 1; i >= 0; i--) {
    const entry = entries[i]
    if (entry.isIntersecting) {
      document.querySelectorAll("[data-img]").forEach(img => {
        img.classList.remove("show")
      })
      const img = document.querySelector(entry.target.dataset.imgToShow)
      img?.classList.add("show")
      break
    }
  }
})

document.querySelectorAll("[data-img-to-show]").forEach(section => {
  observer.observe(section)
})

const ayarla = function() {
    let githubDescription = document.querySelector(".github-description");
    let githubPhoto = document.querySelector(".github-photo");
    fetch("https://api.github.com/users/ensargx")
        .then(response => response.json())
        .then(data => {
            githubDescription.innerHTML = data.bio
            githubPhoto.src = data.avatar_url
        })
        .catch(error => {
            console.error(error)
        })
}

window.addEventListener("load", (event) => {
    ayarla()
  });

