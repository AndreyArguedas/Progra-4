/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {
    $("#esconder").click(function () {
        $("p").hide();
    });
    
    $("#esconderLabel").click(function () {
        $("span").hide();
    });

    $("#barra").click(function () {
        $("button").select();
    });

    $("#tabla").click(function () {
        $("td").append("<p>add</p>");
    });
    
});
