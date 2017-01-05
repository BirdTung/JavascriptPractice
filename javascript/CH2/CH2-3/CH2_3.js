var _inhibitingInput = document.getElementById("inhibitingInput");

_inhibitingInput.onfocus = function(){
    _inhibitingInput.blur();
}
//利用失去焦點讓使用者無法輸入