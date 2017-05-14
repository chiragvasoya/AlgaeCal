var apihttp = new XMLHttpRequest();
apihttp.onreadystatechange = function(){
    var currentdate = new Date();
   var datetime = currentdate.getDay();
   var dayhours = addZero(currentdate.getHours());
   var daymins = addZero(currentdate.getMinutes());
    
    if(this.readyState == 4 && this.status == 200) {
        apiObj = JSON.parse(this.responseText);
        document.getElementById("ph-number").innerHTML = apiObj.acf.default_phone_number;
        document.getElementById("guarantee-info").innerHTML = apiObj.acf["7yr_full_copy"];
    }
    
};

apihttp.open("GET", "https://www.algaecal.com/wp-json/acf/v2/options", true);
apihttp.send();

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}