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
	Badge,
	Alert,
} from "@mui/material";
import Item from "./components/Item";
import Header from "./components/Header";
import {
	Add as AddIcon,
	Assignment as AssignmentIcon,
} from "@mui/icons-material";

export default function App() {
	const [data, setData] = useState([
		{ id: 1, name: "Read books", done: false },
		{ id: 2, name: "Gardening", done: true },
		{ id: 3, name: "Study programming", done: false },
	]);

	const [error, setError] = useState(false);

	const inputRef = useRef();

	const toggle = (id) => {
		setData(
			data.map((item) => {
				if (item.id === id) item.done = !item.done;
				return item;
			}),
		);
	};

	const remove = (id) => {
		setData(
			data.filter((item) => {
				return item.id !== id;
			}),
		);
	};

	return (
		<Box>
			<Header />
			<Container
				maxWidth="md"
				sx={{ mt: 3 }}>
				<Box>
					<Typography
						variant="h4"
						sx={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
						}}>
						Todo
						<Badge
							badgeContent={
								data.filter(
									(item) => !item.done,
								).length
							}
							color="info">
							<AssignmentIcon />
						</Badge>
					</Typography>
					<Divider
						sx={{
							height: 10,
							background: "#729493",
							mb: 3,
						}}
					/>

					{error && (
						<Box sx={{mb: 3}}>
							<Alert severity="warning">
								<Typography>Please enter something todo.....</Typography>
							</Alert>
						</Box>
					)}

					<form
						onSubmit={(e) => {
							e.preventDefault();
							const task = inputRef.current.value;

							if(task) {
								setData([
									...data, {id: data[data.length - 1].id + 1, name: task, done: false}
								]);

								inputRef.current.value = "";
								inputRef.current.focus();
							} else {
								setError(true);
								setTimeout(() => setError(false), 3000);
								return false;
							}


							// if(!task) {
							// 	setError(true);
							// 	setTimeout(() => setError(false), 3000);
							// 	return false;
							// }

							// setData([
							// 	{
							// 		id: data.length + 1,
							// 		name: task,
							// 		done: false,
							// 	},
							// 	...data,
							// ]);

							// inputRef.current.value = "";
							// inputRef.current.focus();
						}}>
						<OutlinedInput
							fullWidth
							inputRef={inputRef}
							endAdornment={
								<InputAdornment position="end">
									<IconButton type="submit">
										<AddIcon />
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
					<Typography
						variant="h4"
						sx={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
						}}>
						Done
						<Badge
							badgeContent={
								data.filter((item) => item.done)
									.length
							}
							color="info">
							<AssignmentIcon />
						</Badge>
					</Typography>
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
