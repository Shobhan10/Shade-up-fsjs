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
  const RInput = document.getElementById("RInput");
  const GInput = document.getElementById("GInput");
  const BInput = document.getElementById("BInput");
  const rgbColorBox = document.getElementById("rgb-color-box");

  const r = RInput.value;
  const g = GInput.value;
  const b = BInput.value;

  rgbColorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function RangeSelector() {}

// hex to rgb converter

String.prototype.convertToRGB = function () {
  const hexCode = this;

  const r = parseInt(hexCode[0] + hexCode[1], 16);
  const g = parseInt(hexCode[2] + hexCode[3], 16);
  const b = parseInt(hexCode[4] + hexCode[5], 16);

  return `rgb(${r}, ${g}, ${b})`;
};

function hexConvbtn() {
  const hexInput = document.getElementById("hexCInp");
  const rgbCode = document.getElementById("hexCOut");

  const hexCode = hexInput.value;

  rgbCode.textContent = hexCode.convertToRGB();
}

function rgbConvbtn() {}
