window.onload = function(){
    var _rstrsBtn = document.getElementById("rstrsBtn"),
    _strs = document.getElementById("strs");

    _rstrsBtn.onclick = function(){
        _strs.value = _strs.value.replace(/^(\s|\u00A0)+|(\s|\u00A0)+$/g,"");
        }
        }
/*
/^(\s|\u00A0)+|(\s|\u00A0)+$/g �����W��ܦ��A�J��/.../�r��۰ʫإ�RegExp����C
^���}�Y$�������B\s���Ů�A�ťզr���BTab�B����r���Breturn/enter
\u00A0���S��r���A�����_�Ů�C
*/