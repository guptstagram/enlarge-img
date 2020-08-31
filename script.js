const imageUploaded=(imgInput)=>{
    // console.log(imgInput.files[0]);
    let reader = new FileReader();
    reader.onload=()=>{
        // console.log(reader.result);
        document.querySelector("#upldImg").src=reader.result;
    }
    reader.readAsDataURL(imgInput.files[0]);
}

const drawCanvasButtonClicked=()=>{
    let cvs=document.querySelector("#imgcanvas");
    let ctx=cvs.getContext("2d");
    let img=document.querySelector("#upldImg");
    ctx.canvas.width  = document.querySelector("#upldImg").width;
    ctx.canvas.height = document.querySelector("#upldImg").height;
    ctx.drawImage(img,0,0);
}

const readCanvasPixels=()=>{
    let vctcvs=document.querySelector("#vctcanvas");
    let imgcvs=document.querySelector("#imgcanvas");
    let vctctx=vctcvs.getContext("2d");
    let imgctx=imgcvs.getContext("2d");
    vctctx.canvas.width  = imgctx.canvas.width;
    vctctx.canvas.height = imgctx.canvas.height;

    // let imgclr=imgctx.getImageData(0, 0, 1, 1).data;
    // console.log(imgclr);
    // vctctx.putImageData(imgctx.getImageData(0, 0, 1, 1),0,0,0,0,1,1);
    // console.log(vctctx.getImageData(0,0,1,1));
    console.log(imgctx.canvas.height,imgctx.canvas.width);
    for(let i=0;i<imgctx.canvas.height;i++){
        for(let j=0;j<imgctx.canvas.width;j++){
            console.log(i,j);
            let imgclr=imgctx.getImageData(i, j, i+1, j+1);
            vctctx.putImageData(imgclr,0,0,i,j,1,1);
        }
    }
    console.log("done");
}