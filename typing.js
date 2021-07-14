const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settingsBtn = document.getElementById("settings-btn");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const difficultySelect = document.getElementById("difficulty");

// List of words for game
const words = [
  "appear",
  "sigh",
  "tense",
  "airplane",
  "ball",
  "pies",
  "juice",
  "warlike",
  "bad",
  "north",
  "dependent",
  "steer",
  "silver",
  "highfalutin",
  "superficial",
  "quince",
  "eight",
  "feeble",
  "admit",
  "drag",
  "loving",
  "frontend",
  "backend",
  "development",
  "fullstack",
  "adore",
  "remember",
  "define",
  "quality",
  "framework",
  "country",
  "family",
  "variable",
  "examinition",
  "beauty",
  "smile",
  "madrid",
  "barcelona",
];

//Init word
let randomWord;
// Init score
let score = 0;
// Init time
let time = 10;

let difficulty =
  localStorage.getItem("difficulty") !== null
    ? localStorage.getItem("difficulty")
    : "medium";
// Focus on the text start
difficultySelect.value = difficulty;
text.focus();

//Start counting down
const timeInterVal = setInterval(updateTime, 1000);

// Generate RandomWord
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function addWordDOM() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}
addWordDOM();

//updateScore
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}
function updateTime() {
  time--;
  timeEl.innerHTML = time + " s";
  if (time === 0) {
    clearInterval(timeInterVal);
    //end game
    gameOver();
  }
}
//game function
function gameOver() {
  endgameEl.innerHTML = `
     <h1> Time run out </h1>
     <p> Your final score is ${score}</p>
     <button onclick="window.location.reload()">Reload</button>
    `;
  endgameEl.style.display = "flex";
}

//EventListener
text.addEventListener("input", (event) => {
  const insertedText = event.target.value;
  if (insertedText.trim() === randomWord) {
    addWordDOM();
    updateScore();
    //clear
    event.target.value = "";
    if (difficulty === "hard") {
      time += 2;
    } else if (difficulty === "medium") {
      time += 4;
    } else {
      time += 6;
    }
    updateScore();
  }
});
// Settings Btn
settingsBtn.addEventListener("click", () => {
  settings.classList.toggle("hide");
});

//Settings select

settingsForm.addEventListener("change", (event) => {
  window.location.reload();
  difficulty = event.target.value;
  localStorage.setItem("difficulty", difficulty);
});

