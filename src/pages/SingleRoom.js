import React, { Component } from 'react'
import defaultBcg from "../images/room-1.jpeg"
import Hero from "../component/Hero"
import Banner from "../component/Banner"
import { Link } from "react-router-dom"
import { RoomContext } from "../context"
import Style from "../component/StyledHero"
export default class SingleRoom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg: defaultBcg,

        }
    }

    static contextType = RoomContext
    render() {
        const { getData } = this.context
        const room = getData(this.state.slug);

        if (!room) {
            return <div className="error">
                <h3>room do not exist</h3>
                <Link to="/rooms" className="btn-primary">
                    Back to rooms
              </Link>
            </div>
        }
        const { name, description, capacity, size, price, extras, breakfast, pets, images } = room
        return (
            <>
                <Style image={images[0]}>
                    <Banner title={`${name} room`} >
                        <Link to="/rooms" className="btn-primary">
                            Back to rooms
           </Link>
                    </Banner>
                </Style>
                <section className="single-room">
                    <div className="single-room-images">
                        {images.map((item, index) => {

                            return <img key={index} src={item} />
                        })}
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>details</h3>
                            <p>{description}</p>

                        </article>
                        <article className="info">
                            <h3>information</h3>
                            <h6>price:${price}</h6>
                            <h6>size:{size} sqft</h6>
                            <h6>
                                max capacity:{
                                    capacity > 1 ? `${capacity} people` : `${capacity}person`
                                }
                            </h6>
                            <h6>{pets ? "pets allowed" : "No pets allowed"}</h6>
                            <h6>{breakfast && `breakfast included`}</h6>
                        </article>
                    </div>
                </section>
                <section className="room-extras">
                    <h6>extras</h6>
                    <ul className="extras">
                        {extras.map((item, index) => {
                            return <li key={index}>-{item}</li>
                        })}

                    </ul>
                </section>
            </>
        )
    }
}
