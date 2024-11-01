import starship from "../../../assets/starship.png"
const StarshipPage = () => {
  return (
    <div className="flex gap-4">
      <div>
        <img src={starship} alt="" />
      </div>
      <div className="font-Ubuntu p-4 flex  flex-col gap-4">
        <h2 className="font-bold text-5xl">
          Death Star
        </h2>
        <h4>Model: DS-1 Orbital Battle Station</h4>
        <h4>Passenger: 22</h4>
        <h4>Pilots: Kingley, Jamal</h4>
      </div>
    </div>
  )
}

export default StarshipPage