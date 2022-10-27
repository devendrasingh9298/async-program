// const userLeft = false;
// const userWatchingMeme = true;

// function watchTutorialCallback(callback, errorCallback){
//     if(userLeft){
//         errorCallback({
//             name : "user left error",
//             message : ":("
//         });
//     }else if(userWatchingMeme){
//         errorCallback({
//             name : "user watching cat meme",
//             message : "cat supermacy"
//         });
//     }else{
//         callback("Tumbs up yaya")
//     }
// };

// const errorCallbackFn = (msg)=>{
//     console.log(msg);
// }

// const callbackFn = (msg) => {
//     console.log(msg);
// }

// watchTutorialCallback(callbackFn, errorCallbackFn);


/* Promises Example */

const datas = [
    {name:'shubham', profession:'software'},
    {name:'dev',profession:'hardware'}
];

function getDatas(){
    setTimeout(() => {
        let output = "";
        datas.forEach((data) => {
            output += `<li>${data.name}</li>`;
        });
        document.body.innerHTML = output;
    },1000);
};
function createData(newData,callback){
    setTimeout(() => {
        datas.push(newData);
        callback();
    },2000);
}

// getDatas();
createData({name:'shivam',profession:'software'}, getDatas);
// getDatas();