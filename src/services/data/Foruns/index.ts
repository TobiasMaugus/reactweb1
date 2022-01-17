import { IForunsData } from "interface/foruns.interfaces";
import api from "services/api";

class ForunData{
    index() {
        return api.get<IForunsData[]>('/foruns')
    }
}

export default new ForunData()