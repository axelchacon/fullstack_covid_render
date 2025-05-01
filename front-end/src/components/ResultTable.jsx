export default function ResultTable({ data }) {
	return (
		<div className="mt-6 overflow-x-auto">
			<table className="min-w-full text-sm border border-gray-200">
				<thead className="bg-primary text-white">
					<tr>
						{Object.keys(data[0] || {}).map((key) => (
							<th key={key} className="px-2 py-1">
								{key}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.map((row, i) => (
						<tr key={i} className="even:bg-gray-100">
							{Object.values(row).map((val, j) => (
								<td key={j} className="px-2 py-1 border-t">
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
