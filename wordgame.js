function myfuncs() {
    let num = Math.floor(Math.random() * (5 -  1 + 1)) + 1;
      
    if (num >= 1 && num < 2) {
        document.getElementById("img").src = "1353966.png";
    document.getElementById("name").innerHTML = "ውሻ";
    console.log(num);
    }
    if (num >= 2 && num < 3) {
        document.getElementById("img").src = "20230809_164253.png";
    document.getElementById("name").innerHTML = "ፊኛ";
    console.log(num)
    }
    if (num >= 3 && num < 4) {
        document.getElementById("img").src = "20230809_175843.png";
    document.getElementById("name").innerHTML = "ሂሊኮፕተር";
    console.log(num)
    }
    if (num >= 4 && num <= 5) {
        document.getElementById("img").src = "20230809_170152.png";
    document.getElementById("name").innerHTML = "መኪና";
    console.log(num)
    }
}
