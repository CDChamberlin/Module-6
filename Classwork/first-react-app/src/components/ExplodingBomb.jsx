import { useState } from "react"

function Bomb() {
    throw new Error('KABOOM !!')
}

function ExplodingBomb() {
    const [exploded, setExploded] = useState(false)

    return (
        <div className='ExpldingBomb componentBox'>
            <button onClick={() => setExploded(!exploded)}>
                DANGER: Click to explode Bomb!
            </button>
            {exploded ? <Bomb /> : null}
        </div>
    )
}

export default ExplodingBomb
