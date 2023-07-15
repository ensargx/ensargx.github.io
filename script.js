window.addEventListener("scroll", setScrollVar)
window.addEventListener("resize", setScrollVar)

function setScrollVar() {
  const htmlElement = document.documentElement
  const percentOfScreenHeightScrolled = htmlElement.scrollTop / htmlElement.clientHeight
  // console.log(htmlElement.scrollTop, Math.min(percentOfScreenHeightScrolled * 100, 100))
  // htmlElement.style.setProperty("--scroll",Math.min(percentOfScreenHeightScrolled * 100, 100))

  var kayan_yazi = document.querySelector(".kayan-yazi");
  var kayan_yazi_top = kayan_yazi.getBoundingClientRect().top;
  var kayan_yazi_height = kayan_yazi.offsetHeight;
  console.log(kayan_yazi_top, kayan_yazi_height)
  if (kayan_yazi_top < 0 && kayan_yazi_top > -kayan_yazi_height) {
    var percentage = (-kayan_yazi_top) / kayan_yazi_height;
    console.log(percentage * 100)
    if(percentage*100 < 20) {
      kayan_yazi.style.opacity = 1;
    }
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

