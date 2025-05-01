import SearchForm from "./components/SearchForm";
import InsertForm from "./components/InsertForm";

export default function App() {
	return (
		<div className="min-h-screen bg-background p-6">
			<h1 className="text-4xl font-bold text-center text-primary mb-8">
				🌈 COVID Query Dashboard
			</h1>
			<div className="grid md:grid-cols-2 gap-10">
				<SearchForm />
				<InsertForm />
			</div>
		</div>
	);
}
