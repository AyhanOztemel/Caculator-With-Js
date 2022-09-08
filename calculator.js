var sonDeger = "";
var memoryIsaret = "";
var memoryDeger = "";
var hafiza=[];
function isaretDegistir(){
  if(sonDeger != "" && memoryDeger == "" && memoryIsaret == ""){
  if (sonDeger!=""&& sonDeger>0) { sonDeger=-1*sonDeger }
  else { sonDeger=-1*sonDeger }
  document.getElementById("icerik").value = sonDeger;
  document.getElementById("sonuc").innerHTML = sonDeger;
}
if (sonDeger != "" && memoryDeger != "" && memoryIsaret != "") {
  if (sonDeger!=""&& sonDeger>0) { sonDeger=-1*sonDeger }
  else { sonDeger=-1*sonDeger }
  document.getElementById("icerik").value = sonDeger;
  document.getElementById("sonuc").innerHTML = memoryDeger+memoryIsaret+sonDeger;
}
}
function rakamYaz(deger) {
  
  if (deger != "0" && deger != "." && memoryIsaret != "" && memoryDeger != "" &&
     sonDeger != "0" &&  deger !== "00") {
    console.log("rakamyaz:01");
    if (memoryIsaret == "=") {
      memoryDeger = "";
      memoryIsaret = "";
    }
    sonDeger += deger;
    document.getElementById("sonuc").innerHTML =
      memoryDeger + memoryIsaret + sonDeger;
    document.getElementById("icerik").value = sonDeger;
    } 
  else if (deger != "." && deger != "0" && sonDeger != "0" && deger != "00") {
    console.log("rakamyaz:02");
    sonDeger += deger;
    document.getElementById("sonuc").innerHTML = sonDeger;
    document.getElementById("icerik").value = sonDeger;
    }
}
function sifirYaz(deger) {
  if (deger == 0 && memoryDeger==""&& sonDeger =="" && memoryIsaret=="") {
    console.log("sıfıryaz:01");
    sonDeger += deger;
    document.getElementById("icerik").value = sonDeger;
    document.getElementById("sonuc").innerHTML =sonDeger;
  }
  else if (deger == 0 && sonDeger == "." && memoryDeger==""&& memoryIsaret=="") {
    console.log("sıfıryaz:02");
    sonDeger += deger;
    document.getElementById("sonuc").innerHTML = sonDeger;
    document.getElementById("icerik").value = sonDeger;
  }
  else if (deger == 0 && sonDeger !="0"&& memoryDeger==""&& memoryIsaret=="") {
    console.log("sıfıryaz:03");
    sonDeger += deger;
    document.getElementById("sonuc").innerHTML =sonDeger;
    document.getElementById("icerik").value = sonDeger;
  }
  else if (deger == 0 && sonDeger !="0"&& memoryDeger!=""&& memoryIsaret!="") {
    console.log("sıfıryaz:04");
    sonDeger += deger;
    document.getElementById("sonuc").innerHTML =
           memoryDeger + memoryIsaret + sonDeger;
    document.getElementById("icerik").value = sonDeger;
  }

  else if (deger == 0 && sonDeger !="0"&& memoryDeger!=""&& memoryIsaret=="") {
    console.log("sıfıryaz:05");
    sonDeger += deger;
    document.getElementById("sonuc").innerHTML = sonDeger;
    document.getElementById("icerik").value = sonDeger;
  }
 
  // if (deger == 0 && deger != "." && sonDeger != "0" && deger !== "00") {
  //   console.log("merhaba 03");
  //   if (memoryIsaret == "=") {
  //     memoryDeger = "";
  //     memoryIsaret = "";
  //   }
  //   sonDeger += deger;
  //   document.getElementById("sonuc").innerHTML =
  //          memoryDeger + memoryIsaret + sonDeger;
  //   document.getElementById("icerik").value = sonDeger;
  // }
}
function ciftSifirYaz(deger) {
  if (deger == "00" && sonDeger == "."&& memoryDeger==""&&memoryIsaret=="") {
    console.log("çiftsıfıryaz:01");
    sonDeger += deger;
    document.getElementById("sonuc").innerHTML = sonDeger;
    document.getElementById("icerik").value = sonDeger;
  }
  else if (deger == "00" && sonDeger != ""&& memoryDeger!=""& memoryIsaret !="") {
    console.log("çiftsıfıryaz:02");
    sonDeger += deger;
    document.getElementById("sonuc").innerHTML =
      memoryDeger + memoryIsaret + sonDeger;
    document.getElementById("icerik").value = sonDeger;
  }
  else if (deger == "00" && sonDeger != ""&& memoryDeger!=""& memoryIsaret !="") {
    console.log("çiftsıfıryaz:02");
    sonDeger += deger;
    document.getElementById("sonuc").innerHTML =
      memoryDeger + memoryIsaret + sonDeger;
    document.getElementById("icerik").value = sonDeger;
  }
  else if (deger == "00" && sonDeger != ""&& memoryDeger==""& memoryIsaret =="") {
    console.log("çiftsıfıryaz:03");
    sonDeger += deger;
    document.getElementById("sonuc").innerHTML =sonDeger;
    document.getElementById("icerik").value = sonDeger;
  }
  else if (deger == "00" && sonDeger != ""&& memoryDeger!=""& memoryIsaret =="") {
    console.log("çiftsıfıryaz:04");
    sonDeger += deger;
    document.getElementById("sonuc").innerHTML =sonDeger;
    document.getElementById("icerik").value = sonDeger;
  }
  // if (deger == "00" && deger != "." && sonDeger != "0" && sonDeger != "") {
  //   console.log("çiftsıfıryaz:01");
  //   sonDeger += deger;
  //   document.getElementById("sonuc").innerHTML =
  //     memoryDeger + memoryIsaret + sonDeger;
  //   document.getElementById("icerik").value = sonDeger;
  // }
}
function noktaYaz(deger) {
  if (deger == "." && (sonDeger == "0" || sonDeger >= 0) && sonDeger.indexOf(".") === -1 && memoryIsaret != "=") {
    console.log("nokta:01");
    // if (memoryIsaret == "=") {
    //   memoryDeger = "";
    //   memoryIsaret = "";
    // }
    sonDeger += deger;
    document.getElementById("sonuc").innerHTML = sonDeger;
    document.getElementById("icerik").value = sonDeger;
  }
}
function esittir(isaret) {
  if(isaret == "="&& memoryIsaret=="%"){ 
    console.log("eşittir)")
    console.log(memoryDeger)   
    console.log(sonDeger) 
    memoryDeger=memoryDeger*(sonDeger/100)
    document.getElementById("icerik").value = "";
    document.getElementById("sonuc").innerHTML = memoryDeger ;
   memoryIsaret="";
    isaret ="";
    sonDeger ="";
  }
  else if (isaret == "=" && memoryIsaret == "-" && sonDeger != "" && 
       memoryDeger != "") {
    memoryDeger = (Number(memoryDeger) - Number(sonDeger)).toString();
    document.getElementById("icerik").value = "";
    //memoryIsaret = isaret;
    document.getElementById("sonuc").innerHTML = memoryDeger; //+ isaret;
    memoryIsaret="";
    isaret ="";
    sonDeger = "";
  } 
  else if (isaret == "=" && memoryIsaret == "x" && sonDeger != "" &&
            memoryDeger != "") {
    memoryDeger = (Number(memoryDeger) * Number(sonDeger)).toString();
    document.getElementById("icerik").value = "";
    //memoryIsaret = isaret;
    document.getElementById("sonuc").innerHTML = memoryDeger; //+ isaret;
    memoryIsaret="";
    isaret ="";
    sonDeger = "";
  } 
  else if (isaret == "=" && memoryIsaret == "/" && sonDeger != "" &&
           memoryDeger != "") {
    memoryDeger = (Number(memoryDeger) / Number(sonDeger)).toString();
    document.getElementById("icerik").value = "";
    //memoryIsaret = isaret;
    document.getElementById("sonuc").innerHTML = memoryDeger;// + isaret;
    memoryIsaret="";
    isaret ="";
    sonDeger = "";
  }
  else if (isaret == "=" && memoryIsaret == "+" && sonDeger != "" &&
            memoryDeger != "") {
    memoryDeger = (Number(memoryDeger) + Number(sonDeger)).toString();
    document.getElementById("icerik").value = "";
    //memoryIsaret = isaret;
    document.getElementById("sonuc").innerHTML = memoryDeger;// + isaret;
    memoryIsaret="";
    isaret ="";
    sonDeger = "";
  }
}
function toplamaIslemi(isaret) {
  if (isaret=="+" && memoryIsaret == "+" && sonDeger != "" &&  memoryDeger 
  != "") {
    memoryDeger = (Number(memoryDeger) + Number(sonDeger)).toString();
    document.getElementById("icerik").value = "";
    document.getElementById("sonuc").innerHTML = memoryDeger + isaret;
    //memoryDeger=sonDeger;
    memoryIsaret = isaret;
    isaret = "";
    sonDeger = "";
  }
  else if (isaret == "+" && memoryIsaret == "-" && sonDeger != "" && memoryDeger != "") {
    memoryDeger = (Number(memoryDeger) - Number(sonDeger)).toString();
    document.getElementById("icerik").value = "";
    memoryIsaret = isaret;
    document.getElementById("sonuc").innerHTML = memoryDeger + isaret;
    sonDeger = "";
  }
  else if (isaret == "+" && memoryIsaret == "x" && sonDeger != "" && memoryDeger != "") {
    memoryDeger = (Number(memoryDeger) * Number(sonDeger)).toString();
    document.getElementById("icerik").value = "";
    memoryIsaret = isaret;
    document.getElementById("sonuc").innerHTML = memoryDeger + isaret;
    sonDeger = "";
  } 
  else if (isaret == "+" && memoryIsaret == "/" && sonDeger != "" && memoryDeger != "") {
    memoryDeger = (Number(memoryDeger) / Number(sonDeger)).toString();
    document.getElementById("icerik").value = "";
    memoryIsaret = isaret;
    document.getElementById("sonuc").innerHTML = memoryDeger + isaret;
    sonDeger = "";
  } 
  else if (isaret=="+" && memoryIsaret == "%" && sonDeger != "" &&  memoryDeger 
  != "") {
    memoryDeger = ((Number(memoryDeger) /100)*Number(sonDeger)).toString();
    document.getElementById("icerik").value = "";
    document.getElementById("sonuc").innerHTML = memoryDeger + isaret;
    //memoryDeger=sonDeger;
    memoryIsaret = isaret;
    isaret = "";
    sonDeger = "";
  }
  else if (memoryIsaret != "+" && memoryIsaret != "" && sonDeger == "") {
    memoryIsaret = isaret;
    document.getElementById("sonuc").innerHTML = memoryDeger + isaret;
  }
  else if (memoryIsaret != "+" && memoryIsaret == "" && sonDeger == "" && memoryDeger!="") {
    memoryIsaret = isaret;
    document.getElementById("sonuc").innerHTML = memoryDeger + isaret;
  }
  else if (memoryIsaret == "" && memoryDeger == "" && sonDeger != "") {
    document.getElementById("icerik").value = "";
    document.getElementById("sonuc").innerHTML = sonDeger + isaret;
    memoryDeger = sonDeger;
    memoryIsaret = isaret;
    isaret = "";
    sonDeger = "";
  }  
}
function cikarmaIslemi(isaret) {
  if (isaret=="-" && memoryIsaret == "-" && sonDeger != "" &&  memoryDeger 
  != "") {
    memoryDeger = (Number(memoryDeger) - Number(sonDeger)).toString();
    document.getElementById("icerik").value = "";
    document.getElementById("sonuc").innerHTML = memoryDeger + isaret;
    //memoryDeger=sonDeger;
    memoryIsaret = isaret;
    isaret = "";
    sonDeger = "";
  }

  else if (isaret == "-" && memoryIsaret == "+" && sonDeger != "" && memoryDeger 
  != "") {
    memoryDeger = (Number(memoryDeger) + Number(sonDeger)).toString();
    document.getElementById("icerik").value = "";
    memoryIsaret = isaret;
    document.getElementById("sonuc").innerHTML = memoryDeger + isaret;
    sonDeger = "";
  } 

  else if (isaret == "-" && memoryIsaret == "x" && sonDeger != "" && memoryDeger != "") {
    memoryDeger = (Number(memoryDeger) * Number(sonDeger)).toString();
    document.getElementById("icerik").value = "";
    memoryIsaret = isaret;
    document.getElementById("sonuc").innerHTML = memoryDeger + isaret;
    sonDeger = "";
  } 
  else if (isaret == "-" && memoryIsaret == "/" && sonDeger != "" && memoryDeger != "") {
    memoryDeger = (Number(memoryDeger) / Number(sonDeger)).toString();
    document.getElementById("icerik").value = "";
    memoryIsaret = isaret;
    document.getElementById("sonuc").innerHTML = memoryDeger + isaret;
    sonDeger = "";
  } 
  else if (isaret=="-" && memoryIsaret == "%" && sonDeger != "" &&  memoryDeger 
  != "") {
    memoryDeger = ((Number(memoryDeger) /100)*Number(sonDeger)).toString();
    document.getElementById("icerik").value = "";
    document.getElementById("sonuc").innerHTML = memoryDeger + isaret;
    //memoryDeger=sonDeger;
    memoryIsaret = isaret;
    isaret = "";
    sonDeger = "";
  }
  else if (memoryIsaret != "-" && memoryIsaret != "" && sonDeger == "") {
    memoryIsaret = isaret;
    document.getElementById("sonuc").innerHTML = memoryDeger + isaret;

  } 
  else if (memoryIsaret != "-" && memoryIsaret == "" && sonDeger == ""&& memoryDeger!="") {
    memoryIsaret = isaret;
    document.getElementById("sonuc").innerHTML = memoryDeger + isaret;
  }
  else if (memoryIsaret == "" && memoryDeger == "" && sonDeger != "") {
    document.getElementById("icerik").value = "";
    document.getElementById("sonuc").innerHTML = sonDeger + isaret;
    memoryDeger = sonDeger;
    memoryIsaret = isaret;
    isaret = "";
    sonDeger = "";
  } 
  
  
}
function carpmaIslemi(isaret) {
  if (isaret=="x" && memoryIsaret == "x" && sonDeger != "" &&  memoryDeger 
  != "") {
    memoryDeger = (Number(memoryDeger) * Number(sonDeger)).toString();
    document.getElementById("icerik").value = "";
    document.getElementById("sonuc").innerHTML = memoryDeger + isaret;
    //memoryDeger=sonDeger;
    memoryIsaret = isaret;
    isaret = "";
    sonDeger = "";
  }
  else if (isaret == "x" && memoryIsaret == "+" && sonDeger != "" && memoryDeger 
  != "" ) {
    memoryDeger = (Number(memoryDeger) + Number(sonDeger)).toString();
    document.getElementById("icerik").value = "";
    memoryIsaret = isaret;
    document.getElementById("sonuc").innerHTML = memoryDeger + isaret;
    sonDeger = "";
  } 
  else if (isaret == "x" && memoryIsaret == "-" && sonDeger != "" && memoryDeger != "") {
    memoryDeger = (Number(memoryDeger) - Number(sonDeger)).toString();
    document.getElementById("icerik").value = "";
    memoryIsaret = isaret;
    document.getElementById("sonuc").innerHTML = memoryDeger + isaret;
    sonDeger = "";
  } 
  else if ( isaret == "x" && memoryIsaret == "/" && sonDeger != "" && memoryDeger != "") {
    memoryDeger = (Number(memoryDeger) / Number(sonDeger)).toString();
    document.getElementById("icerik").value = "";
    memoryIsaret = isaret;
    document.getElementById("sonuc").innerHTML = memoryDeger + isaret;
    sonDeger = "";
  } 
  else if (isaret=="*" && memoryIsaret == "%" && sonDeger != "" &&  memoryDeger 
  != "") {
    memoryDeger = ((Number(memoryDeger) /100)*Number(sonDeger)).toString();
    document.getElementById("icerik").value = "";
    document.getElementById("sonuc").innerHTML = memoryDeger + isaret;
    //memoryDeger=sonDeger;
    memoryIsaret = isaret;
    isaret = "";
    sonDeger = "";
  }
  else if (memoryIsaret != "x" && memoryIsaret != "" && sonDeger == "") {
    memoryIsaret = isaret;
    document.getElementById("sonuc").innerHTML = memoryDeger + isaret;
  } 
  else if (memoryIsaret != "x" && memoryIsaret == "" && sonDeger == ""&& memoryDeger!="") {
    memoryIsaret = isaret;
    document.getElementById("sonuc").innerHTML = memoryDeger + isaret;
  }
  else if (memoryIsaret == "" && memoryDeger == "" && sonDeger != "") {
    document.getElementById("icerik").value = "";
    document.getElementById("sonuc").innerHTML = sonDeger + isaret;
    memoryDeger = sonDeger;
    memoryIsaret = isaret;
    isaret = "";
    sonDeger = "";
  } 
}
function bolmeIslemi(isaret) {
  if (isaret=="/" && memoryIsaret == "/" && sonDeger != "" &&  memoryDeger 
  != "") {
    memoryDeger = (Number(memoryDeger) / Number(sonDeger)).toString();
    document.getElementById("icerik").value = "";
    document.getElementById("sonuc").innerHTML = memoryDeger + isaret;
    //memoryDeger=sonDeger;
    memoryIsaret = isaret;
    isaret = "";
    sonDeger = "";
  }
  if ( isaret == "/" && memoryIsaret == "-" && sonDeger != "" && memoryDeger 
  != "") {
    memoryDeger = (Number(memoryDeger) - Number(sonDeger)).toString();
    document.getElementById("icerik").value = "";
    memoryIsaret = isaret;
    document.getElementById("sonuc").innerHTML = memoryDeger + isaret;
    sonDeger = "";
  } 
  else if (isaret == "/" && memoryIsaret == "x" && sonDeger != "" && memoryDeger != "") {
    memoryDeger = (Number(memoryDeger) * Number(sonDeger)).toString();
    document.getElementById("icerik").value = "";
    memoryIsaret = isaret;
    document.getElementById("sonuc").innerHTML = memoryDeger + isaret;
    sonDeger = "";
  }
  else if (isaret == "/" && memoryIsaret == "+" && sonDeger != "" && memoryDeger != "") {
    memoryDeger = (Number(memoryDeger) + Number(sonDeger)).toString();
    document.getElementById("icerik").value = "";
    memoryIsaret = isaret;
    document.getElementById("sonuc").innerHTML = memoryDeger + isaret;
    sonDeger = "";
  } 
  else if (isaret=="/" && memoryIsaret == "%" && sonDeger != "" &&  memoryDeger 
  != "") {
    memoryDeger = ((Number(memoryDeger) /100)*Number(sonDeger)).toString();
    document.getElementById("icerik").value = "";
    document.getElementById("sonuc").innerHTML = memoryDeger + isaret;
    //memoryDeger=sonDeger;
    memoryIsaret = isaret;
    isaret = "";
    sonDeger = "";
  }
  else if (memoryIsaret != "/" && memoryIsaret != "" && sonDeger == "") {
    memoryIsaret = isaret;
    document.getElementById("sonuc").innerHTML = memoryDeger + isaret;
  } 
  else if (memoryIsaret != "/" && memoryIsaret == "" && sonDeger == "" && memoryDeger!="") {
    memoryIsaret = isaret;
    document.getElementById("sonuc").innerHTML = memoryDeger + isaret;}
  else if (memoryIsaret == "" && memoryDeger == "" && sonDeger != "") {
    document.getElementById("icerik").value = "";
    document.getElementById("sonuc").innerHTML = sonDeger + isaret;
    memoryDeger = sonDeger;
    memoryIsaret = isaret;
    isaret = "";
    sonDeger = "";
  } 
}
function kompleTemizle() {
  document.getElementById("icerik").value = "";
  sonDeger = "";
  document.getElementById("sonuc").innerHTML = "";
  memoryIsaret = "";
  memoryDeger = "";
  hafiza=[];
}
function sonRakamTemizle() {
    console.log("sonDeger :"+sonDeger)
    console.log("memoryDeger :"+memoryDeger)
    console.log("memoryIsaret :"+memoryIsaret) 
    //console.log("isaret :"+isaret) 
  if(memoryDeger==""&& memoryIsaret=="" && sonDeger!=""){
    var str = sonDeger.length - 1;
    sonDeger = sonDeger.substr(0, str);
    document.getElementById("icerik").value = sonDeger;
    document.getElementById("sonuc").innerHTML =sonDeger
  }
  else if(memoryDeger!=""&& memoryIsaret !=""&& sonDeger!=""){
    var str = sonDeger.length - 1;
    sonDeger = sonDeger.substr(0, str);
    document.getElementById("icerik").value = sonDeger;
    document.getElementById("sonuc").innerHTML =memoryDeger+memoryIsaret+sonDeger
  }
  else if(memoryDeger!=""&& memoryIsaret ==""&& sonDeger!=""){
    var str = sonDeger.length - 1;
    sonDeger = sonDeger.substr(0, str);
    memoryDeger=sonDeger;
    document.getElementById("icerik").value = sonDeger;
    document.getElementById("sonuc").innerHTML =memoryDeger
  }
  else if(memoryDeger!=""&& memoryIsaret !=""&& sonDeger==""){
    memoryIsaret="";
    document.getElementById("icerik").value = "";
    document.getElementById("sonuc").innerHTML =memoryDeger
  }
   
  
}
function kakeKokAl() {
  if (sonDeger != "" && memoryDeger == "" && memoryIsaret == "" && sonDeger>=0 ) {
    var kareKok = Math.sqrt(sonDeger);
    memoryDeger = kareKok;
    document.getElementById("sonuc").innerHTML = memoryDeger;
    document.getElementById("icerik").value = "";
    console.log("*****************") 
    sonDeger ="";
    console.log("sonDeger :"+sonDeger)
    console.log("memoryDeger :"+memoryDeger)
    console.log("memoryIsaret :"+memoryIsaret)    
  }
  else if (sonDeger == "" && memoryDeger != "" && memoryIsaret == "") {
    var kareKok = Math.sqrt(memoryDeger);
    memoryDeger = kareKok;
    document.getElementById("sonuc").innerHTML = memoryDeger;
    document.getElementById("icerik").value = "";
    console.log("*****************") 
    sonDeger ="";
    console.log("sonDeger :"+sonDeger)
    console.log("memoryDeger :"+memoryDeger)
    console.log("memoryIsaret :"+memoryIsaret)  
  }
  else if (sonDeger != "" && memoryDeger != "" && memoryIsaret == "") {
    var kareKok = Math.sqrt(sonDeger);
    memoryDeger = kareKok;
    document.getElementById("sonuc").innerHTML = memoryDeger;
    document.getElementById("icerik").value = "";
    console.log("*****************") 
    sonDeger ="";
    console.log("sonDeger :"+sonDeger)
    console.log("memoryDeger :"+memoryDeger)
    console.log("memoryIsaret :"+memoryIsaret)  
  }
  else if (sonDeger != "" && memoryDeger != "" && memoryIsaret != "") {
    var kareKok = Math.sqrt(sonDeger);
    if (memoryIsaret == "+") {
      kareKok = Number(memoryDeger) + Number( kareKok);
      document.getElementById("sonuc").innerHTML =memoryDeger+memoryIsaret+"("+"√¯"+sonDeger+")"+"="+kareKok;
    }
    if (memoryIsaret == "-") {
      kareKok = Number(memoryDeger) - Number( kareKok);
      document.getElementById("sonuc").innerHTML =memoryDeger+memoryIsaret+"("+"√¯"+sonDeger+")"+"="+kareKok;
    }
    if (memoryIsaret == "x") {
      kareKok = Number(memoryDeger) * Number( kareKok);
      document.getElementById("sonuc").innerHTML =memoryDeger+memoryIsaret+"("+"√¯"+sonDeger+")"+"="+kareKok;
    }
    if (memoryIsaret == "/") {
      kareKok = Number(memoryDeger) / Number( kareKok);
      document.getElementById("sonuc").innerHTML =memoryDeger+memoryIsaret+"("+"√¯"+sonDeger+")"+"="+kareKok;
    }
    if (memoryIsaret == "%") {
      console.log("% kare")
      kareKok = Number(memoryDeger/100) * Number( kareKok);
      document.getElementById("sonuc").innerHTML =memoryDeger+memoryIsaret+"("+"√¯"+sonDeger+")"+"="+kareKok;
    }
  console.log("----------------")
  console.log("sonDeger :"+sonDeger)
  console.log("memoryDeger :"+memoryDeger)
  console.log("memoryIsaret :"+memoryIsaret)
  document.getElementById("icerik").value = "";
  sonDeger = "";
  memoryIsaret=""
  memoryDeger = kareKok;
  console.log("----------------")
  console.log("yeni sonDeger :"+sonDeger)
  console.log(" yeni memoryDeger :"+memoryDeger)
  console.log("yeni memoryIsaret :"+memoryIsaret)
  }
    

  }
 