DesignTotalAmount = function () {
  var $self_d = this;
  $self_d.params;

  $self_d.initU_d = function (param) {
    $self_d.params = {
      //saveActionUrl_d: param.saveActionUrl,
      //prepareUrl_d: param.prepareUrl,
      headerTitle_d: param.headerTitle,
      tabName_d: param.tabName,
      parent_div_d: param.parent_div,
      //columns_d: param.columns,
      values_d: param.values,
      //editable_d: param.editable,
      //objectListName_d: param.objectListName,
      //responseJsonObjName_d: param.responseJsonObjName,
      //itemRows_d: [],
      parentId_d: param.parentId,
    };

    var tableElements = {};
    var tableElements_percent = {};
    var tableElements_percent_res = {};

    tableElements["id"] = $('<label style="width: 120px;"/>');
    tableElements["warp_yarn_total_amount"] = $(
      '<input date required style="width: 100px;"type="text">'
    );
    tableElements["weave_amount"] = $(
      '<input date required style="width: 100px;"type="text">'
    );
    tableElements["weft_yarn_total_amount"] = $(
      '<input date required style="width: 100px;"type="text">'
    );
    tableElements["warp_circle_cost"] = $(
      '<input date required style="width: 100px;"type="text">'
    );
    tableElements["weaving_cost"] = $(
      '<input date required style="width: 100px;"type="text">'
    );
    tableElements["cutting_cost"] = $(
      '<input date required style="width: 100px;"type="text">'
    );
    tableElements["dyeing_cost"] = $(
      '<input date required style="width: 100px;"type="text">'
    );
    tableElements["dyeing_waste"] = $(
      '<input date required style="width: 100px;"type="text">'
    );
    tableElements["printing_cost"] = $(
      '<input date required style="width: 100px;"type="text">'
    );
    tableElements["embroidery_cost"] = $(
      '<input date required style="width: 100px;"type="text">'
    );
    tableElements["cornellian_cost"] = $(
      '<input date required style="width: 100px;"type="text">'
    );
    tableElements["lead_cost"] = $(
      '<input date required style="width: 100px;"type="text">'
    );
    tableElements["drum_cost"] = $(
      '<input date required style="width: 100px;"type="text">'
    );
    tableElements["packing_cost"] = $(
      '<input date required style="width: 100px;"type="text">'
    );
    tableElements["waste"] = $(
      '<input date required style="width: 100px;"type="text">'
    );
    tableElements["fresco_cost"] = $(
      '<input date required style="width: 100px;"type="text">'
    );

    tableElements_percent_res["id"] = $('<label style="width: 100px;"/>');
    tableElements_percent_res["warp_yarn_total_amount"] = $(
      '<label style="width: 100px;"/>'
    );
    tableElements_percent_res["weave_amount"] = $(
      '<label style="width: 100px;"/>'
    );
    tableElements_percent_res["weft_yarn_total_amount"] = $(
      '<label style="width: 100px;"/>'
    );
    tableElements_percent_res["warp_circle_cost"] = $(
      '<label style="width: 100px;"/>'
    );
    tableElements_percent_res["weaving_cost"] = $(
      '<label style="width: 100px;"/>'
    );
    tableElements_percent_res["cutting_cost"] = $(
      '<label style="width: 100px;"/>'
    );
    tableElements_percent_res["dyeing_cost"] = $(
      '<label style="width: 100px;"/>'
    );
    tableElements_percent_res["dyeing_waste"] = $(
      '<label style="width: 100px;"/>'
    );
    tableElements_percent_res["printing_cost"] = $(
      '<label style="width: 100px;"/>'
    );
    tableElements_percent_res["embroidery_cost"] = $(
      '<label style="width: 100px;"/>'
    );
    tableElements_percent_res["cornellian_cost"] = $(
      '<label style="width: 100px;"/>'
    );
    tableElements_percent_res["lead_cost"] = $(
      '<label style="width: 100px;"/>'
    );
    tableElements_percent_res["drum_cost"] = $(
      '<label style="width: 100px;"/>'
    );
    tableElements_percent_res["packing_cost"] = $(
      '<label style="width: 100px;"/>'
    );
    tableElements_percent_res["waste"] = $('<label style="width: 100px;"/>');
    tableElements_percent_res["fresco_cost"] = $(
      '<label style="width: 100px;"/>'
    );

    tableElements_percent["warp_yarn_total_amount_percent"] = $(
      '<input date required style="width: 100px;"type="text">'
    );
    tableElements_percent["weave_amount_percent"] = $(
      '<input date required style="width: 100px;"type="text">'
    );
    tableElements_percent["weft_yarn_total_amount_percent"] = $(
      '<input date required style="width: 100px;"type="text">'
    );
    tableElements_percent["warp_circle_cost_percent"] = $(
      '<input date required style="width: 100px;"type="text">'
    );
    tableElements_percent["weaving_cost_percent"] = $(
      '<input date required style="width: 100px;"type="text">'
    );
    tableElements_percent["cutting_cost_percent"] = $(
      '<input date required style="width: 100px;"type="text">'
    );
    tableElements_percent["dyeing_cost_percent"] = $(
      '<input date required style="width: 100px;"type="text">'
    );
    tableElements_percent["dyeing_waste_percent"] = $(
      '<input date required style="width: 100px;"type="text">'
    );
    tableElements_percent["printing_cost_percent"] = $(
      '<input date required style="width: 100px;"type="text">'
    );
    tableElements_percent["embroidery_cost_percent"] = $(
      '<input date required style="width: 100px;"type="text">'
    );
    tableElements_percent["cornellian_cost_percent"] = $(
      '<input date required style="width: 100px;"type="text">'
    );
    tableElements_percent["lead_cost_percent"] = $(
      '<input date required style="width: 100px;"type="text">'
    );
    tableElements_percent["drum_cost_percent"] = $(
      '<input date required style="width: 100px;"type="text">'
    );
    tableElements_percent["packing_cost_percent"] = $(
      '<input date required style="width: 100px;"type="text">'
    );
    tableElements_percent["waste_percent"] = $(
      '<input date required style="width: 100px;"type="text">'
    );
    tableElements_percent["fresco_cost_percent"] = $(
      '<input date required style="width: 100px;"type="text">'
    );

    var tab2 = $('<table style="width: 100%;" cellpadding="0"/>');

    var table_d = $self_d.createTable_d(
      tableElements,
      tableElements_percent,
      tableElements_percent_res,
      param.values,
      true
    );

    var tr_1 =
      "" +
      "<tr>" +
      "<td>" +
      '   <a href="#" class="open_close_custom_table">' +
      '       <table style="color: rgb(0, 0, 0); font-weight: bold;">' +
      "           <tr>" +
      '               <td align="center" style="width: 16px;">' +
      '                   <i id="custom_table_down_up_icon" class="custom_table_down_icon"></i></td>' +
      "               <td>" +
      " Calculation " +
      (param.parentId != null
        ? ".<span style='color:#9c0000'>  Parent id = " + param.parentId
        : "</span>") +
      "</td>" +
      "           </tr>" +
      "       </table>" +
      "   </a>" +
      "</td>";
    ("</tr>");

    tab2.append(tr_1);

    var div_main = $('<div class="main_cu_content" style="width: 30%"/>');
    var saveButton = $(
      '<button attr="editSave" class="btn btn-primary customTableHeaderSaveButton" />'
    ).html("save");

    saveButton.off("click").on("click", function (e) {
      var val = JSON.parse(param.values);
      var id = val["id"];
      var idStr = "";
      var allRows = "";

      var last = "";

      if (id != null && id != "") {
        idStr = '"id":"' + id + '",';
      }

      var sum = idStr;

      $.each(tableElements, function (key, value) {
        if (value.val() != null && value.val() != "") {
          sum += '"' + key + '":"' + value.val() + '",';
        }
      });
      $.each(tableElements_percent, function (key, value) {
        if (value.val() != null && value.val() != "") {
          sum += '"' + key + '":"' + value.val() + '",';
        }
      });
      var sumLast = "{" + sum.substring(0, sum.length - 1) + "}";

      $.ajax({
        url: "saveDesignAndProductTotalAmount.htm",
        type: "POST",
        cache: false,
        contentType: "application/json; charset=utf-8",
        data:
          '{"amount":' + sumLast + ',"designProductId":' + param.parentId + "}",
        dataType: "json",
        success: function (response) {
          console.log("saved");
        },
      });
    });

    param.parent_div.html(
      div_main.append(tab2).append(table_d).append(saveButton)
    );
  };

  $self_d.createTable_d = function (
    tableElements,
    tableElementsPercent,
    labels,
    values,
    edit
  ) {
    var val = JSON.parse(values);

    var table = $('<table class="fancyTable table invoiceHeaderTable"/>');
    var headerTr = $("<tr/>");
    var headertd1 = $("<td/>").html("GİDER KALEMLERİ");
    var headertd2 = $("<td/>").html("Percent");
    var headertd3 = $("<td/>").html("BİRİM");
    var headertd4 = $("<td/>").html("FİRELİ");
    headerTr
      .append(headertd1)
      .append(headertd3)
      .append(headertd2)
      .append(headertd4);
    table.append(headerTr);
    $.each(tableElements, function (key, value) {
      var tr = $("<tr/>");
      var td1 = $("<td/>").html(key);
      tr.append(td1);

      if (key == "id") {
        var val1 = val[key];
        var td2 = $("<td/>").html(val1);
        var td3 = $("<td/>").html("");
        var td4 = $("<td/>").html("");

        tr.append(td2);
        tr.append(td3);
        tr.append(td4);
      } else {
        var keey = key + "_percent";

        var td3 = $("<td/>").html(tableElementsPercent[keey].val(val[keey]));

        tableElementsPercent[keey].off("keyup").on("keyup", function () {
          var thisVal = $(this).val();
          var calc = parseFloat(tableElements[key].val()) * parseFloat(thisVal);
          labels[key].html(calc);
        });
        tableElements[key].off("keyup").on("keyup", function () {
          var thisVal = $(this).val();
          var calc =
            parseFloat(tableElementsPercent[keey].val()) * parseFloat(thisVal);
          labels[key].html(calc);
        });

        var resPercent = "";

        if (
          val[key] != null &&
          val[key] != "" &&
          val[keey] != null &&
          val[keey] != ""
        ) {
          resPercent = parseFloat(val[key]) * parseFloat(val[keey]);
        }

        var td4 = $("<td/>").html(labels[key].html(resPercent));

        value.val(val[key]);

        var td2 = $("<td/>").html(value);
        tr.append(td2);
        tr.append(td3);
        tr.append(td4);
      }

      table.append(tr);
    });

    return table;
  };
};
