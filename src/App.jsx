import { useState, useRef } from "react";
import {
	Container,
	Box,
	Typography,
	List,
	Divider,
	OutlinedInput,
	InputAdornment,
	IconButton,
} from "@mui/material";
import Item from "./Item";
import Header from "./Header";
import { Add } from "@mui/icons-material";

export default function App() {
	const [data, setData] = useState([
		{ id: 1, name: "Read books", done: false },
		{ id: 2, name: "Gardening", done: true },
		{ id: 3, name: "Study programming", done: false },
	]);

	const todoInputRef = useRef();

	const toggle = (id) => {
		setData(
			data.map((item) => {
				if (item.id === id) item.done = !item.done;
				return item;
			}),
		);
	};

	const remove = (id) => {
		setData(data.filter(item => {
			return item.id !== id;
		}))
	};

	return (
		<Box>
			<Header />
			<Container
				maxWidth="md"
				sx={{ mt: 3 }}>
				<Box>
					<Typography variant="h4">Todo</Typography>
					<Divider
						sx={{
							height: 10,
							background: "#729493",
							mb: 3,
						}}
					/>
					<form onSubmit={e => {
						e.preventDefault();
						const todoName = todoInputRef.current.value;
						if(!todoName) return false;

						setData([{id: data.length + 1, name: todoName, done: false}, ...data]);

						todoInputRef.current.value = "";
						todoInputRef.current.focus();
					}}>
						<OutlinedInput
							fullWidth
							inputRef={todoInputRef}
							endAdornment={
								<InputAdornment position="end">
									<IconButton type="submit">
										<Add />
									</IconButton>
								</InputAdornment>
							}
						/>
					</form>
					<List>
						{data
							.filter((item) => !item.done)
							.map((item) => {
								return (
									<Item
										key={item.id}
										item={item}
										toggle={toggle}
										remove={remove}
									/>
								);
							})}
					</List>
				</Box>

				<Box sx={{ mt: 2 }}>
					<Typography variant="h4">Done</Typography>
					<Divider
						sx={{
							height: 10,
							background: "#729493",
						}}
					/>
					<List>
						{data
							.filter((item) => item.done)
							.map((item) => {
								return (
									<Item
										key={item.id}
										item={item}
										toggle={toggle}
										remove={remove}
									/>
								);
							})}
					</List>
				</Box>
			</Container>
		</Box>
	);
}
