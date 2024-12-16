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
} from "@mui/icons-material";

export default function Header() {
	return (
		<AppBar position="static">
			<Toolbar sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
				<Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
					<IconButton
						color="inherit"
						edge="start">
						<MenuIcon />
					</IconButton>
					<Typography>Todo-List</Typography>
				</Box>

				<IconButton
					color="inherit"
					edge="end">
					<DarkModeIcon />
				</IconButton>
			</Toolbar>
		</AppBar>
	);
}
