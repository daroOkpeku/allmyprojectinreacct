import React from 'react'
import { RoomContext } from "../context"
import { useContext } from "react"
import Title from "../component/Title"
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}
export default function RoomFilter({ rooms }) {
    const context = useContext(RoomContext)
    console.log(context);
    const {
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets,
        handleChange
    } = context
    //get unique types
    const Unique = getUnique(rooms, "type")
    const capacities = getUnique(rooms, "capacity")
    //add all
    let Types = ["all", ...Unique]

    return (
        <section className="filter-container">
            <Title title="Search" />
            <form className="filter-form">
                {/* select type */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                        {Types.map((item, index) => <option key={index} value={item}>{item}</option>)}
                    </select>
                </div>
                {/* end of select type*/}

                {/*  guest */}
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
                        {capacities.map((item, index) => <option key={index} value={item}>{item}</option>)}
                    </select>
                </div>
                {/*  guest*/}

                {/*size */}
                <div className="form-group">
                    <label htmlFor="size">room size </label>
                    <div className="size-inputs">
                        <input type="number" id="size" name="minSize" value={minSize} onChange={handleChange} className="size-input" />
                        <input type="number" id="size" name="maxSize" value={maxSize} onChange={handleChange} className="size-input" />
                    </div>
                </div>
                {/* end size*/}

                {/*end of extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
                        <label htmlFor="breakFast">breakFast</label>
                        <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
                {/*end of extras */}
            </form>
        </section>
    )
}
