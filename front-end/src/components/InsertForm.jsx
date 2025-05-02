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
		try {
			await axios.post("http://localhost:3002/api/nuevo", form);
			alert("✅ Información agregada exitosamente");
			setForm({
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
		} catch (error) {
			alert(
				`❌ Error al agregar información: ${
					error.response?.data?.error || error.message
				}`
			);
		}
	};

	return (
		<div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-xl shadow-lg mt-8">
			<h2 className="text-2xl font-bold text-white mb-4">➕ Nuevo Caso</h2>
			<form
				onSubmit={handleSubmit}
				className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{Object.keys(form).map((key) => (
					<input
						key={key}
						name={key}
						type={key === "edad" ? "number" : "text"}
						value={form[key]}
						onChange={handleChange}
						placeholder={key}
						className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
					/>
				))}
				<button
					type="submit"
					className="col-span-full bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition duration-200">
					Insertar
				</button>
			</form>
		</div>
	);
}
