function trimStr(str,tool) {
    //去除所有空格
    if(tool&&tool==true){
    str = str.replace(/\s+/g,"");    
    }else{
    //去除前后空格
    str = str.replace(/^\s+|\s+$/g,"");
    }
    return str;
}
  
export default trimStr;