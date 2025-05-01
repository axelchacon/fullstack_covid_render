import { useState } from "react";
import axios from "axios";
import ResultTable from "./ResultTable";

export default function SearchForm() {
	const [field, setField] = useState("departamento");
	const [value, setValue] = useState("");
	const [results, setResults] = useState(null);

	const handleSearch = async (e) => {
		e.preventDefault();
		const response = await axios.get(
			`http://localhost:3002/api/buscar/${field}/${value}`
		);
		setResults(response.data);
	};

	return (
		<div className="bg-white p-6 rounded-xl shadow-md">
			<h2 className="text-2xl text-secondary font-semibold mb-4">
				🔍 Buscar Casos
			</h2>
			<form onSubmit={handleSearch} className="space-y-4">
				<select
					value={field}
					onChange={(e) => setField(e.target.value)}
					className="w-full p-2 border rounded">
					{[
						"fecha_corte",
						"departamento",
						"provincia",
						"distrito",
						"metododx",
						"edad",
						"sexo",
						"fecha_resultado",
						"ubigeo",
						"id_persona",
					].map((f) => (
						<option key={f} value={f}>
							{f}
						</option>
					))}
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
			{results && <ResultTable data={results.data} />}
		</div>
	);
}
