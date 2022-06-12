function editHeader() {
  var elements = `
  <a href="index.html" class="navbarLink" style="float:left">home</a> <!--Left-->

  <!--All of the right-->
  <a href="whale.html" class="navbarLink">whales</a>
  <a href="football_field.html" class="navbarLink">football fields</a>
  <a href="banana.html" class="navbarLink">bananas</a>
  <a href="washing_machine.html" class="navbarLink">washing machines</a>
  <a href="bald_eagle.html" class="navbarLink">bald eagles</a>
  `;

  document.getElementById("header").innerHTML = elements;
}
function editFooter() {
  var elements = `

  `;

  document.getElementById("footer").innerHTML = elements;
}

window.onload = function start() {
  editHeader();
  editFooter();
};
