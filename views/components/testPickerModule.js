function initTestPicker(collection){
  let container = document.createElement("div");
  container.innerHTML =
    '<div id="testPicker" class="container" style="style:none">' +
      '<div class="row">' +
        '<div class="col s12 center-align card-panel teal lighten-2 white-text">Pruebas</div>' +
        '<button id="med-test" class="col s6 m3 btn">Medias</button>' +
        '<button id="var-test" class="col s6 m3 btn">Varianza</button>' +
        '<button id="uni-test" class="col s6 m3 btn">Uniformidad</button>' +
        '<button id="ind-test" class="col s6 m3 btn">Independencia</button>' +
      '</div>' +
    '</div>';
  // Add in page
  document.querySelector("body").appendChild(container);

  let btnMediaTest = document.getElementById("med-test");
  let btnVarianceTest = document.getElementById("var-test");
  let btnUniformityTest = document.getElementById("uni-test");
  let btnIndependenceTest = document.getElementById("ind-test");

  // Get the electron modules
  let {ipcRenderer} = require("electron");
  // Adding Click events
  btnMediaTest.onclick = function(){
    ipcRenderer.send("ShowView:MediaTest", collection);
  }
  btnVarianceTest.onclick = function(){
    ipcRenderer.send("ShowView:Variance", collection);
  }
  btnUniformityTest.onclick = function(){
    ipcRenderer.send("ShowView:UniformityTest", collection);
  }
  btnIndependenceTest.onclick = function(){
    ipcRenderer.send("ShowView:IndependenceTest", collection);
  }
}

function showTestPicker(){
  document.getElementById("testPicker").style.display = 'block';
}