import {
    getRandom,
    isJSONStr,
    isEmptyObj,
    isString
} from './common/base.js';
function createMask(){
    console.log('zzz');
    var maskStyle = 'width: 100%;height: 100%;position: fixed;left: 0;top: 0;z-index:100; background:rgba(0,0,0,0);';
    let div = document.createElement('div');
    div.setAttribute('id', 'mask');
    div.setAttribute('style', maskStyle);
    document.querySelector('body').appendChild(div);
}
function creatIconClass(text,img) {
    createMask();
    let id = getRandom(100);
    let IconStyle = `
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    display:inline-block;
    padding:20px 30px;
    background:rgba(0,0,0,0.5);
    border-radius:4px;
    font-size:14px;
    display:flex; 
    flex-flow: column wrap;
    align-items: center;
    display:flex; 
    flex-flow: column wrap;
    align-items: center; 
    justify-content: center;
    z-index:101;
    `;
    let spanStyle = `
    font-size:14px;
    text-align: center;
    margin-top:5px;
    color:#fff;
    `
    let html = `
    <img style="width:38px" src="${img}">
    <span style="${spanStyle}">${text}</span>`;
    let div = document.createElement('div');
    div.innerHTML = html;
    div.setAttribute('id', id);
    div.setAttribute('style', IconStyle);
    document.querySelector('body').appendChild(div);
    return id;
}
function beforeToast(opt) {
    let obj = null;
    if (isEmptyObj(opt)) {
        obj = {
            text:'操作成功'
        };
    } else {
        if (isJSONStr(opt)) {
            obj =opt;
        } else if(isString(opt)){
            obj= {
                text:opt
            };
        }else{
            obj={
                text:'操作成功'
            }
        }
    }
    return obj;
} 

function createToast(opt,img){
    let obj=beforeToast(opt);
    let text = obj.text;
    let dom=null;
    dom = creatIconClass(text,img);
    return dom;
}

let loading = function(opt)  {
    let img='data:image/gif;base64,R0lGODlhNgA2ALMMAJmZmf///93d3bu7u5qamtzc3Ly8vLq6ut7e3pubm5iYmJaWlgAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkMxQTEwQUJGRTI2MjExRTg5QzM2RkM4MkZEMzE1MEY5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkMxQTEwQUMwRTI2MjExRTg5QzM2RkM4MkZEMzE1MEY5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QzFBMTBBQkRFMjYyMTFFODlDMzZGQzgyRkQzMTUwRjkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QzFBMTBBQkVFMjYyMTFFODlDMzZGQzgyRkQzMTUwRjkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr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';
    let id=createToast(opt,img);
    console.log('id',id);
    let dom=document.getElementById(`${id}`);
    let mask=document.getElementById('mask');
    function hide(){
        dom.parentNode.removeChild(dom);
        mask.parentNode.removeChild(mask);
    }
    return {
        hide
    };
}

export {
    loading
}