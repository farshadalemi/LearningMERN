
import $ from "jquery";

$(document).ready(function () {
  $("wowButton").click(function () {
    let calue = $('#wowInput').val();
    const inPut = document.getElementById("wowInput");
    const wowButton = document.getElementById("wowButton");
    const outPut = document.getElementById("outPut1");

    function wowFunc(number) {
      let wowResult = "W";
      for (i = 0; i < number; i++) {
        wowResult = wowResult + "o";
      }
      wowResult += "W!";
      return wowResult;
    }
  });
});
