class Canvas {
    constructor() {
        this.canvas = document.getElementById("canvas");
        this.context = this.canvas.getContext('2d');

        // clear button
        document.getElementById("clear-all-btn").addEventListener("click", () => this.clearCanvas())

        this.isDrawing = false;

        // Add a property to store the scaling factor
        this.scaleX = 1;
        this.scaleY = 1;

        // Add an event listener to detect changes in the canvas size
        window.addEventListener('resize', this.handleResize);
        this.handleResize();

        this.canvas.addEventListener('mousedown', event => this.startDrawing(event));
        this.canvas.addEventListener('mousemove', event => this.draw(event));
        this.canvas.addEventListener('mouseup', () => this.stopDrawing());
        this.canvas.addEventListener('mouseout', () => this.stopDrawing());
    }

    startDrawing = (event) => {
        this.isDrawing = true;
        const [x, y] = this.getMousePosition(event);
        this.context.beginPath();
        this.context.moveTo(x, y);
    }

    draw = (event) => {
        if (!this.isDrawing) return;
        const [x, y] = this.getMousePosition(event);
        this.context.lineTo(x, y);
        this.context.stroke();
    }

    stopDrawing = () => {
        this.isDrawing = false;
        this.context.closePath();
    }

    handleResize = () => {
        const rect = this.canvas.getBoundingClientRect();
        this.scaleX = this.canvas.width / rect.width;
        this.scaleY = this.canvas.height / rect.height;
    }

    getMousePosition = (event) => {
        const rect = this.canvas.getBoundingClientRect();
        const scaleX = this.canvas.width / rect.width;
        const scaleY = this.canvas.height / rect.height;
        const offsetX = event.clientX - rect.left;
        const offsetY = event.clientY - rect.top;
        const x = offsetX * scaleX;
        const y = offsetY * scaleY;
        return [x, y];
    }

    setLineWidth = async (width) => {
        this.context.lineWidth = width;
    }

    setColor = async (color) => {
        this.context.strokeStyle = color;
    }

    clearCanvas = async () => {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

const canvas = new Canvas();

// Example usage
/*
canvas.setLineWidth(5);
canvas.setColor('blue');*/
