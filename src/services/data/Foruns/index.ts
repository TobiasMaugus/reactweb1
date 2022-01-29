import { IForunsData } from "interface/foruns.interfaces";
import api from "services/api";

class ForunData{
    index() {
        return api.get<IForunsData[]>('/foruns')
    }
    store(data: IForunsData) {
        return api.post(`/projetos`, data)
    }
    show(id: number) {
        return api.get<IForunsData>(`/foruns/${id}`)
    }
    update(id: number, data: IForunsData) {
        return api.put(`/foruns/${id}`, data)
    }
    destroy(id: number) {
        return api.delete(`/foruns/${id}`)
    }
}

export default new ForunData()