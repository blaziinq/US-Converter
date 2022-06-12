function whales() {
  var option = document.getElementById("metric").value;
  var textInput = document.getElementById("textInput").value;
  var metersValue = parseFloat(textInput) * 24;
  if (option == "m") {
    document.getElementById("answer").innerHTML =
      textInput + " whales is " + metersValue + option + ".";
  } else if (option == "cm") {
    document.getElementById("answer").innerHTML =
      textInput + " whales is " + metersValue * 100 + option + ".";
  } else if (option == "mm") {
    document.getElementById("answer").innerHTML =
      textInput + " whales is " + metersValue * 1000 + option + ".";
  } else if (option == "km") {
    document.getElementById("answer").innerHTML =
      textInput + " whales is " + metersValue / 1000 + option + ".";
  } else {
    document.getElementById("answer").innerHTML = "ok, but how?";
  }
}

function washing_machines() {
  var option = document.getElementById("metric").value;
  var textInput = document.getElementById("textInput").value;
  var metersValue = parseFloat(textInput) * 0.6;
  if (option == "m") {
    document.getElementById("answer").innerHTML =
      textInput + " washing machines are " + metersValue + option + " wide.";
  } else if (option == "cm") {
    document.getElementById("answer").innerHTML =
      textInput +
      " washing machines are " +
      metersValue * 100 +
      option +
      " wide.";
  } else if (option == "mm") {
    document.getElementById("answer").innerHTML =
      textInput +
      " washing machines are " +
      metersValue * 1000 +
      option +
      " wide.";
  } else if (option == "km") {
    document.getElementById("answer").innerHTML =
      textInput +
      " washing machines are " +
      metersValue / 1000 +
      option +
      " wide.";
  } else {
    document.getElementById("answer").innerHTML = "ok, but how?";
  }
}

function bald_eagles() {
  var option = document.getElementById("metric").value;
  var textInput = document.getElementById("textInput").value;
  var metersValue = parseFloat(textInput) * 2;
  if (option == "m") {
    document.getElementById("answer").innerHTML =
      textInput + " bald eagles are " + metersValue + option + " wide.";
  } else if (option == "cm") {
    document.getElementById("answer").innerHTML =
      textInput + " bald eagles are " + metersValue * 100 + option + " wide.";
  } else if (option == "mm") {
    document.getElementById("answer").innerHTML =
      textInput + " bald eagles are " + metersValue * 1000 + option + " wide.";
  } else if (option == "km") {
    document.getElementById("answer").innerHTML =
      textInput + " bald eagles are " + metersValue / 1000 + option + " wide.";
  } else {
    document.getElementById("answer").innerHTML = "ok, but how?";
  }
}

function bananas() {
  var option = document.getElementById("metric").value;
  var textInput = document.getElementById("textInput").value;
  var metersValue = parseFloat(textInput) * 0.13;
  if (option == "m") {
    document.getElementById("answer").innerHTML =
      textInput + " bananas are " + metersValue + option + " long.";
  } else if (option == "cm") {
    document.getElementById("answer").innerHTML =
      textInput + " bananas are " + metersValue * 100 + option + " long.";
  } else if (option == "mm") {
    document.getElementById("answer").innerHTML =
      textInput + " bananas are " + metersValue * 1000 + option + " long.";
  } else if (option == "km") {
    document.getElementById("answer").innerHTML =
      textInput + " bananas are " + metersValue / 1000 + option + " long.";
  } else {
    document.getElementById("answer").innerHTML = "ok, but how?";
  }
}

function football_fields() {
  var option = document.getElementById("metric").value;
  var textInput = document.getElementById("textInput").value;
  var metersValue = parseFloat(textInput) * 109.728;
  if (option == "m") {
    document.getElementById("answer").innerHTML =
      textInput + " football fields are " + metersValue + option + " long.";
  } else if (option == "cm") {
    document.getElementById("answer").innerHTML =
      textInput +
      " football fields are " +
      metersValue * 100 +
      option +
      " long.";
  } else if (option == "mm") {
    document.getElementById("answer").innerHTML =
      textInput +
      " football fields are " +
      metersValue * 1000 +
      option +
      " long.";
  } else if (option == "km") {
    document.getElementById("answer").innerHTML =
      textInput +
      " football fields are " +
      metersValue / 1000 +
      option +
      " long.";
  } else {
    document.getElementById("answer").innerHTML = "ok, but how?";
  }
}
