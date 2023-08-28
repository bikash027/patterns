// import { Pattern1 } from "./pattern1.js";
// import { Pattern2 } from "./pattern2.js";
// import { Pattern3 } from "./pattern3";
import { Pattern4 } from "./pattern4";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const WIDTH = 500;
const HEIGHT = 500;
const PINK = 'rgb(255, 125, 251)';
const BLUE = 'rgb(3, 158, 214)';
const RADIUS = 200;

ctx.translate(WIDTH/2, HEIGHT/2);
ctx.scale(1, -1);

ctx.strokeStyle = PINK;
ctx.fillStyle = PINK;
const thita = Math.PI/6;
// const pattern = new Pattern1(RADIUS, thita / 2);
// const pattern = new Pattern2(RADIUS, thita / 2);
// const pattern = new Pattern3(RADIUS, thita / 2);
const pattern = new Pattern4(RADIUS, thita / 2);


for(let i = 0; i < 2 * Math.PI / thita; i++){
    ctx.save();
    ctx.rotate(i * thita);
    ctx.beginPath();
    ctx.fill(pattern.path);
    ctx.restore();
}





