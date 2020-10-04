import React, { Component } from 'react'
import { RoomContext } from "../context"
import Loading from "./loading"
import Room from "./Room"
import Title from "./Title"
export default class FeatureRooms extends Component {
    static contextType = RoomContext
    render() {
        let { loading, featuredRooms: rooms } = this.context



        return (
            <section className="featured-rooms" >
                <Title title="Featured rooms" />

                <div className="featured-rooms-center">

                    {loading ? <Loading /> : rooms.map((room) => {
                        return <Room key={room.id}
                            room={room} />
                    })}
                </div>


            </section >
        )
    }
}
