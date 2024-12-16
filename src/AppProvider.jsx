import { createContext, useContext, useState, useMemo } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

import App from "./App";

const AppContext = createContext();

export function useApp() {
	return useContext(AppContext);
}

export default function AppProvider() {
	const [mode, setMode] = useState("dark");
	const theme = useMemo(() => {
		return createTheme({
			palette: {
				mode,
			}
		});
	}, [mode]);

	return (
		<ThemeProvider theme={theme}>
			<AppContext.Provider value={{mode, setMode}}>
				<App />
				<CssBaseline />
			</AppContext.Provider>
		</ThemeProvider>
	)
}