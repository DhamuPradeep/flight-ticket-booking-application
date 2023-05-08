import React, { createContext, useState } from "react";
import "../css/seachstyle.css"
import axios from "axios";
import ShowFlights from "./showflights";


export default function SearchFlights() {

    const [start,setstart] = useState("");
    const [reach,setreach] = useState("");
    const [datas,setData] = useState([])

    const handlestart = (e) => {
        setstart(e.target.value)
    }

    const handlereach = (e) => {
        setreach(e.target.value)
    }

    const handlesubmit = (e) =>{
        e.preventDefault();
        axios.get(`http://localhost:8000/flights/${start}/${reach}`)
        .then((res) => {
            const response = res.data;
            console.log(response)
            setData([response])
        }).catch((error) => {
              console.log(error)
        });
    }

    return (
        <>
        <div className="page-wrapper bg-color-1 p-t-395 p-b-120">
        <div className="wrapper wrapper--w1070">
            <div className="card card-7">
                <div className="card-body">
                    <form className="form">
                        <div className="input-group input--medium">
                            <label className="label">Start Date</label>
                            <input className="input--style-1" type="date" name="checkin" value={start} onChange={handlestart} placeholder="mm/dd/yyyy" id="input-start"/>
                        </div>
                        <div className="input-group input--medium">
                            <label className="label">Reach Date</label>
                            <input className="input--style-1" type="date" name="checkout" value={reach} onChange={handlereach} placeholder="mm/dd/yyyy" id="input-end"/>
                        </div>
                        <button className="btn-submit" onClick={handlesubmit} type="submit">search</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}