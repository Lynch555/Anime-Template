const bgElements = () => {
  const elements = document.querySelectorAll('.set-bg');
  console.log(elements);
  // Самая современная запись перебора массива на каждом итерируемом элементе
  elements.forEach((elem) => {
    elem.style.backgroundImage = `url(${elem.dataset.setbg})`;
  });

  // for (let i = 0; i < elements.length; i++) {
  //   const src = elements[i].dataset.setbg;

  //   elements[i].style.backgroundImage = 'url(' + src + ')';
  //   elements[i].style.backgroundImage = `url(${src})`;
  // }


};

bgElements();