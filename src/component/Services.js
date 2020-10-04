import React, { Component } from 'react'
import Title from "./Title"
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa"
export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "free cocktail",
                info: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Hic,totam assumenda cupiditate, `,
            },

            {
                icon: <FaHiking />,
                title: "Endless Hiking",
                info: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Hic,totam assumenda cupiditate, `,
            },
            {
                icon: <FaShuttleVan />,
                title: "free Shuttle ",
                info: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Hic,totam assumenda cupiditate, `,
            },
            {
                icon: <FaBeer />,
                title: "Strongest Beer ",
                info: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Hic,totam assumenda cupiditate, `,
            }
        ]

    }
    render() {
        return (
            <section className="services">
                <Title title="Services" />

                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service" >

                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>


                        </article>
                    })}

                </div>

            </section>
        )
    }
}
