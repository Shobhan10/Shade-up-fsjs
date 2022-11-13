function randompickerbtn() {
  const randomPicker = document.getElementById("randomPicker");
  const hexCode = document.getElementById("randomValuePara");

  const data = "0123456789ABCDEF";
  let colorCode = "#";
  for (let i = 0; i < 6; i++) {
    colorCode += data[Math.floor(Math.random() * data.length)];
  }

  hexCode.textContent = colorCode;
  randomPicker.style.backgroundColor = colorCode;
}

function hexFindbtn() {
  const hexInput = document.getElementById("hexInput");
  const colorBox = document.getElementById("color-box");

  colorBox.style.backgroundColor = hexInput.value;
}

function RGBFindbtn() {
  const r = document.getElementById("RInput").value;
  const g = document.getElementById("GInput").value;
  const b = document.getElementById("BInput").value;
  const rgbColorBox = document.getElementById("rgb-color-box");

  rgbColorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function RangeSelector() {
  const r = document.getElementById("RrInput").value;
  const g = document.getElementById("GrInput").value;
  const b = document.getElementById("BrInput").value;
  const rangeColorBox = document.getElementById("range-color-box");

  rangeColorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

// hex to rgb converter

String.prototype.convertToRGB = function () {
  const hexCode = this;

  const r = parseInt(hexCode[0] + hexCode[1], 16);
  const g = parseInt(hexCode[2] + hexCode[3], 16);
  const b = parseInt(hexCode[4] + hexCode[5], 16);

  return `rgb(${r}, ${g}, ${b})`;
};

function hexConvbtn() {
  const hexInput = document.getElementById("hexCInp").value;
  const rgbCode = document.getElementById("hexCOut");

  rgbCode.textContent = hexInput.convertToRGB();
}

function rgbConvbtn() {
  const RInput = document.getElementById("RCInput").value;
  const GInput = document.getElementById("GCInput").value;
  const BInput = document.getElementById("BCInput").value;
  const hexCode = document.getElementById("rgbCOut");

  const r = Number(RInput).toString(16);
  const g = Number(GInput).toString(16);
  const b = Number(BInput).toString(16);

  hexCode.textContent = `#${r}${g}${b}`;
}
