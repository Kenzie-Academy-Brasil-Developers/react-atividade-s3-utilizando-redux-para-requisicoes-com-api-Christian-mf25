import addDigimonsThunk from "../../store/modules/digimons/thunks"
import { Button, CircularProgress, TextField } from "@material-ui/core"
import { useDispatch } from "react-redux"
import { useState } from "react"
import "./style.css"

const Search = () => {

	const [input, setInput] = useState("")
	const [error, setError] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

	const dispatch = useDispatch()

	const handleSearch = () => {
		setError(false)
		dispatch(addDigimonsThunk(input, setError, setIsLoading))
		setInput("")
	}

	return (
		<section
			className="search" >
			<h2
				className="search-title" >Procure pelo seu Digimon!</h2>
			<form
				className="digimon-form">
				<TextField
					label="Procure seu digimon"
					variant="outlined"
					margin="dense"
					color="info"
					size="small"
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
				<Button
					variant="contained"
					size="medium"
					type="button"
					color="info"
					onClick={() => handleSearch()} >
					Pesquisar
				</Button>
			</form>
			<div className="form-message">
				{error && <span className="error">Digimon não encontrado</span>}
				{isLoading && <CircularProgress color="primary" />}
			</div>
		</section>
	)
}

export default Search