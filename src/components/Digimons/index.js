import { useSelector } from "react-redux"
import "./style.css"

const Digimons = () => {

	const { digimons } = useSelector((state) => state)

	return (
		<div className="digimon-card">
			<ul className="digimon-list">
				{
					digimons.map((item, index) =>
						<li
							key={index}
							className="digimon-char" >

							<h3
								className="digimon-name">
								{item.name}
							</h3>

							<p
								className="digimon-level">
								{item.level}
							</p>

							<img
							className="digimon-image"
								src={item.img}
								alt={item.name}
							/>

						</li>
					)
				}
			</ul>
		</div>
	)
}

export default Digimons