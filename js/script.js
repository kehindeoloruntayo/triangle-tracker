$(document).ready(function () {
    $("#check").click(function () {
      let side1 = parseFloat($("#side1").val());
      let side2 = parseFloat($("#side2").val());
      let side3 = parseFloat($("#side3").val());
  
      if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
          $("#result").text("Please enter all three sides.");
          return;
      }
  
      if (side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2) {
        window.location.href = './notatriangle.html';
        return;
      }
  
      if (side1 === side2 && side2 === side3) {
        window.location.href = './equilateral.html';
        return;
      }
  
      if (side1 === side2 || side2 === side3 || side1 === side3) {
        window.location.href = './isosceles.html';
        return;
      }
  
      window.location.href = './scalene.html';
    });
  
    $(".clickable").click(function() {
      $(".definition").toggle(1000).addClass('back');
    });
  });