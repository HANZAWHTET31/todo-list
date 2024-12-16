import {
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	IconButton,
	ButtonGroup,
	Box,
	Link,
	ToggleButtonGroup,
	ToggleButton,
	ButtonBase,
} from "@mui/material";
import {
	SquareOutlined as CheckBoxIcon,
	CheckBox as DoneIcon,
	Edit as EditIcon,
	Delete as DeleteIcon,
} from "@mui/icons-material";

export default function Item({ item, toggle }) {
	return (
		<ListItem key={item.id} className="list-item-action">
			<ListItemButton
				divider
				onClick={() => toggle(item.id)}
				sx={{ display: "flex" }}>
				{item.done ? (
					<ListItemIcon>
						<DoneIcon />
					</ListItemIcon>
				) : (
					<ListItemIcon>
						<CheckBoxIcon />
					</ListItemIcon>
				)}
				<ListItemText primary={item.name} />
				<ToggleButtonGroup>
					<ToggleButton>Edit</ToggleButton>
					<ToggleButton>Delete</ToggleButton>
				</ToggleButtonGroup>
			</ListItemButton>
		</ListItem>
	);
}
