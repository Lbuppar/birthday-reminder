import { useState } from "react"
import list from "../data/list"
const BirthDayList = () => {

    const [people, setPeople] = useState(list);

    const handleClear = () => {
        setPeople([])
    }
    const handleReset = () => {
        setPeople(list)
    }

    return (
        <section className="birthday-list">
            <h1 >{people.length} Birthdays Today</h1>
            {
                people.map((person) => {
                    const { id, name, age, image } = person
                    return (
                        <article key={id} className="person">

                            <img src={image} alt="" />

                            <div className="detail">
                                <h3>{name}</h3>
                                <p>{age} years</p>
                            </div>

                        </article>
                    )

                })
            }

            {people.length >= 1 ? <button onClick={handleClear}>Clear List</button> : <button onClick={handleReset}>Rest List</button>}

        </section>
    )
}
export default BirthDayList