import Point from "./Point";
import Line from "./Line";
import Result from './Result';
class Main {
    dataMap: Map<string, number> = new Map<string, number>();
    runTest(): Array<Result> {

        let count: number = 0;
        let dataset: Array<Point> = Point.loadDataset();
        let result: Array<Result> = new Array<Result>();
        for (let i = 0; i < dataset.length; i++) {
            for (let j = i + 1; j < dataset.length; j++) {
                let line = new Line(dataset[i], dataset[j]);
                for (let k = j + 1; k < dataset.length; k++) {
                    if (this.dataMap.get(line.getKey()) && line.isCollinear(dataset[k])) {
                        this.dataMap.set(line.getKey(), (this.dataMap.get(line.getKey()) || 0) + 1);
                    } else if (line.isCollinear(dataset[k])) {
                        this.dataMap.set(line.getKey(), 1);
                        if (!this.isDuplicate(result, Result.getLineDetails(line))) {
                            result.push(Result.getLineDetails(line));
                        }
                    }
                }
            }
        }

        return result;
    }
    isDuplicate(result: Array<Result>, item: Result): boolean {
        let returnValue = false;
        for (let p = 0; p < result.length; p++) {
            if (result[p].m === item.m && item.b === result[p].b) {
                return true;
            }
        }

        return returnValue;
    }
}
module.exports = Main;

