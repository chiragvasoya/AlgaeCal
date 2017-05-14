var apihttp = new XMLHttpRequest();
apihttp.onreadystatechange = function(){
   
    if(this.readyState == 4 && this.status == 200) {
        apiObj = JSON.parse(this.responseText);
        document.getElementById("ph-number").innerHTML = apiObj.acf.default_phone_number;
    }
    
};

apihttp.open("GET", "https://www.algaecal.com/wp-json/acf/v2/options", true);
apihttp.send();