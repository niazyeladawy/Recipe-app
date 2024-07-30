import { Typography } from "@mui/material"
import Recipes from "../components/Recipes"


const Home = () => {
    return (
        <>
            <Typography textAlign={"center"} variant="h1" sx={{ fontSize: "2rem"  }} mb={3}>Recipe App</Typography>
            <Recipes />
            
        </>
    )
}

export default Home