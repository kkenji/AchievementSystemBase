class Achievement {
    private _badgename: string;
    private _completed: boolean;
    private _progress: number;
    private _limit: number;
    private _level; number;

    constructor(badgename: string, limit: number) {
        this._badgename = badgename;
        this._limit = limit;
        this._completed = false;
        this._progress = 0;
        this._level = 0;
    }

    get badgeName(): string {
        return this._badgename;
    }

    get limit(): number {
        return this._limit;
    }

    get progress(): number {
        return this._progress;
    }

    setProgress(newProgress: number) {
        this._progress = newProgress;
        this._level = Math.floor(this.progress / this.limit * 4)
        if (this._progress == this._limit)
            this._completed = true;
    }

    get complete(): string {
        if (this._completed)
            return "complete.";
        return "incomplete.";
    }

    get level(): number {
        return this._level;
    }
}

class QuizBadge extends Achievement {
    constructor(badgename: string, limit: number) {
        super(badgename, limit);
    }
}

class ProgressBadge extends Achievement {
    constructor(badgename: string, limit: number) {
        super(badgename, limit);
    }
}

function outputString (a: Achievement){

    return a.badgeName + " is " + a.progress + " out of " + a.limit + " which is " + a.complete + " and is level " + a.level;
}


window.onload = () => {
    var docContext = document.getElementById('content');
    var a1 = new Achievement("Badge1", 10);
    var a2 = new QuizBadge("QuizBadge2", 7);
    var a3 = new Achievement("Badge3", 5);
    var listOfAchievements:Array<Achievement> = [a1,a2,a3]

    alert(outputString(listOfAchievements[0]));
    a1.setProgress(4);
    alert(outputString(listOfAchievements[0]));
    alert(outputString(listOfAchievements[0]));
};