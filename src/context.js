import React, { Component } from 'react'
import Items from "./data";
const RoomContext = React.createContext();


export default class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type: 'all',
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false,
    }

    componentDidMount() {
        const rooms = this.formatData(Items)
        const featuredRooms = rooms.filter(room => room.featured === true)
        let maxPrice = Math.max(...rooms.map((item) => item.price))
        let maxSize = Math.max(...rooms.map((item) => item.size))
        this.setState({
            rooms: rooms,
            sortedRooms: rooms,
            featuredRooms: featuredRooms,
            loading: false,
            price: maxPrice,
            maxPrice: maxPrice,
            maxSize: maxSize
        })
    }
    handleChange = (event) => {
        const target = event.target
        const value = target.type === "checkbox" ? target.checked : target.value
        const name = event.target.name
        this.setState({
            [name]: value
        }, this.filterRooms)


    }

    filterRooms = () => {
        let {
            rooms,
            capacity,
            pets,
            sortedRooms,
            price,
            minSize,
            maxSize,
            type,
            breakfast
        } = this.state
        //convert capacity in number because it is a string
        capacity = parseInt(capacity)


        //filter by rooms name
        let TempRooms = [...rooms]
        if (type !== "all") {
            TempRooms = TempRooms.filter((item) => item.type === type)
        }
        // filter by  capacity
        if (capacity !== 1) {
            TempRooms = TempRooms.filter((item) => item.capacity >= capacity)
        }
        //filter by size
        TempRooms = TempRooms.filter((item) => item.size >= minSize && item.size <= maxSize)
        //filter by size end

        //filter by  breakfast
        if (breakfast) {
            TempRooms = TempRooms.filter((item) => item.breakfast === true)
        }
        //filter by pets
        if (pets) {
            TempRooms = TempRooms.filter((item) => item.pets === true)
        }

        this.setState({
            sortedRooms: TempRooms
        })

    }
    formatData(Items) {
        let tempData = Items.map((item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            let room = { ...item.fields, id, images }
            return room;
        }))
        return tempData;
    }

    getData = (slug) => {
        let tempItem = [...this.state.rooms];
        let room = tempItem.find((item) => item.slug === slug)
        return room;
    }

    render() {
        return (
            <div>
                <RoomContext.Provider value={{
                    ...this.state,
                    getData: this.getData,
                    handleChange: this.handleChange
                }} >
                    {this.props.children}
                </RoomContext.Provider>
            </div>
        )
    }
}

const RoomConsumer = RoomContext.Consumer

export { RoomProvider, RoomConsumer, RoomContext }