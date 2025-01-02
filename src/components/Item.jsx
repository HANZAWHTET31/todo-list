import {
	ListItem,
	ListItemText,
	IconButton,
} from "@mui/material";
import {
	SquareOutlined as CheckBoxIcon,
	CheckBox as DoneIcon,
	Edit as EditIcon,
	Delete as DeleteIcon,
} from "@mui/icons-material";

export default function Item({ item, toggle, remove }) {
	return (
		<ListItem
			key={item.id}
			divider
			sx={{gap: 1}}>
			{item.done ? (
				<IconButton onClick={() => toggle(item.id)}>
					<DoneIcon color="success" />
				</IconButton>
			) : (
				<IconButton onClick={() => toggle(item.id)}>
					<CheckBoxIcon color="inherit" />
				</IconButton>
			)}
			
			<ListItemText primary={item.name} />
			{/* <Link to={`/edit/${item.id}`}>
				<IconButton>
					<EditIcon />
				</IconButton>
			</Link> */}

			<IconButton onClick={() => remove(item.id)}>
				<DeleteIcon color="error" />
			</IconButton>
		</ListItem>
	);
}
