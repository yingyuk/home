/*
 * @Author: yingyuk
 * @Date:   2016-04-07 22:01:16
 * @Last Modified by:   yingyuk
 * @Last Modified time: 2016-04-08 22:16:10
 */

'use strict';
var canvasHeight = 500;
var canvasWidth = 800;
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
canvas.height = canvasHeight;
canvas.width = canvasWidth;

var image = new Image();
image.src = "images/Nepal.jpg";


image.onload = function(e) {
    canvasInit();
}
var radius = 70;
var clippingRegion = {
    x: 0,
    y: 0,
    r: radius
}

function canvasInit() {
    clippingRegion = {
        x: radius + Math.random() * (canvasWidth - 2 * radius),
        y: radius + Math.random() * (canvasHeight - 2 * radius),
        r: radius
    };
    draw(image, clippingRegion);
}

function draw(image, clippingRegion) {
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    context.save();
    setClipRegion(clippingRegion);
    context.drawImage(image, 0, 0, canvasWidth, canvasHeight, 0, 0, 800, 500);
    context.restore();
}

function setClipRegion(clippingRegion) {
    context.beginPath();
    context.arc(clippingRegion.x, clippingRegion.y, clippingRegion.r, 0, Math.PI * 2);
    context.clip();
}

function show() {
    var timer = setInterval(function() {
        clippingRegion.r += 20;
        draw(image, clippingRegion);

        if (clippingRegion.r > (canvasHeight + canvasWidth)) {
            clearInterval(timer);

        }
    }, 30)
}

function reset() {
    canvasInit();
}
