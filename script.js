//it should be very obvious i dont know what im doing
var height;
var tileH;
var width;
var tileW;
var bf = (document.getElementById("bf").defaultValue = 0);
//thats a lot of variables
function heightCalc() {
    bfCalc();
    height = document.getElementById("H").value * 20;
    tileH = document.getElementById("H").value * 16;
    console.log(height);
    //why the fuck does height come back as undefined (2/11/25)
    //console.log(tileH);
}
//future dino here: i didn't realise you could define a variable before you assigned it a value.
function widthCalc() {
    width = document.getElementById("W").value * 20;
    tileW = document.getElementById("W").value * 16;
    //console.log(width);
}

var rnd = (document.getElementById("rnd").defaultValue = 1);
function rndCalc() {
    rnd = document.getElementById("rnd").value;
    //console.log(rnd);
    if (rnd === "0") {
        document.getElementById("rndzero").style.display = "block";
    } else {
        document.getElementById("rndzero").style.display = "none";
    }
}
//https://www.youtube.com/watch?v=T8O_UIsdZHA
//THIS FUCKING CODE HAS BEEN TORTURING ME FOR HOURS I HATE IT HERE
//now i need to do bftiles. this is going to be a pain in the ass
//look at my bftile equations dawg i have trouble even doing this on a calculator:
//Width(px) = ((w + (bf x 2)) x 20) x rnd
//Height(px) = ((h + (bf x 2)) x 20 x L) + (h x 16) + 1
function bfCalc() {
    bf = document.getElementById("bf").value * 2 * 20;
    //console.log(bf);
    //for some reason i have to calculate the bftiles and the width/height seperately and then add them up
    //in the final calculation, instead of just having the program do pedmas. honestly, i'm not even mad at that
    //its very relateable. i also struggle with pedmas. #machinexreader #posic+ #objectum #machinesarepeopletoo
}

let layer = 10;
//default value is 10
const Layer1 = document.getElementById("Layer1");
const Layer2 = document.getElementById("Layer2");
const display = document.getElementById("display");
layerMath();
//idk man. load bearing function call before definition
function layerMath() {
    display.textContent = layer;
    //console.log(layer);
}
Layer1.addEventListener("click", () => {
    layer = 10;
    layerMath();
});
Layer2.addEventListener("click", () => {
    layer = 20;
    layerMath();
});
//theres probably a more efficient way to do this. i know nothing about JS though

const sumHD = document.getElementById("sumdisplayH");
const sumWD = document.getElementById("sumdisplayW");
const wpd = document.getElementById("pdw");
const hpd = document.getElementById("pdh");
function calc() {
    document.getElementById("answer").style.display = "block";
    let sumH = (height + bf) * layer + tileH + 1;
    //console.log(sumH);
    let sumW = (width + bf) * rnd;
    //console.log(sumW);
    //i fucking love variables!!!! lets make 292292901928 variables!!!
    //every time someone is rude to me i add a new variable /j
    sumHD.textContent = sumH;
    sumWD.textContent = sumW;
    //as of 4/11/25 this works perfectly. at least for a 1,1 rnd:2 bftiles:1 layer 1 tile. it's 5:43 pm (NZST)
    //I will now attempt to add a preview size
    wpd.textContent = tileW;
    hpd.textContent = tileH;
    //hpd... like.. . the disorder...
    //ok it looks to be working. 4/11/25 6:56 pm
}
//just so you guys know, calc is short for calculator

function secret() {
    if (document.getElementById("secretimage").style.display == "none") {
        document.getElementById("secretimage").style.display = "block";
    } else if (document.getElementById("secretimage").style.display == "block") {
        document.getElementById("secretimage").style.display = "none";
    }
}
