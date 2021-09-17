import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  /**/
    const ul = document.querySelector("ul");
  const numbersArray = [1, 3, 4, 5, 6, 7];
  const isEven = (n) => n % 2 === 0;
  const filteredArray = numbersArray.filter(isEven, numbersArray);

    for (var i = 0; i < filteredArray.length; i++) {
        var num = filteredArray[i];
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(num));
        ul.appendChild(li);
    }
});
