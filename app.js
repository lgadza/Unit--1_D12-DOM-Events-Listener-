/* EXERCISE 1
     Write a function for changing the title of the document in something else.
    */

const changeTitle = function (newTitle) {
  //
  let title = document.querySelector("h1");
  title.innerText = newTitle;
};

// document.querySelector("h1").onmousemove = function () {
//   let title = document.querySelector("h1");
//   title.innerText = "My name is Louis Gadza";
//   //   title.style = "color:coral";
// };
/* EXERCISE 2
     Write a function for changing the class of the title of the page in "myHeading".
    */

// const addClassToTitle = function () {
//   //
// };
document.querySelector("h1").onclick = function () {
  let addClassToTitle = document.querySelector("h1");
  addClassToTitle.classList.add("myHeading");
};
/* EXERCISE 3
     Write a function for changing the text of only the p which are children of a div.
    */

// const changePcontent = function () {
//   //
// };
document.querySelectorAll("div>p").onclick = function () {
  let Pcontent = document.getElementsByTagName("p");
  Pcontent.innerText = "This is the new text";
  //   let div = document.createElement("div");
  //   div.innerHTML = `<button>Change text</button>`;
  //   button.appendChild("h1");
  //   changePcontent.innerText = "This is the new text";
};
// changePcontent();
/* EXERCISE 4
     Write a function for changing the href property of every link to https://www.google.com
    */

// const changeUrls = function () {
//   //
// };
document.querySelector("a").onmouseover = function () {
  let linkChange = document.querySelector("a");
  linkChange.href = "https://www.google.com";
  let linkName = document.querySelector("a");
  linkName.innerText = "This link NOW GOES to google";
  linkChange.style = "color:coral";
};
// /* EXERCISE 5
//      Write a function for adding a new list item in the second unordered list.
//     */

// const addToTheSecond = function (content) {
//   //
// };
document.getElementById("myBtn").onclick = function () {
  const ul = document.querySelector("#secondList");
  const newItem = document.createElement("li");
  newItem.appendChild(document.createTextNode("4th"));
  ul.appendChild(newItem);
};

// /* EXERCISE 6
//      Write a function for adding a second paragraph to the first div.
//     */

// const addParagraph = function (content) {
//   //
// };
document.getElementById("secondP").onclick = function () {
  let firstDiv = document.querySelector("div");
  let p = document.createElement("p");
  p.appendChild(
    document.createTextNode(
      "This is the new Paragraph. Thank you for adding me :)"
    )
  );
  firstDiv.appendChild(p);
};

// /* EXERCISE 7
//      Write a function for making the first unordered list disappear.
//     */

// const firstUlDisappear = function () {
//   //
// };
document.getElementById("firstList").onclick = function () {
  let items = document.getElementById("firstList");
  items.hidden = true;
  console.log(items);
};

// /* EXERCISE 8
//      Write a function for making the background of every unordered list green.
//     */

// const paintItGreen = function () {
//   //
// };
document.getElementById("change").onclick = function () {
  let greenBackground = document.getElementsByTagName("ul");
  for (let i = 0; i < greenBackground.length; i++) {
    greenBackground[i].style.backgroundColor = "green";
  }
};
// console.log(greenBackground);
/* EXERCISE 9
      Make the heading of the page change color every time the user clicks on it.
     */

const makeItClickable = function () {
  //
  const h1 = document.getElementsByName("h1");
  let index = 0;
  const colors = ["salmon", "coral", "blue", "red"];
  h1.addEventListener("click", function onClick() {
    h1.style.backgroundColor = colors[index];
    h1.style.color = "white";
    index = index >= colors.length - 1 ? 0 : index + 1;
  });
};

// /* EXERCISE 10
//      Change the footer text with something else when the user clicks on it.
//     */

// const changeFooterText = function () {
//   //
// };
document.querySelector(".footer>h2").onclick = function () {
  let footer = document.querySelector(".footer>h2");
  footer.innerText = "I've saved the page on my computer";
};

/* EXERCISE 11
     Attach an event listener to the input field in the page that changes the text of the page's subtitle
    */

window.onload = function () {
  //
  let changeSubtitle = document.querySelector("#input-field");
  changeSubtitle.addEventListener("change", function change(e) {
    let subtitle = document.querySelector("div>h2");
    subtitle.textContent = e.target.value;
  });
};

/* EXERCISE 13
     Use HTML5 tags to properly provide semantic meaning to the different portions of the page.
    */

/* ### EXTRA ###  EXERCISE 14
     Create an input of type "color" and use it to change the color of the subtitle
    */
let color;
const defaultColor = "#0000ff";
window.addEventListener(
  "load",
  function startup() {
    color = document.querySelector("#color");
    color.value = defaultColor;
    color.addEventListener("input", function updateFirst(event) {
      const subtitle = document.querySelector("div h2");
      if (subtitle) {
        subtitle.style.color = event.target.value;
      }
    });
    color.addEventListener("change", function updateAll(event) {
      document.querySelectorAll("div h2").forEach((subtitle) => {
        subtitle.style.color = event.target.value;
      });
    });
    color.select();
  },
  false
);
