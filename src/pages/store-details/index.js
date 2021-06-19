import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios";

export default function StoreDetails()
    {
        const { id } = useParams(); 
        useEffect(()=>{
            axios.get(`http://localhost:3600/stores/${id}`).then((response)=>{
                console.log(response)
            }).catch((err)=>{
                console.log(err)
            })
        })

        return <div>Store Details - {id}</div>
    }