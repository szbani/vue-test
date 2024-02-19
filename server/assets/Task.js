import {reactive} from "vue";

export class Task {
    constructor(id, name, point, time) {
        this.data = reactive({
            id: id,
            name: name,
            point: point,
            time: time,
            timeRemaining: time,
            active: false
        });
        this.inactive = false;
        this.timerActive = true;
        this.startTimer();
    }

    startTimer() {
        const timer = setInterval(() => {
            if (!this.data.active && this.timerActive) {
                if (this.data.timeRemaining <= 0) {
                    clearInterval(timer);
                    // console.log('Task ' + this.data.name + ' is inactive');
                    this.inactiveTask();
                } else {
                    this.data.timeRemaining -= 0.1;
                }
            }
        }, 100)
    }
    resumeTimer(){
        this.timerActive = true;
    }
    stopTimer() {
        this.timerActive = false;
    }
    inactiveTask() {
        this.inactive = true;
    }
    static fromObject(obj) {
        const task = new Task(obj.data.id, obj.data.name, obj.data.point, obj.data.time);
        task.data.timeRemaining = obj.data.timeRemaining;
        task.data.active = obj.data.active;
        task.inactive = obj.inactive;
        task.timerActive = obj.timerActive;
        return task;
    }
}
