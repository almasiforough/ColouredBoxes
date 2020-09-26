import React, { useState } from 'react'
import ShowBox from './ShowBox'

export default function Boxes() {
    const [colours, setColours] = useState(['black'])
    let colourlist = colours
    const ChangeColour = (index) => {
        let colourItem
        switch (colours[index]) {
            case 'black':
                colourItem = 'red'
                break
            case 'red':
                colourItem = 'green'
                break
            case 'green':
                colourItem = 'black'
                break
            default:
                break
        }
        colourlist[index] = colourItem
        setColours([...colourlist])
    }
    const addBox = (index) => {
        colourlist = colours
        colourlist.splice(index + 1, 0, colours[index])
        setColours([...colourlist])
    }
    const reset = () => {
        setColours(['black'])
    }

    return colours.map((item, index) => (
            <ShowBox
                key={index.toString()}
                ChangeColour={ChangeColour}
                addBox={addBox}
                Reset={reset}
                id={index}
                colour={item}
            />
    ))
}
