let header = document.querySelector(".header");
let menuBtn = document.querySelector("#menu-btn");

menuBtn.onclick = () => {
    header.classList.toggle("active");
    menuBtn.classList.toggle("fa-times");
    document.body.classList.toggle("active");
}

window.onscroll = () => {
    if(window.innerWidth < 1200) {
        header.classList.remove("active");
        menuBtn.classList.remove("fa-times");
        document.body.classList.remove("active");
    }
}

let productsPreviewContainer = document.querySelector(".products-preview-container");
let productPreview = productsPreviewContainer.querySelectorAll(".product-preview")
document.querySelectorAll(".products .slide .btn").forEach(detailBtn => {
    detailBtn.onclick = () => {
        productsPreviewContainer.style.display = "block";
        let name = detailBtn.getAttribute('data-product');
            productPreview.forEach(preview =>{
            let target = preview.getAttribute('data-target');
            if(name == target){
            preview.style.display = 'flex';
      };
    });
    }
});

document.querySelectorAll(".products-preview-container .product-preview .fa-times")
   .forEach(close => {
        close.onclick = () => {
            productsPreviewContainer.style.display = "none";
            productPreview.forEach(closePreview => {
                closePreview.style.display = 'none';
            });
        };
   });


var swiper = new Swiper(".products-slider", {
    loop:true,
    spaceBetween: 20,
    grabCursor:true,
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper(".reviews-slider", {
    loop:true,
    spaceBetween: 20,
    grabCursor:true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });