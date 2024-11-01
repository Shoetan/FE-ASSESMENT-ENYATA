import specie from "../../../assets/specie.png"
const SpeciesPage = () => {
  return (
    <div className="flex gap-4">
      <div>
        <img src={specie} alt="" />
      </div>
      <div className="font-Ubuntu p-4 flex  flex-col gap-4">
        <h2 className="font-bold text-5xl">
          Wookie
        </h2>
        <h4>Designation: Sentient</h4>
        <h4>Language: Shyriiwook</h4>
        <h4>Eye Colors: Blue, Green, Yellow</h4>
        <h4>Average Lifespan: 400</h4>
      </div>
    </div>
  )
}

export default SpeciesPage