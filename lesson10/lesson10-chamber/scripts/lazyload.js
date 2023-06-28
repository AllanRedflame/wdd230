const images = document.querySelectorAll(".lazyload");

function preloadImage(img) {
  const src = img.getAttribute("data-src");
  if(!src) {
    return;
  }


  img.src = src;
}

const imgOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px 10px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    }
    else {
      preloadImage(entry.target);
      imgObserver.unobserve(entry.target);
    }
  })
}, imgOptions);


images.forEach(image => {
  imgObserver.observe(image);
})





function preloadImageSrcset(img) {
  const srcset = img.getAttribute("data-src");
  if(!srcset) {
    return;
  }


  img.srcset = srcset;
}

const imgOptionSsrcset = {
    threshold: 1,

    rootMargin: "200px 0px 250px 0px"
};

const imgObserverSrcset = new IntersectionObserver((entries, imgObserverSrcset) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    }
    else {
      preloadImageSrcset(entry.target);
      imgObserverSrcset.unobserve(entry.target);
    }
  })
}, imgOptionSsrcset);


images.forEach(image => {
  imgObserverSrcset.observe(image);
})