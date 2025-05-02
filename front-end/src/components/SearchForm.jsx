import { useState } from "react";
import axios from "axios";
import ResultTable from "./ResultTable";

export default function SearchForm() {
	const [value, setValue] = useState("");
	const [results, setResults] = useState(null);

	const handleSearch = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.get(
				`http://localhost:3002/api/buscar/departamento/${value}?page=1&limit=10`
			);
			setResults(response.data);
		} catch (error) {
			alert(
				`❌ Error al buscar: ${error.response?.data?.error || error.message}`
			);
			setResults(null);
		}
	};

	return (
		<div className="bg-white p-6 rounded-xl shadow-md">
			<h2 className="text-2xl text-secondary font-semibold mb-4">
				🔍 Buscar Casos
			</h2>
			<form onSubmit={handleSearch} className="space-y-4">
				<select disabled className="w-full p-2 border rounded">
					<option value="departamento">departamento</option>
				</select>
				<input
					className="w-full p-2 border rounded"
					placeholder="Valor a buscar"
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
				<button
					type="submit"
					className="bg-primary text-white px-4 py-2 rounded hover:bg-teal-600">
					Buscar
				</button>
			</form>
			{results && results.data.length > 0 ? (
				<ResultTable data={results.data} />
			) : (
				results && (
					<p className="mt-4 text-red-500">No se encontraron resultados.</p>
				)
			)}
		</div>
	);
}
