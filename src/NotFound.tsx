import { Box, Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";

export default function NotFound() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <Box sx={{ height: "100vh" , display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Typography variant="h1" fontSize={"10rem"}  >404</Typography>
            </Box>
        </div>
    );
}