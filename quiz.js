function myfuncs() {
let btn = document.getElementById("btn").checked;
    if(document.getElementById("btns").checked) {
        document.getElementById("demo").innerHTML = "correct";
      document.getElementById("btns").style.accentColor = "lightgreen";  document.getElementById("demo").style.color = "green";
    }
    
    if(document.getElementById("btn").checked) {
        document.getElementById("demo").innerHTML = "wrong" + " " + "the answer is Russia" ;
     document.getElementById("btn").style.accentColor = "red";
      document.getElementById("demo").style.color = "red";
    }
    
    if(document.getElementById("bt").checked) {
        document.getElementById("demo").innerHTML = "wrong" + " " + "the answer is Russia" ;
     document.getElementById("bt").style.accentColor = "red";   document.getElementById("demo").style.color = "red";
    }
    
    if(document.getElementById("btd").checked) {
        document.getElementById("demo").innerHTML = "wrong" + " " + "the answer is Russia" ;
        document.getElementById("demo").style.color = "red";
        document.getElementById("btd").style.accentColor = "red";
    }
    
    }
    function mybtn() {
        if(document.getElementById("button1").checked) {
            document.getElementById("null").innerHTML = "correct";
            document.getElementById("null").style.color = "green";
        document.getElementById("button1").style.accentColor = "lightgreen";
        }
        if(document.getElementById("button2").checked) {
            document.getElementById("null").innerHTML = "wrong" + " " + "the answer is Vatican" ;
            document.getElementById("null").style.color = "red";
        document.getElementById("button2").style.accentColor = "red";
        }
        if(document.getElementById("button3").checked) {
            document.getElementById("null").innerHTML = "wrong" + " " + "the answer is Vatican" ;
            document.getElementById("null").style.color = "red";
        document.getElementById("button1").style.accentColor = "red";
        }
        if(document.getElementById("button3").checked) {
            document.getElementById("null").innerHTML = "wrong" + " " + "the answer is Vatican" ;
            document.getElementById("null").style.color = "red";
        document.getElementById("button3").style.accentColor = "red";
        }
        if(document.getElementById("button4").checked) {
            document.getElementById("null").innerHTML = "wrong" + " " + "the answer is Vatican" ;
            document.getElementById("null").style.color = "red";
        document.getElementById("button4").style.accentColor = "red";
        }
    }
    function myclick() {
        if(document.getElementById("click1").checked) {
          document.getElementById("write").innerHTML = "ስህተት" + " " + "መልሱ አሌክሳንደር ግራህምቤል ነው";
            document.getElementById("write").style.color = "red";
        document.getElementById("click1").style.accentColor = "red";  
        }
        if(document.getElementById("click2").checked) {
          document.getElementById("write").innerHTML = "ስህተት" + " " + "መልሱ አሌክሳንደር ግራህምቤል ነው";
            document.getElementById("write").style.color = "red";
        document.getElementById("click2").style.accentColor = "red";  
        }
        if(document.getElementById("click3").checked) {
          document.getElementById("write").innerHTML = "ስህተት" + " " + "መልሱ አሌክሳንደር ግራህምቤል ነው";
            document.getElementById("write").style.color = "red";
        document.getElementById("click3").style.accentColor = "red";  
        }
        if(document.getElementById("click").checked) {
          document.getElementById("write").innerHTML = "መልሱ ትክክል ነው";
            document.getElementById("write").style.color = "green";
        document.getElementById("click").style.accentColor = "lightgreen";  
        }
        if(document.getElementById("click").checked) {
          document.getElementById("write").innerHTML = "መልሱ ትክክል ነው";
            document.getElementById("write").style.color = "green";
        document.getElementById("click").style.accentColor = "lightgreen";  
        }
    }
    function myding() {
        if(document.getElementById("ding1").checked) {
      document.getElementById("dong").innerHTML = "ስህተት" + " " + "መልሱ ቶክዮ ነው";
      document.getElementById("dong").style.color = "red";
      document.getElementById("ding1").style.accentColor = "red";
        }
        if(document.getElementById("ding2").checked) {
      document.getElementById("dong").innerHTML = "ስህተት" + " " + "መልሱ ቶክዮ ነው";
      document.getElementById("dong").style.color = "red";
      document.getElementById("ding2").style.accentColor = "red";
        }
        if(document.getElementById("ding3").checked) {
      document.getElementById("dong").innerHTML = "ትክክል";
      document.getElementById("dong").style.color = "green";
      document.getElementById("ding3").style.accentColor = "lightgreen";
        }
        if(document.getElementById("ding4").checked) {
      document.getElementById("dong").innerHTML = "ስህተት" + " " + "መልሱ ቶክዮ ነው";
      document.getElementById("dong").style.color = "red";
      document.getElementById("ding4").style.accentColor = "red";
      
        }
    }
    function mylast() {
        if(document.getElementById("last1").checked) {
         document.getElementById("explore").innerHTML = "ስህተት መልሱ ማጄላን ነው";
         document.getElementById("explore").style.color = "red";
         document.getElementById("last1").style.accentColor = "red";
        }
        if(document.getElementById("last2").checked) {
         document.getElementById("explore").innerHTML = "ስህተት መልሱ ማጄላን ነው";
         document.getElementById("explore").style.color = "red";
         document.getElementById("last2").style.accentColor = "red";
        }
        if(document.getElementById("last3").checked) {
         document.getElementById("explore").innerHTML = "ስህተት መልሱ ማጄላን ነው";
         document.getElementById("explore").style.color = "red";
         document.getElementById("last3").style.accentColor = "red";
        }
        if(document.getElementById("last4").checked) {
         document.getElementById("explore").innerHTML = "ትክክል ነው";
         document.getElementById("explore").style.color = "green";
         document.getElementById("last4").style.accentColor = "lightgreen";
        }
    }
   
  
   
        

      
