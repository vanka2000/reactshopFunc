

export default function BusketCard ({data}){


    return <div className="busket_card">
        <h2>{data.name}</h2>
        <p>{data.price}</p>
    </div>
}