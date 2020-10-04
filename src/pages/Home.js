import React from 'react'
import Hero from "../component/Hero"
import Banner from "../component/Banner"
import { Link } from "react-router-dom"
import Services from "../component/Services"
import FeatureRoom from "../component/FeatureRooms"

const Home = () => {
    return (
        <div>

            <Hero >
                <Banner title="Luxurious Rooms " subtitle="stephen rooms starting from 50,000 naira">
                    <Link to="/Rooms" className="btn-primary" > Our Rooms</Link>
                </Banner>

            </Hero>
            <Services />
            <FeatureRoom />

        </div>
    )
}

export default Home
