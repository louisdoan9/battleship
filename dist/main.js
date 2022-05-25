(()=>{"use strict";class r{constructor(){this.boardArray=[["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""]],this.gameStatus=!0}addShip(r,e,t,o){if(e=parseInt(e),t=parseInt(t),"h"===o&&this.checkMoveH(r,e,t))this.addShipH(r,e,t);else{if("v"!==o||!this.checkMoveV(r,e,t))throw"Error, cannot place here!";this.addShipV(r,e,t)}}addShipH(r,e,t){let o=0;for(;o<r;)this.boardArray[e][t+o]="o",o+=1}addShipV(r,e,t){let o=0;for(;o<r;)this.boardArray[e+o][t]="o",o+=1}checkMoveH(r,e,t){let o=0;for(;o<r;){if(""!==this.boardArray[e][t+o])return!1;o+=1}return!0}checkMoveV(r,e,t){let o=0;for(;o<r;){if(""!==this.boardArray[e+o][t])return!1;o+=1}return!0}fireAt(r,e){!0===this.gameStatus&&("o"===this.boardArray[r][e]?this.boardArray[r][e]="x":""===this.boardArray[r][e]&&(this.boardArray[r][e]="m"),this.checkWin())}checkWin(){for(const r of this.boardArray)for(const e of r)if("o"===e)return;console.log("Game Over!"),this.gameStatus=!1}resetBoard(){this.boardArray=[["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""],["","","","","",""]]}}function e(r,e){return"boardDisplay1"===e?t(r,0,r.player1Board.boardArray):"boardDisplay2"===e?t(r,1,r.player2Board.boardArray):void 0}function t(r,e,t){let a=0,i=document.createElement("div");for(;a<6;){let s=o(r,e,t,a);i.appendChild(s),a+=1}return i}function o(r,e,t,o){let i=document.createElement("div");return i.setAttribute("class",`column${o}`),i.addEventListener("click",(()=>{!function(r,e,t,o){if(!1===r.fireMode){let i=o.className.slice(-1),s=o.parentNode.className.slice(-1);r.addShips(s,i,"v",e),a(e,t)}}(r,e,t,i)})),i.addEventListener("contextmenu",(o=>{o.preventDefault(),function(r,e,t,o){if(!1===r.fireMode){let i=o.className.slice(-1),s=o.parentNode.className.slice(-1);r.addShips(s,i,"h",e),a(e,t)}}(r,e,t,i)})),i}function a(r,e){let t=0,o=0;for(;t<6;){for(o=0;o<6;){let a=document.querySelectorAll(`#boardDisplay${r+1} .row${t} .column${o}`);for(const i of a)i.innerText="",(0===r||"o"!==e[t][o])&&(i.innerText=e[t][o]);o+=1}t+=1}}function i(r,e,t,o,a,i){for(const d of r)d.addEventListener("click",(()=>{s(e,t,o,a,i)}))}function s(r,e,t,o,i){!0===r.player1Board.gameStatus&&!0===r.player2Board.gameStatus&&(e.fireAt(t,o),a(i,e.boardArray))}function d(r,e){return"boardDisplay1"===e?l(r,0,r.player1Board.boardArray):"boardDisplay2"===e?l(r,1,r.player2Board.boardArray):void 0}function l(r,e,t){let o=0,a=document.createElement("div");for(;o<6;){let r=n(0,0,0,o);a.appendChild(r),o+=1}return a}function n(r,e,t,o){let a=document.createElement("div");return a.setAttribute("class",`column${o}`),a}function c(r,e,t){let o=Math.floor(2*Math.random()+0);0===o?o="v":1===o&&(o="h");try{let i=Math.floor(6*Math.random()+0),s=Math.floor(6*Math.random()+0);r.addShips(s,i,o,e),a(e,t)}catch(o){console.log(`Error: ${o}`),c(r,e,t)}}let h=new class{constructor(){this.player1Board=new r,this.player2Board=new r,this.boards=[this.player1Board,this.player2Board],this.ship1=[!1,!1],this.ship2=[!1,!1],this.ship3=[!1,!1],this.fireMode=!1}startGame(){this.player1Board.gameStatus=!0,this.player2Board.gameStatus=!0,this.ship1=[!1,!1],this.ship2=[!1,!1],this.ship3=[!1,!1],this.fireMode=!1,this.player1Board.resetBoard(),this.player2Board.resetBoard()}addShips(r,e,t,o){let a;return!1===this.ship1[o]?a=3:!1===this.ship2[o]?a=4:!1===this.ship3[o]&&(a=5),!1===this.ship1[o]?(this.boards[o].addShip(a,r,e,t),void(this.ship1[o]=!0)):!1===this.ship2[o]?(this.boards[o].addShip(a,r,e,t),void(this.ship2[o]=!0)):!1===this.ship3[o]?(this.boards[o].addShip(a,r,e,t),void(this.ship3[o]=!0)):void console.log(this.boards[o].boardArray)}};document.querySelector("#startGame").addEventListener("click",(()=>{h.startGame(prompt),document.querySelector("#boardDisplay1 ").innerHTML="",document.querySelector("#boardDisplay2 ").innerHTML="",function(r,t){let o=0;for(;o<6;){let a=e(r,t);a.setAttribute("class",`row${o}`),document.querySelector(`#${t}`).appendChild(a),o+=1}}(h,"boardDisplay1"),function(r,e){let t=0;for(;t<6;){let o=d(r,e);o.setAttribute("class",`row${t}`),document.querySelector(`#${e}`).appendChild(o),t+=1}c(r,1,r.player2Board.boardArray),c(r,1,r.player2Board.boardArray),c(r,1,r.player2Board.boardArray)}(h,"boardDisplay2")})),document.querySelector("#fireAt").addEventListener("click",(()=>{!function(r){let e;r.fireMode=!0;let t=0,o=0;for(;t<6;){for(o=0;o<6;)e=document.querySelectorAll(`#boardDisplay1 .row${t} .column${o}`),i(e,r,r.player1Board,t,o,0),e=document.querySelectorAll(`#boardDisplay2 .row${t} .column${o}`),i(e,r,r.player2Board,t,o,1),o+=1;t+=1}}(h)})),document.querySelector("#displayShipsAI").addEventListener("click",(()=>{!function(r,e){let t=0,o=0;for(;t<6;){for(o=0;o<6;){let r=document.querySelectorAll(`#boardDisplay2 .row${t} .column${o}`);for(const a of r)a.innerText=e[t][o];o+=1}t+=1}}(0,h.player2Board.boardArray)}))})();