/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
let disks = [
    { id:"disk - 1",width: 100,height:20},
    { id:"disk - 2",width: 80,height:18},
    { id:"disk - 3",width: 60,height:16}
];
 
let towers =[
    { id:"tower - 1",disks:[...disks]},
    { id:"tower - 2",disks:[]},
    { id:"tower - 3",disks:[]}
];
let currentMove = null;
document.getElementByld("start-button").addEventListener("click",startGame);

function startGame(){
    towers.forEach(tower =>{
        tower.disks.forEach(disk =>{
            document.getElementByld(disk.id).style.left = '$(tower.id === "tower-1"?50:0)%';
        });
    });
    moveDisk(towers[0].disks.pop(),towers[1]);
}
function moveDisk(disk,targetTower){
    currentMove = [disk,targetTower];
    document.getElementByld(disk.id).classList.add("moving");
    setTimeout(() =>{
        document.getElementByld(disk.id).classList.remove("moving");
        targetTower.disks.push(disk);
        document.getElementByld(disk.id).style.left = '50%';
        if(towers[2].disks.length === 3){
                alert("Congratulations!You won!");
            }else{
                moveNextDisk();
            }
           },500);
 }
 function moveNextDisk(){
     let fromTower,toTower;
     for(let i = 0;i < towers.length;i++){
         if(towers[i].disks.length > 0){
             fromTower = towers[i];
             break;
         }
     }
     moveDisk(fromTower.disks.pop(),toTower);
 }
 moveNextDisk();
                
                

