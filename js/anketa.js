$(document).ready(function () {
  $("#submit-btn").click(function () {
    let scores = {
      pitanje1: parseFloat($("#pitanje1").val()),
      pitanje2: parseFloat($("#pitanje2").val()),
      pitanje3: parseFloat($("#pitanje3").val()),
      pitanje4: parseFloat($("#pitanje4").val()),
      pitanje5: parseFloat($("#pitanje5").val()),
    };

    // Израчунати просечну оцену
    let total = Object.values(scores).reduce((sum, score) => sum + score, 0);
    let average = total / Object.keys(scores).length;

    $("#average-score").text(average.toFixed(2));

    // Функција за одређивање боје на основу просечне оцене
    function getColor(score) {
      if (score <= 2.5) {
        return "red";
      } else if (score <= 3.5) {
        return "orange";
      } else {
        return "green";
      }
    }

    // Приказ статистике
    let color = getColor(average);
    $("#stat .score")
      .text(average.toFixed(2))
      .parent()
      .removeClass("red orange green")
      .addClass(color);
  });
});
