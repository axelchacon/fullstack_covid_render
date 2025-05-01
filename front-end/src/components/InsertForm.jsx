import { useState } from "react";
import axios from "axios";

export default function InsertForm() {
	const [form, setForm] = useState({
		fecha_corte: "",
		departamento: "",
		provincia: "",
		distrito: "",
		metododx: "",
		edad: "",
		sexo: "",
		fecha_resultado: "",
		ubigeo: "",
		id_persona: "",
	});

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await axios.post("http://localhost:3002/api/nuevo", form);
		alert("✅ Caso insertado correctamente");
		setForm({});
	};

	return (
		<div className="bg-white p-6 rounded-xl shadow-md">
			<h2 className="text-2xl text-secondary font-semibold mb-4">
				➕ Nuevo Caso
			</h2>
			<form
				onSubmit={handleSubmit}
				className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{Object.keys(form).map((key) => (
					<input
						key={key}
						name={key}
						type={key === "edad" ? "number" : "text"}
						value={form[key] || ""}
						onChange={handleChange}
						placeholder={key}
						className="p-2 border rounded"
					/>
				))}
				<button
					type="submit"
					className="col-span-full bg-secondary text-white px-4 py-2 rounded hover:bg-red-500">
					Insertar
				</button>
			</form>
		</div>
	);
}
