import React, { useEffect, useState } from "react";
import "./cryptoStyle.scss";
import axios, { Axios } from "axios";



const CryptoSearch = () => {

    const titleCtypto = "CryptoSearch"
    const [crypto , setCrypto] = useState([])
    const [search , setSearch] = useState("")

    useEffect(() => {
        axios.get(
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`
        ).then((res) => {
            setCrypto(res.data)
        });
    }, []);

    return(
        <div className="cryptoSearch" >
            <span className="cryptoSearch__title" >{titleCtypto}</span>
            <div className="cryptoSearch__container" >
                <div className="cryptoSearch__container__searchBox" >
                    <input placeholder="search name" onChange={(e) => setSearch(e.target.value)} />
                </div>
                <div className="cryptoSearch__container__cryptoData" >
                    
                    <div className="cryptoSearch__container__cryptoData__header">
                        <span>Rank</span>
                        <span>name</span>
                        <span>symbol</span>
                        <span>price</span>
                    </div>

                    <div className="cryptoSearch__container__cryptoData__datas">
                        {
                            crypto.filter(val => val.id.toLowerCase().includes(search.toLowerCase())).slice(0,10).map((item , index) => 
                                <div>
                                    <span>{index}</span>
                                    <span>{item.id}</span>
                                    <span>{item.symbol}</span>
                                    <span>{Math.floor(item.current_price)}</span>
                                </div>
                            )
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}


export default CryptoSearch
