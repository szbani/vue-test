import {reactive} from "vue";

export class Player {
    constructor(id, name, point = 0, conn = true) {
        this.data = reactive({
            id: id,
            name: name,
            point: point,
            connected: conn,
        })
    }

    setName(newName) {
        this.data.name = newName;
    }

    addToPoint(point) {
        this.data.point += point
    }

    static fromObject(obj) {
        const player = new Player(obj.data.id, obj.data.name, obj.data.point, obj.data.connected)
        return player;
    }
}