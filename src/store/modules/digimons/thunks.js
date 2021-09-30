import axios from "axios"
import { addDigimon } from "./actions"

const addDigimonsThunk = (digimon, setError, setIsLoading) => (dispatch) => {
	setIsLoading(true)
	setTimeout(() => {
		
		axios
			.get(`https://digimon-api.vercel.app/api/digimon/name/${digimon}`)
			.then((response) => {
				dispatch(addDigimon(response.data[0]))
				setIsLoading(false)
			})
			.catch(() => {
				setError(true)
				setIsLoading(false)
			})
	}, 1500);
}

export default addDigimonsThunk