import {
	AppBar,
	Toolbar,
	Box,
	IconButton,
	Button,
	Typography,
} from "@mui/material";
import {
	Menu as MenuIcon,
	DarkMode as DarkModeIcon,
	LightMode as LightModeIcon,
	ArrowBack as BackIcon,
} from "@mui/icons-material";
import { useApp } from "../AppProvider";

export default function Header() {
	const { mode, setMode } = useApp();

	return (
		<AppBar position="static">
			<Toolbar
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						gap: 2,
					}}>
					<IconButton
						color="inherit"
						edge="start">
						<MenuIcon />
					</IconButton>
					<Typography>Todo-List</Typography>
				</Box>
				
				{mode === "dark" ? (
					<IconButton color="inherit" onClick={() => setMode("light")}>
						<LightModeIcon />
					</IconButton>
				) : (
					<IconButton color="inherit" onClick={() => setMode("dark")}>
						<DarkModeIcon />
					</IconButton>
				)}
				
			</Toolbar>
		</AppBar>
	);
}
