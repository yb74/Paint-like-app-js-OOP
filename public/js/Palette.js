class Palette {
    constructor() {
        this.currentItemDiv = document.getElementById("current-item");
        this.paintItems = document.getElementsByClassName("paint-items");
        for (const paintItem of this.paintItems) {
            // Use an arrow function to preserve the correct `this` value
            paintItem.addEventListener("click", (e) => this.onSelectItemHandler(e));
        }
    }

    onSelectItemHandler = (e) => {
        // set stroke size and color according to the selected paint item
        const canvas = new Canvas()
        let idNameSelected = e.target.getAttribute("id")
        switch (idNameSelected) {
            case idNameSelected = "white-circle":
                canvas.setColor("white").then(r => {})
                break;
            case idNameSelected = "blue-circle":
                canvas.setColor("blue").then(r => {})
                break;
            case idNameSelected = "brown-circle":
                canvas.setColor("brown").then(r => {})
                break;
            case idNameSelected = "green-circle":
                canvas.setColor("green").then(r => {})
                break;
            case idNameSelected = "grey-circle":
                canvas.setColor("grey").then(r => {})
                break;
            case idNameSelected = "black-circle":
                canvas.setColor("black").then(r => {})
                break;
            case idNameSelected = "orange-circle":
                canvas.setColor("orange").then(r => {})
                break;
            case idNameSelected = "red-circle":
                canvas.setColor("red").then(r => {})
                break;
            case idNameSelected = "yellow-circle":
                canvas.setColor("yellow").then(r => {})
                break;
            case idNameSelected = "pencil-tool":
                canvas.setLineWidth(2).then(r => {})
                break;
            case idNameSelected = "line-tool":
                canvas.setLineWidth(1).then(r => {})
                break;
            case idNameSelected = "rubber-tool":
                canvas.setLineWidth(5).then(r => {})
                canvas.setColor("white").then(r => {})
                break;
            default: canvas.setColor("black").then(r => {"all"})
        }

        // creating clone of clicked element
        const clickedElementClone = e.target.cloneNode(true);
        // emptying the content of current item at each click on a palette item
        this.currentItemDiv.innerHTML = '';
        // appending clicked element to the div of selected palette item
        this.currentItemDiv.append(clickedElementClone);
    }
}

new Palette();