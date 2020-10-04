import React from 'react'
import Hero from "../component/Hero"
import Banner from "../component/Banner"
import { Link } from "react-router-dom"
import RoomContainer from "../component/RoomsContainer"
export default function Rooms() {
    return (
        <>
            <Hero hero="roomsHero" >
                <Banner title=" Our Luxurious Rooms " >
                    <Link to="/" className="btn-primary" > return to homepage</Link>
                </Banner>



            </Hero>
            <RoomContainer />
        </>
    )
}
