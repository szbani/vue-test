import {reactive} from "vue";

export class Task {
    constructor(id,name,point,time) {
        this.data = reactive({
            id: id,
            name: name,
            point: point,
            time: time,
            timeRemaining: time,
            active: false
        });
    }

    setName(name){
      this.data.name = name;
    }
    setPoint(point){
        this.data.point = point;
    }
    setTime(time){
        this.data.time = time
    }
    setTimeRemaining(timeR){
        this.data.timeRemaining = timeR
    }
    setActive(active){
        this.data.active = active
    }

}
