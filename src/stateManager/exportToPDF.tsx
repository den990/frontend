import jsPDF from "jspdf";

const exportWidth = 1458;
const exportHeight = 889;

function setElementToPagePDF(block: Block, doc:jsPDF) {

    if (block.content.data.type === 'picture'){
        let imgData2 = block.content.data.url;
        doc.addImage(imgData2, 'jpg', + block.position.x, + block.position.y, + block.width, +block.height)
    }
    else if (block.content.data.type === "text"){
        let CanEl:HTMLCanvasElement = document.createElement('canvas')
        CanEl.id = 'picID'
        let ctx = CanEl.getContext("2d")
        let startPosition = 0
        let sLine = ""
        let lineNumber = 0
        CanEl.height = parseInt(String(block.content.data.fontSize)) * 0.9
        while (startPosition <= block.content.data.symbols.length) {
            if (block.content.data.symbols[startPosition] === '\n' ||
                startPosition === block.content.data.symbols.length) {
                CanEl.width = sLine.length * parseInt(String(block.content.data.fontSize)) * 0.6
                if (ctx != null) {
                    ctx.fillStyle = block.content.data.fontColor
                    let styleT = '';
                    ctx.font = styleT + String(block.content.data.fontSize) + "px " + block.content.data.fontFamily;
                    ctx.fillText(sLine, 0, parseInt(String(block.content.data.fontSize))*0.75)
                }
                let imgData2 = CanEl.toDataURL('image/png')
                doc.addImage(imgData2, 'PNG',
                    +block.position.x+parseInt(String(block.content.data.fontSize)) * 0.05, +block.position.y
                    + parseInt(String(block.content.data.fontSize)) * lineNumber + parseInt(String(block.content.data.fontSize))
                    * 0.15 * (lineNumber + 1),
                    +CanEl.width, +CanEl.height)
                lineNumber += 1
                sLine = ""
            }
            else
                sLine += block.content.data.symbols[startPosition]
            startPosition += 1
        }
    }
    return doc
}

function setPagePDF(slide: Slide, doc:jsPDF) {
    if (slide.background.type === 'picture') {
        let imgData2 = slide.background.code
        doc.addImage(imgData2, 'PNG', +0, +0, +exportWidth, +exportHeight)
    }
    if (slide.background.type === 'color') {
        doc.setFillColor(slide.background.code)
        doc.rect(0, 0, exportWidth, exportHeight, "F")
    }
    for (let i = 0; i < slide.blockList.length; i++) {
        doc = setElementToPagePDF(slide.blockList[i], doc)
    }
    return doc
}

function setPDF(presentation: Presentation, doc: jsPDF) {
    for (let i = 0; i < presentation.slideList.length; i++){
        doc = setPagePDF(presentation.slideList[i], doc)
        if (i + 1 < presentation.slideList.length) {
            doc.addPage([exportWidth, exportHeight], 'landscape')
        }
    }
}

async function saveDocPDF(presentation: Presentation, Path:string, doc:jsPDF){
    await setPDF(presentation, doc)
    doc.save(presentation.name + '.pdf')
}

export function savePresentationAsPDF(prog: Presentation) {
    const Path: string = ''
    let doc = new jsPDF({
        orientation: 'landscape',
        unit: 'px',
        format: [exportWidth, exportHeight]
    })
    saveDocPDF(prog, Path, doc);
}