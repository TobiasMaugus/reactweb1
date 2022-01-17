import {Header} from "components";
import { FooterForum } from "components";
import { BodyForum } from "components";
import { Project } from "components";
import { IForunsData } from "interface/foruns.interfaces";

import { useEffect, useState } from "react";
import { apiForuns } from "services/data";

const Forum = () =>{
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
        <Header />
        <BodyForum/>
        {foruns && foruns.map((item) =>
        <Project key={item.id}>
            <h4>{item.nome_forun}</h4>
        </Project> 
        )}
        <FooterForum />
        </>
        )
};

export default Forum;