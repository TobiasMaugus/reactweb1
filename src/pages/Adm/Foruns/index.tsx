import {HeaderAdm} from "components";

import { IForunsData } from "interface/foruns.interfaces";

import { useEffect, useState } from "react";
import { apiForuns } from "services/data";

const AdmForuns = () =>{
    const [foruns, setForuns] = useState<IForunsData[]>()

    useEffect(() =>{
        async function fetchData(){
            const response = await apiForuns.index()
            setForuns(response.data)
        }
        fetchData()
    }, [])

    return (
        <>
            <HeaderAdm/>
        </>
        )
};

export default AdmForuns;