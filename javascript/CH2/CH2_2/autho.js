var _isContent = document.getElementById("isContent"),
_strs = document.getElementById("strs");


_isContent.onclick = function(){
    if(!_strs.value.replace(/^(\s|\u00A0)+|(\s|\u00A0)+$/g,"")){
        alert("no input!");
    }else{
        alert("input sucess!");
    }
}

//尚無法解決alert中文顯示