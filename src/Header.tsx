import './Header.css'
import { IoLocationSharp } from "react-icons/io5";
import Offers from './Offers';
import { useEffect, useState } from 'react';

const API = "https://zillout-backend.xyz/api/v1/rbzo/pubs/landingPage/278"

const Header = () => {
    const [data, setData] = useState({})
    
    const fetchUsers = async (url) => {
        try {
            const res = await fetch(url)                        
            const parsedData = await res.json()
            console.log(typeof parsedData);            
            setData(parsedData.data)
            
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        fetchUsers(API)
    }, [])

  return (
    <>
        <div id='hero'>
            <div className='image-container'></div>
            <div className='content'>
                <div className='container'>
                    <p className='place'>{data?.pubDetails?.type}</p>
                    <p className='rating'>{data?.pubDetails?.rating}</p>
                </div>
                    <h1 className='name-place'>{data?.pubDetails?.name}</h1>
                    <div className='add-container'>
                        <IoLocationSharp />
                        <p className='address'>{data?.pubDetails?.shortAddress}</p>
                    </div>
            </div>
        </div>
        <Offers eventDetails={data?.eventDetails} offerDetails={data?.offerDetails} />        
    </>
  )
}

export default Header