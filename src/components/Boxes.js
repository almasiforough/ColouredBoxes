import React, { useState } from 'react'
import ShowBox from './ShowBox'
import Fade from 'react-reveal/Fade'

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
        <Fade key={item + index.toString()}>
            <ShowBox
                ChangeColour={ChangeColour}
                addBox={addBox}
                Reset={reset}
                id={index}
                colour={item}
            />
        </Fade>
    ))
}
