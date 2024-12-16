import { useState } from "react";
import { Container, Box, Typography, List } from "@mui/material";
import Item from "./Item";
import Header from "./Header";

export default function App() {
	const [data, setData] = useState([
		{id: 1, name: "Read books", done: false},
		{id: 2, name: "Gardening", done: true},
		{id: 3, name: "Study programming", done: false},
	]);

	const toggle = id => {
		setData(data.map(item => {
			if(item.id === id) item.done = !item.done;
			return item;
		}))
	}

	return (
		<Box>
			<Header />
			<Container maxWidth="md" sx={{mt: 3}}>
				<Typography>Todo-List</Typography>

				<Box>
					<List>
						{data.map((item) => {
							return (
								<Item
									key={item.id}
									item={item}
									toggle={toggle}
								/>
							);
						})}
					</List>
				</Box>
			</Container>
		</Box>
	);
}