import {
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	IconButton,
	ButtonGroup,
	Box,
} from "@mui/material";
import {
	SquareOutlined as CheckBoxIcon,
	CheckBox as DoneIcon,
	Edit as EditIcon,
	Delete as DeleteIcon,
} from "@mui/icons-material";

export default function Item({ item }) {
	return (
		<ListItem
			key={item.id}
			secondaryAction={
				<>
					<IconButton>
						<EditIcon />
					</IconButton>
					<IconButton color="error">
						<DeleteIcon />
					</IconButton>
				</>
			}>
			<ListItemButton>
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
			</ListItemButton>
		</ListItem>
	);
}
