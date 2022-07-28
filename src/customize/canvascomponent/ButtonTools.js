import {
    ButtonContainer,
    InputLabel,
    Label,
    Icon,
    Button,
    ColorButton,
    ToolsContainer
  } from "./ElementsDrawing";
  import html2canvas from "html2canvas";
  import BtnColor from "./ComponentColor";
  import {
    faPencilAlt,
    faSlash,
    faEraser,
    faFillDrip,
    faPalette,
    faTriangleCircleSquare,
    faExclamationTriangle
  } from "@fortawesome/free-solid-svg-icons";
  import {
    faCircle,
    faSquare,
    faSave
  } from "@fortawesome/free-regular-svg-icons";
  //------------------------------------------------------
  const rectangle = (
    <svg
      style={{ pointerEvents: "none" }}
      xmlns="http://www.w3.org/2000/svg"
      width="400" height="20"
    >
        <rect width="50" height="20"  stroke="black"
        strokeWidth="3"
        fill="transparent" border="2" />

      
    </svg>
  );
  //------------------------------------------------
  const ButtomTools = ({
    inRotation,
    change,
    lineColor,
    clearAll,
    downloadImg,
    getFillColor,
    dropper,
    moveColor
  }) => {
    //-------------------------------------------
    function handleClik(e) {
      e.target.previousSibling.click();
    }
    function printDiv2(div)
    {
      const screenshotTarget = document.querySelector("#canvasimgdownload");
      html2canvas(screenshotTarget).then((Canvas) => {
        const baseimg = Canvas.toDataURL("image/png");
        var anchor = document.createElement("a");
        anchor.setAttribute("href", baseimg);
        anchor.setAttribute("download", "my-Image.png");
        anchor.click();
        anchor.remove();
      });
    }
    //-------------------------------------------
    return (
      <>
      <ButtonContainer onClick={inRotation}>
        <ToolsContainer>
          <InputLabel
            type={"radio"}
            id={"normal"}
            name={"type"}
            onChange={change}
          />
          <Label onClick={handleClik}>
            <Icon icon={faPencilAlt} />
          </Label>
          
          {/* <InputLabel
            type={"radio"}
            id={"straightLine"}
            name={"type"}
            onChange={change}
          />
          <Label onClick={handleClik}>
            <Icon icon={faSlash} />
          </Label> */}
          <InputLabel
            type={"radio"}
            id={"circle"}
            name={"type"}
            onChange={change}
          />
          <Label onClick={handleClik}>
            <Icon icon={faCircle} />
          </Label>
          <InputLabel
            type={"radio"}
            id={"square"}
            name={"type"}
            onChange={change}
          />
          <Label onClick={handleClik}>
            <Icon icon={faSquare} />
          </Label>
          <InputLabel
            type={"radio"}
            id={"trangle"}
            name={"type"}
            onChange={change}
          />
          <Label onClick={handleClik}><Icon icon={faExclamationTriangle} /></Label>
          <InputLabel
            type={"radio"}
            id={"rectangle"}
            name={"type"}
            onChange={change}
          />
          <Label onClick={handleClik}>{rectangle}</Label>
          <InputLabel
            type={"radio"}
            id={"eraser"}
            name={"type"}
            onChange={change}
          />
          <Label onClick={handleClik}>
            <Icon icon={faEraser} />
          </Label>
          {/* <InputLabel
            type={"radio"}
            id={"filled"}
            name={"type"}
            onChange={change}
          />
          <Label>
            <Icon icon={faFillDrip} />
            <BtnColor
              funcColor={getFillColor}
              dropper={dropper}
              moveColor={moveColor}
              type={"fill"}
            />
          </Label>
          <ColorButton>
            <Icon icon={faPalette} />
            <BtnColor
              funcColor={lineColor}
              dropper={dropper}
              moveColor={moveColor}
              type={"pencil"}
            />
          </ColorButton> */}
          <div>

          </div>
        </ToolsContainer>
        <Button onClick={clearAll} style={{border:"2px solid"}}>ClearAll</Button>
        <Button style={{ height: "33px" }}  onClick={(e)=>printDiv2(e)}  >
          <Icon icon={faSave} />
        </Button>
<div style={{width:"100%",height:"100px",textAlign:"center",wordBreak:"break-word "}}>x:120px,y:100px
x:120px,y:100px
x:120px,y:100px x:120px,y:100px
</div>
      </ButtonContainer>

      </>
    );
  };
  
  export default ButtomTools;
  