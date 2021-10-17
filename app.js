const forwardBtn = document.getElementById('forwardBtn');
const backBtn = document.getElementById('backBtn');
const images = document.querySelectorAll('.image');
const selectors = document.querySelectorAll('.selectors');

const numberOfImages = images.length;
let imageIndex = 1;
let translateX = 0;

forwardBtn.addEventListener('click', () => {
  if (imageIndex !== numberOfImages) {
    imageIndex += 1;
    translateX -= 600;
    images.forEach((image) => {
      image.style.transform = `translateX(${translateX}px)`;
    });
    selectedOperator();
  } else {
    imageIndex = 1;
    translateX = 0;
    images.forEach((image) => {
      image.style.transform = `translateX(${translateX}px)`;
    });
    selectedOperator();
  }
});

backBtn.addEventListener('click', () => {
  if (imageIndex !== 1) {
    imageIndex -= 1;
    translateX += 600;
    images.forEach((image) => {
      image.style.transform = `translateX(${translateX}px)`;
    });
    selectedOperator();
  } else {
    imageIndex = numberOfImages;
    translateX = -600 * (numberOfImages - 1);
    images.forEach((image) => {
      image.style.transform = `translateX(${translateX}px)`;
    });
    selectedOperator();
  }
});

selectors.forEach((selector, index) => {
  selector.addEventListener('click', () => {
    translateX = index * -600;
    imageIndex = index + 1;
    images.forEach((image) => {
      image.style.transform = `translateX(${translateX}px)`;
    });
    selectedOperator();
  });
});

function selectedOperator() {
  selectors.forEach((select, index) => {
    select.classList.remove('selected');
    if (imageIndex === (index + 1)) {
      select.classList.add('selected');
    }
  });
}
