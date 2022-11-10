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

function hexFindbtn() {}

function RGBFindbtn() {}

function RangeSelector() {}

// hex to rgb converter

String.prototype.convertToRGB = function () {};

function hexConvbtn() {}

function rgbConvbtn() {}
