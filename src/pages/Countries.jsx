import { useEffect, useState } from "react";
import { getAllCountries } from "../components/utils";
import ReactPaginate from "react-paginate";
import { config } from "../components/utils";
import { CountryCard } from "./CountryCard";
// this is a countries list
// make a req to db to get the countries
// useState to create and set state for countries and pass them down in the props to the country card
//map over the result and return a list of countryCard

export const Countries = () => {
	const [countries, setCountries] = useState([]);
	const [itemOffset, setItemOffset] = useState(0);
	const endOffset = itemOffset + 10;
	console.log(`Loading items from ${itemOffset} to ${endOffset}`);
	const pageCount = Math.ceil(198 / 10);

	const handlePageClick = (event) => {
		config.params.offset = event.selected * 10;
		const offset = event.selected * 10;
		console.log(
			`User requested page number ${
				event.selected + 1
			}, which is offset ${offset}`,
			event.selected * 10,
			"<<<<e selected",
			offset,
			"<<<offset"
		);
		setItemOffset(offset);
	};
	useEffect(() => {
		getAllCountries().then((data) => {
			console.log(data.data, "<<<<countries");
			setCountries(data.data);
		});
	}, [itemOffset]);

	return (
		<>
			<section className="countries-list">
				<h3 >List of countries:</h3>
				<ul>
					{countries.map((country) => {
						return (
							<li key={country.code}>
								<CountryCard country={country} />
							</li>
						);
					})}
				</ul>
			</section>
			<div>
				<ReactPaginate
					className="paginate"
					breakLabel="..."
					nextLabel="next >"
					onPageChange={handlePageClick}
					pageRangeDisplayed={2}
					pageCount={pageCount}
					previousLabel="< previous"
					renderOnZeroPageCount={null}
				/>
			</div>
		</>
	);
};
