window.addEventListener("scroll", setScrollVar)
window.addEventListener("resize", setScrollVar)

function setScrollVar() {
  var airesearch = document.querySelector(".airesearch");
  var webdew = document.querySelector(".webdew");
  
  var percentage_airesearch = getSectionPercent(airesearch);
  var percentage_webdew = getSectionPercent(webdew);
  
  if(percentage_airesearch > 0 && percentage_airesearch < 200) {
    //console.log(percentage_airesearch)
    var kayan_yazi = document.querySelector(".kayan-yazi");
    //kayan_yazi.style.transform = "translateX(" + percentage_airesearch + "%)";
    var trans = 5 * percentage_airesearch - 100;

    // when truns is -100<trans<0, it will change the position of the text

    

    console.log(trans);
    if(trans > -100 && trans < 0) {
      kayan_yazi.style.transform = "translateX(" + trans + "%)";  
    }
  }


  //console.log(percentage_webdew)
}

function getSectionPercent(section) {
  var sectionTop = section.getBoundingClientRect().top
  var percentage = ((window.innerHeight - sectionTop) / window.innerHeight) * 100
  return percentage
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

