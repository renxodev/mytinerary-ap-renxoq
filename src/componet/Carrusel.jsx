import Card from "./Card"
import Arrow from "./Arrow"
import { useState } from "react"

export default function Carrusel({ data }) {
    let [counter, setCounter] = useState(0);
    let [counterTo, setCounterTo] = useState(4);

    function next_slide() {
        if (counterTo >= data.length) {
            setCounter(0)
            setCounterTo(4)
        } else {
            setCounter(counter+4)
            setCounterTo(counterTo+4)
        } console.log(counter, counterTo)
    }
    function prev_slide() {
        if (counter <= 0) {
            setCounter(data.length-4)
            setCounterTo(data.length)
        } else {
            setCounter(counter-4)
            setCounterTo(counterTo-4)
        } 
        console.log(counter,counterTo)
    }
    return (
        <div className="flex items-center">
            <div>
            <Arrow direction="M15.75 19.5L8.25 12l7.5-7.5" onClick={prev_slide} />
            </div>
            <div className="">
                {data.slice(counter, counterTo).map((each, index) => (
                    <Card
                        key={index}
                        src={each.photo}
                        alt={each.id}
                        text={each.city}
                        id={each.id} />
                ))}
            </div>
            <div>
            <Arrow direction="M8.25 4.5l7.5 7.5-7.5 7.5" onClick={next_slide} />
            </div>
        </div>
    )
}
