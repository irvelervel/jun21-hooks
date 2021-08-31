import { useState } from 'react'

const ClassComponent = () => {
    const [data, setData] = useState([{ city: 'Rome' }, { city: 'Toronto' }])

    return (
        <div>
            {
                data.map(d => (
                    <p key={d.city}>CITY IS {d.city}</p>
                ))
            }
        </div>
    )
}

export default ClassComponent