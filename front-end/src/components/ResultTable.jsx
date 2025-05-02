export default function ResultTable({ data }) {
	return (
		<div className="mt-6 overflow-x-auto rounded-xl shadow-md">
			<table className="min-w-full text-sm text-center bg-white rounded-xl">
				<thead className="bg-purple-600 text-white">
					<tr>
						{Object.keys(data[0] || {}).map((key) => (
							<th key={key} className="px-4 py-2">
								{key}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.map((row, i) => (
						<tr key={i} className="even:bg-gray-100 odd:bg-gray-50">
							{Object.values(row).map((val, j) => (
								<td key={j} className="px-4 py-2">
									{val}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
