window.onload = function(){
    var _rstrsBtn = document.getElementById("rstrsBtn"),
    _strs = document.getElementById("strs");

    _rstrsBtn.onclick = function(){
        _strs.value = _strs.value.replace(/^(\s|\u00A0)+|(\s|\u00A0)+$/g,"");
        }
        }
/*
/^(\s|\u00A0)+|(\s|\u00A0)+$/g 為正規表示式，遇到/.../字串自動建立RegExp物件。
^為開頭$為結尾、\s比對空格，空白字元、Tab、換行字元、return/enter
\u00A0為特殊字元，表不中斷空格。
*/