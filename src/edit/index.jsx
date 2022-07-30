import React from 'react'
import {fabric} from "fabric"
import { useState } from 'react'
import { useEffect } from 'react'
import html2canvas from 'html2canvas'
import 'fabric-history';

const Edit = () => {
 
   const [value,setValue]=useState('');
   const [width,setwidth]=useState('');
   const [height,setheight]=useState('')
   const [radius,setradius]=useState('');
   const [menu,setmenu]=useState('hide')
   const [data,setdata]=useState({
    key:"",
    dim:"",
    circle:"",
    tri:"",
    eli:"",
    rect:""
   })
   const [getdata,setgetdata]=useState([]);
   const [msg,setmsg]=useState('')
   const [mini,setmini]=useState(true)
   const [map,setmap]=useState(0);
   const [arre,setArr]=useState([ new fabric.Rect({
    width:30, height:30,
    left:10,
    top:10,
    fill:'',
    
    stroke: 'blue',
    // fill:'',  stroke: 'blue',
    strokeWidth: 2
}), new fabric.Rect({
  width:30, height:30,
  left:10,
  top:10,
  fill:'',
  
  stroke: 'blue',
  // fill:'',  stroke: 'blue',
  strokeWidth: 2
}), new fabric.Rect({
  width:30, height:30,
  left:10,
  top:10,
  fill:'',
  
  stroke: 'blue',
  // fill:'',  stroke: 'blue',
  strokeWidth: 2
}), new fabric.Rect({
  width:30, height:30,
  left:10,
  top:10,
  fill:'',
  
  stroke: 'blue',
  // fill:'',  stroke: 'blue',
  strokeWidth: 2
}), new fabric.Rect({
  width:30, height:30,
  left:10,
  top:10,
  fill:'',
  
  stroke: 'blue',
  // fill:'',  stroke: 'blue',
  strokeWidth: 2
}), new fabric.Rect({
  width:30, height:30,
  left:10,
  top:10,
  fill:'',
  
  stroke: 'blue',
  // fill:'',  stroke: 'blue',
  strokeWidth: 2
})])
  
   const aaa=value;
   document.addEventListener("DOMContentLoaded", function () {
    var can = document.getElementById("c");

   function resizeCanvas() {
     can.style.width = window.innerWidth + "px";
     setTimeout(function() {
       can.style.height = window.innerHeight + "px";
     }, 0);
   };
   window.onresize = resizeCanvas;
   resizeCanvas();

  });
   
   // Webkit/Blink will fire this on load, but Gecko doesn't.
   
   // So we fire it manually...
const handle=()=>{
var canvas = new fabric.Canvas('c');



var r = new fabric.Rect({
    top: 10,
    border:"1px solid",
    //   left: 10,
    //   width: 30,
    //   height: 30,
      fill: 'red',
      stroke: 'blue',
      strokeWidth: 0.5
  });

  var rec = new fabric.Rect({
    width:30, height:30,
    left:10,
    top:10,
    fill:'',
    
    stroke: 'blue',
    // fill:'',  stroke: 'blue',
    strokeWidth: 2
});
var rec1 = new fabric.Rect({
  width:30, height:30,
  left:10,
  top:10,
  fill:'',
  
  stroke: 'blue',
  // fill:'',  stroke: 'blue',
  strokeWidth: 2
});
 var rec2 = new fabric.Rect({
  width:30, height:30,
  left:10,
  top:10,
  fill:'',
  
  stroke: 'blue',
  // fill:'',  stroke: 'blue',
  strokeWidth: 2
});
 var rec3 = new fabric.Rect({
  width:30, height:30,
  left:10,
  top:10,
  fill:'',
  
  stroke: 'blue',
  // fill:'',  stroke: 'blue',
  strokeWidth: 2
});
 var rec4 = new fabric.Rect({
  width:30, height:30,
  left:10,
  top:10,
  fill:'',
  
  stroke: 'blue',
  // fill:'',  stroke: 'blue',
  strokeWidth: 2
});
 var rec5 = new fabric.Rect({
  width:30, height:30,
  left:10,
  top:10,
  fill:'',
  
  stroke: 'blue',
  // fill:'',  stroke: 'blue',
  strokeWidth: 2
});
 var rec6 = new fabric.Rect({
  width:30, height:30,
  left:10,
  top:10,
  fill:'',
  
  stroke: 'blue',
  // fill:'',  stroke: 'blue',
  strokeWidth: 2
});
 var rec7 = new fabric.Rect({
  width:30, height:30,
  left:10,
  top:10,
  fill:'',
  
  stroke: 'blue',
  // fill:'',  stroke: 'blue',
  strokeWidth: 2
});
  
  
  
var cir = new fabric.Circle({
  	top: 10,
    left: 50,
    radius: 15,
    fill: '',
    stroke: 'blue',
    strokeWidth: 2
});

var cir1 = new fabric.Circle({
  top: 10,
  left: 50,
  radius: 15,
  fill: '',
  stroke: 'blue',
  strokeWidth: 2
});
var cir2 = new fabric.Circle({
  top: 10,
  left: 50,
  radius: 15,
  fill: '',
  stroke: 'blue',
  strokeWidth: 2
});
var cir3 = new fabric.Circle({
  top: 10,
  left: 50,
  radius: 15,
  fill: '',
  stroke: 'blue',
  strokeWidth: 2
});
var cir4 = new fabric.Circle({
  top: 10,
  left: 50,
  radius: 15,
  fill: '',
  stroke: 'blue',
  strokeWidth: 2
});
var cir5 = new fabric.Circle({
  top: 10,
  left: 50,
  radius: 15,
  fill: '',
  stroke: 'blue',
  strokeWidth: 2
});
var cir6 = new fabric.Circle({
  top: 10,
  left: 50,
  radius: 15,
  fill: '',
  stroke: 'blue',
  strokeWidth: 2
});
var cir7 = new fabric.Circle({
  top: 10,
  left: 50,
  radius: 15,
  fill: '',
  stroke: 'blue',
  strokeWidth: 2
});
var cir8 = new fabric.Circle({
  top: 10,
  left: 50,
  radius: 15,
  fill: '',
  stroke: 'blue',
  strokeWidth: 2
});
var cir9 = new fabric.Circle({
  top: 10,
  left: 50,
  radius: 15,
  fill: '',
  stroke: 'blue',
  strokeWidth: 2
});
var cir10 = new fabric.Circle({
  top: 10,
  left: 50,
  radius: 15,
  fill: '',
  stroke: 'blue',
  strokeWidth: 2
});
var tri = new fabric.Triangle({
  	top: 10,
    left: 85,
    width: 30, 
    height: 30,
    fill: '',
    stroke: 'blue',
    strokeWidth: 2
}); 
var tri1 = new fabric.Triangle({
  top: 10,
  left: 85,
  width: 30, 
  height: 30,
  fill: '',
  stroke: 'blue',
  strokeWidth: 2
});
 var tri2 = new fabric.Triangle({
  top: 10,
  left: 85,
  width: 30, 
  height: 30,
  fill: '',
  stroke: 'blue',
  strokeWidth: 2
}); 
var tri3 = new fabric.Triangle({
  top: 10,
  left: 85,
  width: 30, 
  height: 30,
  fill: '',
  stroke: 'blue',
  strokeWidth: 2
}); 
var tri4 = new fabric.Triangle({
  top: 10,
  left: 85,
  width: 30, 
  height: 30,
  fill: '',
  stroke: 'blue',
  strokeWidth: 2
}); 
var tri5 = new fabric.Triangle({
  top: 10,
  left: 85,
  width: 30, 
  height: 30,
  fill: '',
  stroke: 'blue',
  strokeWidth: 2
}); 
var tri6 = new fabric.Triangle({
  top: 10,
  left: 85,
  width: 30, 
  height: 30,
  fill: '',
  stroke: 'blue',
  strokeWidth: 2
}); var tri7 = new fabric.Triangle({
  top: 10,
  left: 85,
  width: 30, 
  height: 30,
  fill: '',
  stroke: 'blue',
  strokeWidth: 2
}); 

var eli = new fabric.Ellipse({
  	top: 10,
    left: 120,
   /* Try same values rx, ry => circle */
    rx: 20,
    ry: 15,
    fill: '',
    stroke: 'blue',
    strokeWidth: 2
});
var eli1 = new fabric.Ellipse({
  top: 10,
  left: 120,
 /* Try same values rx, ry => circle */
  rx: 20,
  ry: 15,
  fill: '',
  stroke: 'blue',
  strokeWidth: 2
});
var eli2 = new fabric.Ellipse({
  top: 10,
  left: 120,
 /* Try same values rx, ry => circle */
  rx: 20,
  ry: 15,
  fill: '',
  stroke: 'blue',
  strokeWidth: 2
});
var eli3 = new fabric.Ellipse({
  top: 10,
  left: 120,
 /* Try same values rx, ry => circle */
  rx: 20,
  ry: 15,
  fill: '',
  stroke: 'blue',
  strokeWidth: 2
});


function objectAddedListener(ev) {
    let target = ev.target;
    console.log(ev,'left', target.left, 'top', target.top, 'width',target.width * target.scaleX,  'height', target.height * target.scaleY,target.radius*target.scaleX);
    localStorage.setItem("data",target.top);
    console.log(ev,"a");
    setValue(target.top);
    setwidth(target.width * target.scaleX);
    setheight(target.height * target.scaleY);
    setradius(target.radius*target.scaleX)


}

  function objectMovedListener(ev) {
    let target = ev.target;
  
localStorage.clear();

localStorage.setItem("data",target.top,target.width * target.scaleX, target.height * target.scaleY);
    console.log(value,"jhjiuh",'left', target.left, 'top', target.top, 'width', target.width * target.scaleX, 'height', target.height * target.scaleY,target.radius*target.scaleX);
    setValue(target.top);
    setwidth(target.width * target.scaleX);
    setheight(target.height * target.scaleY);
    setradius(target.radius*target.scaleX)


  }

  canvas.on('object:added', objectAddedListener);
  canvas.on('object:modified', objectMovedListener);
  // canvas.on('mouse:down', objectMovedListener);

const arr=[rec,rec1,rec2,rec3,rec4,rec5,rec6,rec7, cir,cir1,cir2,cir3,cir4,cir5,cir6,cir7,cir8,cir9,cir10, tri, tri1, tri2, tri3, tri4, tri5, tri6, tri7, eli,eli1,eli2,eli3];
arr.map((data)=>{
  canvas.add(data);

})
canvas.renderAll();
canvas.on('object:scaling', (e) => {
    var o = e.target;
    if (!o.strokeWidthUnscaled && o.strokeWidth) {
      o.strokeWidthUnscaled = o.strokeWidth;
    }
  
    if (o.strokeWidthUnscaled) {
      o.strokeWidth = o.strokeWidthUnscaled / o.scaleX;
    }
  });
}


useEffect(()=>{
    handle();
},[])
const handleform=(e)=>{
  const newData = { ...data };
  newData[e.target.id] = e.target.value;
  setdata(newData);
}
const submitdata=(e)=>{
  e.preventDefault();
  const store={
    key: data.key,
    circle:data.circle,
    tri:data.tri,
    eli:data.eli,
    rect:data.rect
  
  }
  if(localStorage.getItem('store')){  array = JSON.parse(localStorage.getItem('store')) } else {
    var array = []; }
  array.push(store)
  const key=document.getElementById("key").value;
  const ac=array.filter((i,n)=>{

    
  
          return i.key===key;

  })
  setgetdata(ac)
  if(ac.length>1){
    setmsg("key already exist")
  }else{
                  localStorage.setItem("store",JSON.stringify(array))

  }
 
}
const download=()=>{
  const screenshotTarget = document.querySelector("#c");
      html2canvas(screenshotTarget).then((Canvas) => {
        const baseimg = Canvas.toDataURL("image/png");
        var anchor = document.createElement("a");
        anchor.setAttribute("href", baseimg);
        anchor.setAttribute("download", "my-Image.png");
        anchor.click();
        anchor.remove();
      });
}
const minimize=()=>{
setmini(!mini)
}

const deleteobject=()=>{
  var canvas = new fabric.Canvas('c');

console.log(canvas.getActiveObjects())
  

}
const undo=()=>{
  const canvas = new fabric.Canvas('c1');
canvas.historyInit();
  canvas.undo();
canvas.redo(); 

}
(()=>{
  var canvas = new fabric.Canvas('c1');
  const triangle=()=>{
    setmap(map+1);
    console.log("map",map)
    
    arre.slice(0,1+map).map((data)=>{
      canvas.add(data)
  
    })
  
  }
canvas.on("mouse:down",triangle)

})();


  return (
    <div>
      <div style={{display:'flex',justifyContent:"space-around"}}>
      <p>TOP:{ ((value*25.4)/96).toFixed(3)}MM</p>
      <p>WIDTH:{ ((width*25.4)/96).toFixed(3)}MM</p>
      <p>HEIGHT:{ ((height*25.4)/96).toFixed(3)}MM</p>
      <p>AREA:{((width*25.4)/96).toFixed(3)*((height*25.4)/96).toFixed(3)}</p>
      
      <p>Radius:{radius}</p>
      
<p onClick={undo}>del</p>
{/* <button onClick={triangle}>triangle</button> */}


<div class={`offcanvas offcanvas-start ${menu}`} style={{visibility:"visible"}} data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="staticBackdropLabel">Offcanvas</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" onClick={()=>setmenu('hide')}></button>
  </div>
  <div class="modal-content" style={{border:"none"}}>
      <div class="modal-header">
        <h5 class="modal-title text-dark" id="exampleModalLabel">{msg}</h5>
        <i class="bi bi-chevron-contract" onClick={minimize}></i>
      </div>
      <div class="modal-body" style={{display:`${mini?"block":"none"}`,height:"500px",overflow:"auto"}}>
      <div className='box' style={{marginTop:"10%",width:"100%"}} >
           
            <div className='drago'  >
              <form id='demo' onSubmit={(e)=>submitdata(e)} >
              <p>key:<input type="text" id="key" value={data.key} onChange={(e)=>handleform(e)}/> </p>
              <div style={{display:"flex",justifyContent:"space-around"}}>
                <div>
                  <p>Circle</p>
              <textarea id='circle' rows="5" value={data.circle} onChange={(e)=>handleform(e)}>
              
              </textarea>
              </div>
              <div>
                <p>Rectangle</p>
              <textarea id='rect' rows="5" value={data.rect} onChange={(e)=>handleform(e)}>
                rectangleA:
              </textarea>
              </div>

              </div>
              <div style={{display:"flex",justifyContent:"space-around",marginTop:"10px"}}>
                <div>
                  <p>Triangle</p>
              <textarea id='tri' rows="5" value={data.tri} onChange={(e)=>handleform(e)}>
              triangleA:
              </textarea>
              </div>
              <div>
                <p>Ellipse</p>
              <textarea id='eli' rows="5" value={data.eli} onChange={(e)=>handleform(e)}>
                Ellipse1A:
              </textarea>
              </div>
              </div>
              <br/>
              {
                getdata && getdata.slice(0,1).map((data,index)=>(
                  <div className='col-12' style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
                    <p className='4'>Key:{data.key}</p>
                    <p className='4' >circle:{data.circle}</p>
                    <p className='4'>Triangle:{data.tri}</p>
                    <p className='4'>rectangle:{data.rect}</p>
                    <p className='4'>Radius:{data.dim}</p>
                    <p className='4'>Ellipse:{data.eli}</p>
                  </div>
                ))
              }
            
              <button type='submit' style={{backgroundColor:"royalblue",color:"#fff",border:"none",width:"100px",height:"40px",borderRadius:"3px",float:"right"}}>submit</button>
              </form>
          
            </div>
        </div>
      </div>
      <div class="modal-footer">
       
      </div>
    </div>  
</div>
      </div>
      <div style={{display:"flex"}}>
      <button class="btn btn-primary" onClick={()=>setmenu('show')} type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
<i class="bi bi-list"></i>
</button>
      <button class="btn btn-primary " onClick={download}>
        <i class="bi bi-download"></i>
      </button>
      <button class="btn btn-primary " onClick={deleteobject}>
      <i class="bi bi-trash3-fill"></i>
      </button>

      </div>
    

        <div className='col-12' style={{display:"flex"}}>
         
            <div className='col-12' style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                
    <canvas id="c" width="1300" height="600" style={{border:"1px solid"}}></canvas>
            </div>

        </div>
        <canvas id="c1" width="1300" height="600" style={{border:"1px solid"}}></canvas>

    </div>
  )
}

export default Edit