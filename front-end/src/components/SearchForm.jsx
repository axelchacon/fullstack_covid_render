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
		<div className="bg-gradient-to-r from-indigo-500 to-blue-500 p-6 rounded-xl shadow-lg">
			<h2 className="text-2xl font-bold text-white mb-4">🔍 Buscar Casos</h2>
			<form
				onSubmit={handleSearch}
				className="flex flex-col md:flex-row md:items-center gap-4">
				<input
					className="flex-1 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
					placeholder="Departamento"
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
				<button
					type="submit"
					className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition duration-200">
					Buscar
				</button>
			</form>
			{results && results.data.length > 0 ? (
				<ResultTable data={results.data} />
			) : (
				results && (
					<p className="mt-4 text-yellow-200">
						⚠ No se encontraron resultados.
					</p>
				)
			)}
		</div>
	);
}
