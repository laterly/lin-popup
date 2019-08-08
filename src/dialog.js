let dialog = {
    alert: function (opt) {
        var title = opt.title ? opt.title : '';
        var message = opt.message ? opt.message : '弹窗内容';
        var maskStyle = 'width: 100%;height: 100%;position: fixed;left: 0;top: 0;z-index: 100; background:rgba(0,0,0,0.4);display:flex; flex-flow: column wrap;align-items: center; justify-content: center;color:#fff;';
        var dialogStyle = "width:250px;height:155px;background:rgba(255,255,255,1); border-radius:15px;display:flex; flex-flow: column wrap;overflow: hidden;";
        var titleStyle = "display:flex;align-items: center;justify-content: center;font-size:15px;font-weight:500;color:#0F0F0F;font-weight:500;height:40px;";
        var spanColor = "font-size:14px;text-align: center; flex:1;color:#808080;font-weight:500;font-size:14px;display:flex;align-items: center;justify-content: center;padding:0 25px;";
        var titleHtml = title ? '<div style="' + titleStyle + '">' + opt.title + '</div>' : '';
        var bottomStyle = 'height:49px;color:#00B800;display:flex;align-items: center;justify-content: center;font-weight:bold;font-size:14px;border-top:1px #D5D5D6 solid;';
        var html = '<div style="' + dialogStyle + '">' + titleHtml + '\
        <div style="' + spanColor + '">' + message + '</div>\
        <div style="' + bottomStyle + '" id="alertSure">确定</div>\
        </div>'
        let div = document.createElement('div');
        div.setAttribute('id', 'myAlert');
        div.setAttribute('style', maskStyle);
        div.innerHTML = html;
        document.querySelector('body').appendChild(div);
        let promise = new Promise(function (resolve, reject) {
            alertSure.onclick=()=>{
                let alertSure=document.getElementById('alertSure');
                let myAlert=document.getElementById('myAlert');
                myAlert.parentNode.removeChild(myAlert);
                resolve(alertSure);
            };
        });
        return promise;
    },
    confirm: function (opt) {
        var title = opt.title ? opt.title : '';
        var message = opt.message ? opt.message : '弹窗内容';
        var maskStyle = 'width: 100%;height: 100%;position: fixed;left: 0;top: 0;z-index: 100; background:rgba(0,0,0,0.4);display:flex; flex-flow: column wrap;align-items: center; justify-content: center;color:#fff;';
        var dialogStyle = "width:250px;height:155px;background:rgba(255,255,255,1); border-radius:15px;display:flex; flex-flow: column wrap;overflow: hidden;";
        var titleStyle = "display:flex;align-items: center;justify-content: center;font-size:15px;font-weight:500;color:#0F0F0F;font-weight:500;height:40px;";
        var spanColor = "font-size:14px;text-align: center; flex:1;color:#000;font-weight:500;font-size:14px;display:flex;align-items: center;justify-content: center;padding:0 25px;";
        var titleHtml = title ? '<div style="' + titleStyle + '">' + opt.title + '</div>' : '';
        var bottomStyle = 'height:49px;line-height:49px;display:flex;align-items: center;justify-content: center;font-weight:bold;font-size:14px;border-top:1px #EFEFEF solid;';
        var cancelStyle = 'width:50%;height:49px;text-align: center;color:#333;border-right:1px #EFEFEF solid;';
        var sureStyle = 'width:50%;height:49px;text-align: center;color:#00B800;';
        var html = '<div style="' + dialogStyle + '">' + titleHtml + '\
        <div style="' + spanColor + '">' + message + '</div>\
        <div style="' + bottomStyle + '">\
        <div style="' + cancelStyle + '" id="cancelSure">取消</div>\
        <div style="' + sureStyle + '" id="confirmSure">确认</div>\
        </div>\
        </div></div>'
        let div = document.createElement('div');
        div.setAttribute('id', 'myConfirm');
        div.setAttribute('style', maskStyle);
        div.innerHTML = html;
        document.querySelector('body').appendChild(div);
        let promise = new Promise(function (resolve, reject) {
           
            confirmSure.onclick=()=>{
                let confirmSure=document.getElementById('confirmSure');
                let myConfirm=document.getElementById('myConfirm');
                myConfirm.parentNode.removeChild(myConfirm);
                resolve(confirmSure);
            }
            cancelSure.onclick=()=>{
                let cancelSure=document.getElementById('cancelSure');
                let myConfirm=document.getElementById('myConfirm');
                myConfirm.parentNode.removeChild(myConfirm);
                reject(cancelSure);
            }
        })
        return promise;
    }
}
export {
    dialog
}