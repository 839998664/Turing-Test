import dataset from './dataset';
class Point {
    x: number;
    y: number;
    constructor(xCord: number, yCord: number) {
        this.x = xCord;
        this.y = yCord;
    }
    getKey(): string {
        return `${this.x},${this.y}`;
    }

    static loadDataset(): Array<Point> {
        let ds = new Array();
        for (let i = 0; i < dataset.length; i++) {
            let item = new Point(dataset[i][0], dataset[i][1]);
            ds.push(item);
        }
        return ds;
    }
}

export default Point;