function yuzdeHesapla(isaret) {
  if(isaret=="%" && sonDeger!=""& memoryIsaret==""&& memoryDeger==""){
    document.getElementById("sonuc").innerHTML = sonDeger+isaret;
    document.getElementById("icerik").value = "";
      memoryDeger=sonDeger;
      sonDeger = "";
      memoryIsaret=isaret;}
  else if (isaret=="%"&& memoryDeger!=""&& memoryIsaret!="%" && sonDeger==""){
    memoryIsaret=isaret;
    document.getElementById("sonuc").innerHTML = memoryDeger+memoryIsaret;
    isaret="";
  }
  
}
function kareAl(){
  if (sonDeger != "" && memoryDeger == "" && memoryIsaret == "") {
    var kareAl = sonDeger*sonDeger;
  
    document.getElementById("sonuc").innerHTML = kareAl;
    document.getElementById("icerik").value = "";
    sonDeger = "";
    memoryDeger = kareAl;
  }
  else if (sonDeger == "" && memoryDeger != "" && memoryIsaret == "") {
    var kareAl = memoryDeger*memoryDeger;
  
    document.getElementById("sonuc").innerHTML = kareAl;
    document.getElementById("icerik").value = "";
    sonDeger = "";
    memoryDeger = kareAl;
  }
  else if (sonDeger != "" && memoryDeger != "" && memoryIsaret == "") {
    var kareAl = sonDeger*sonDeger;
  
    document.getElementById("sonuc").innerHTML = kareAl;
    document.getElementById("icerik").value = "";
    sonDeger = "";
    memoryDeger = kareAl;
  }
  else if (sonDeger != "" && memoryDeger != "" && memoryIsaret != "") {
    var kareAl = sonDeger*sonDeger;
    if (memoryIsaret == "+") {
     
      kareAl = Number(memoryDeger) + Number( kareAl);
      document.getElementById("sonuc").innerHTML =memoryDeger+memoryIsaret+"("+sonDeger+"x"+sonDeger+")"+"="+kareAl;
    }
    else if (memoryIsaret == "-") {
      kareAl = Number(memoryDeger) - Number( kareAl);
      document.getElementById("sonuc").innerHTML =memoryDeger+memoryIsaret+"("+sonDeger+"x"+sonDeger+")"+"="+kareAl;
    }
    else if (memoryIsaret == "x") {
      kareAl = Number(memoryDeger) * Number( kareAl);
      document.getElementById("sonuc").innerHTML =memoryDeger+memoryIsaret+"("+sonDeger+"x"+sonDeger+")"+"="+kareAl;
    }
    else if (memoryIsaret == "/") {
      kareAl = Number(memoryDeger) / Number(kareAl);
      document.getElementById("sonuc").innerHTML =memoryDeger+memoryIsaret+"("+sonDeger+"x"+sonDeger+")"+"="+kareAl;
    }
    else if (memoryIsaret == "%") {
      kareAl = (Number(memoryDeger)/100) * Number(kareAl);
      console.log(kareAl)
      document.getElementById("sonuc").innerHTML =memoryDeger+memoryIsaret+"("+sonDeger+"x"+sonDeger+")"+"="+kareAl;
    }
    //document.getElementById("sonuc").innerHTML = kareAl;
    document.getElementById("icerik").value = "";
    sonDeger = "";
    memoryIsaret=""
    memoryDeger = kareAl;
  }
}
function mArtiHafiza(deger){ 
    console.log("*****************") 
    console.log("sonDeger :"+sonDeger)
    console.log("memoryDeger :"+memoryDeger)
    console.log("memoryIsaret :"+memoryIsaret)
  if(deger=="M+"&& memoryIsaret!="" && memoryDeger!=""&&sonDeger!=""){
    console.log("1111111111111111111111111")
    if(memoryIsaret=="+"){
      console.log("1-2222222222222222222222")
        memoryDeger=Number(memoryDeger)+Number(sonDeger)
        //hafiza=[];
        hafiza.push(memoryDeger);
        for (let index = 0; index < hafiza.length; index++) {
          console.log(hafiza[index]); }   
      }
    else if(memoryIsaret=="-"){
      console.log("1-3333333333333333333333")
      memoryDeger=Number(memoryDeger)-Number(sonDeger)
      //hafiza=[];
      hafiza.push(memoryDeger);
      for (let index = 0; index < hafiza.length; index++) {
          console.log(hafiza[index]); }
      }       
    else if(memoryIsaret=="x"){
      console.log("1-44444444444444444444444444444444")
      memoryDeger=Number(memoryDeger)*Number(sonDeger)
      //hafiza=[];
      hafiza.push(memoryDeger);
      for (let index = 0; index < hafiza.length; index++) {
          console.log(hafiza[index]); }
      }         
    else if(memoryIsaret=="/"){
      console.log("1-555555555555555555555555555555555555")
      memoryDeger=Number(memoryDeger)/Number(sonDeger)
      //hafiza=[];
      hafiza.push(memoryDeger);
      for (let index = 0; index < hafiza.length; index++) {
          console.log(hafiza[index]); }             
      }  
      else if(memoryIsaret=="%"){
        console.log("1-655555555555555555555555555555555555")
        memoryDeger=(Number(memoryDeger)/100)*Number(sonDeger)
        //hafiza=[];
        hafiza.push(memoryDeger);
        for (let index = 0; index < hafiza.length; index++) {
            console.log(hafiza[index]); }             
        }  
    //memoryIsaret="="

    document.getElementById("sonuc").innerHTML =memoryDeger;
    document.getElementById("icerik").value = "";
    sonDeger=""; 
    memoryIsaret="";
    //memoryDeger="";  
    console.log("******çıkış********") 
    console.log("sonDeger :"+sonDeger)
    console.log("memoryDeger :"+memoryDeger)
    console.log("memoryIsaret :"+memoryIsaret)
      } 
  else if(deger=="M+"&& memoryIsaret=="" && memoryDeger!=""&&sonDeger==""){
    console.log("77777777777777777777777777777777777777")
    hafiza.push(memoryDeger);
    for (let index = 0; index < hafiza.length; index++) {
      console.log(hafiza[index]); } 
    document.getElementById("sonuc").innerHTML = memoryDeger;
    document.getElementById("icerik").value = "" 
    sonDeger=""; 
    //memoryDeger=""   
    memoryIsaret=""     
   }
 else if(deger=="M+"&& memoryIsaret=="" && memoryDeger!=""&&sonDeger!=""){
  console.log("66666666666666666666666666666666666666666")
    hafiza.push(sonDeger);
    memoryDeger=sonDeger;
    for (let index = 0; index < hafiza.length; index++) {
        console.log(hafiza[index]); }  
    document.getElementById("sonuc").innerHTML = memoryDeger;
    document.getElementById("icerik").value = ""     
    memoryIsaret="" 
    sonDeger="";
      }    
else if (deger=="M+" && memoryIsaret=="" && memoryDeger=="" && sonDeger!="" ){  
console.log("???????????????????????") 
console.log("sonDeger :"+sonDeger)
console.log("memoryDeger :"+memoryDeger)
console.log("memoryIsaret :"+memoryIsaret)
hafiza.push(sonDeger);
memoryDeger=sonDeger;
for (let index = 0; index < hafiza.length; index++) {
       console.log(hafiza[index]); } 
document.getElementById("sonuc").innerHTML = memoryDeger;
document.getElementById("icerik").value = "";
sonDeger="";
memoryIsaret="";
console.log("sonDeger :"+sonDeger)
console.log("memoryDeger :"+memoryDeger)
   }
  
}
function mEksiHafiza(deger){
  console.log("*****************") 
    console.log("sonDeger :"+sonDeger)
    console.log("memoryDeger :"+memoryDeger)
    console.log("memoryIsaret :"+memoryIsaret)
  if(deger=="M-"&& memoryIsaret!="" && memoryDeger!=""&&sonDeger!=""){
    console.log("1111111111111111111111111")
    if(memoryIsaret=="+"){
      console.log("1-2222222222222222222222")
        memoryDeger=Number(memoryDeger)+Number(sonDeger)
        //hafiza=[];
        hafiza.push(memoryDeger);
        for (let index = 0; index < hafiza.length; index++) {
          console.log(hafiza[index]); }   
      }
    else if(memoryIsaret=="-"){
      console.log("1-3333333333333333333333")
      memoryDeger=Number(memoryDeger)-Number(sonDeger)
      //hafiza=[];
      hafiza.push(memoryDeger);
      for (let index = 0; index < hafiza.length; index++) {
          console.log(hafiza[index]); }
      }       
    else if(memoryIsaret=="x"){
      console.log("1-44444444444444444444444444444444")
      memoryDeger=Number(memoryDeger)*Number(sonDeger)
      //hafiza=[];
      hafiza.push(memoryDeger);
      for (let index = 0; index < hafiza.length; index++) {
          console.log(hafiza[index]); }
      }         
    else if(memoryIsaret=="/"){
      console.log("1-555555555555555555555555555555555555")
      memoryDeger=Number(memoryDeger)/Number(sonDeger)
      //hafiza=[];
      hafiza.push(memoryDeger);
      for (let index = 0; index < hafiza.length; index++) {
          console.log(hafiza[index]); }             
      } 
     else if(memoryIsaret=="%"){
        console.log("1-655555555555555555555555555555555555")
        memoryDeger=(Number(memoryDeger)/100)*Number(sonDeger)
        //hafiza=[];
        hafiza.push(memoryDeger);
        for (let index = 0; index < hafiza.length; index++) {
            console.log(hafiza[index]); }             
        }
    //memoryIsaret="="

    document.getElementById("sonuc").innerHTML =memoryDeger;
    document.getElementById("icerik").value = "";
    sonDeger=""; 
    memoryIsaret="";
    //memoryDeger="";    
      } 
      else if(deger=="M-"&& memoryIsaret=="" && memoryDeger!=""&&sonDeger==""){
        console.log("77777777777777777777777777777777777777")
        hafiza.push(-1*memoryDeger);
        
        for (let index = 0; index < hafiza.length; index++) {
          console.log(hafiza[index]); } 
        document.getElementById("sonuc").innerHTML = memoryDeger;
        document.getElementById("icerik").value = "" 
        sonDeger=""; 
        //memoryDeger=""   
        memoryIsaret=""     
       }
     else if(deger=="M-"&& memoryIsaret=="" && memoryDeger!=""&&sonDeger!=""){
      console.log("66666666666666666666666666666666666666666")
        hafiza.push(-1*sonDeger);
        memoryDeger=sonDeger;
        for (let index = 0; index < hafiza.length; index++) {
            console.log(hafiza[index]); }  
        document.getElementById("sonuc").innerHTML = memoryDeger;
        document.getElementById("icerik").value = ""     
        memoryIsaret="" 
        sonDeger="";
          }    
    else if (deger=="M-" && memoryIsaret=="" && memoryDeger=="" && sonDeger!="" ){  
    console.log("???????????????????????") 
    console.log("sonDeger :"+sonDeger)
    console.log("memoryDeger :"+memoryDeger)
    console.log("memoryIsaret :"+memoryIsaret)
    hafiza.push(-1*sonDeger);
 
    memoryDeger=sonDeger;
    for (let index = 0; index < hafiza.length; index++) {
           console.log(hafiza[index]); } 
    document.getElementById("sonuc").innerHTML = memoryDeger;
    document.getElementById("icerik").value = "";
    sonDeger="";
    memoryIsaret="";
    console.log("sonDeger :"+sonDeger)
    console.log("memoryDeger :"+memoryDeger)
       }
      
  }
function mToplamHafiza(deger){
  console.log("-----------------")  
  var hafizaTopla=0;
  if (deger=="MR" && hafiza.length>0 ){
  for (let index = 0; index < hafiza.length; index++) {
    console.log(hafiza[index]);
    hafizaTopla += Number(hafiza[index])
      }
  memoryDeger=hafizaTopla; 
  //memoryIsaret=="=";    
  document.getElementById("sonuc").innerHTML = "MR="+ memoryDeger//+memoryIsaret; 
  hafizaTopla==""
  sonDeger="";
  //memoryDeger="";

  console.log("MR Toplam :"+hafizaTopla); 
  console.log("memoryDeger :"+memoryDeger) 
  console.log("memory işaret :"+memoryIsaret)
  console.log("son deger  :"+sonDeger)
  
}
}
function mSilHafiza(deger){
  if (deger=="MC" && hafiza.length>0){
    hafiza=[]
    document.getElementById("sonuc").innerHTML =""; 
    document.getElementById("icerik").value = "";
    memoryDeger=="" 
    memoryIsaret==""
  }
  console.log("*****hafıza Silindi***********")
}
 

