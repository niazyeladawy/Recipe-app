import { Box, Button, CircularProgress, Container, Grid, Typography } from "@mui/material"
import { useQuery } from "react-query";
import { fetchAllRecipes } from "../../api/recipesApi";
import LeftRecipes from "./LeftRecipes";
import RightRecipe from "./RightRecipe";
import { useEffect, useRef, useState } from "react";
import { Recipe } from "../../types";

const Recipes = () => {

    const [recipeId, setRecipeId] = useState<string >("");
    const [allRecipes, setAllRecipes] = useState<Recipe[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const perPage = 4;
    const isFetching = useRef(false);
    const [hasMorePages, setHasMorePages] = useState(true);

    const { data, error, isLoading } = useQuery(
        ['recipes', currentPage],
        () => fetchAllRecipes(currentPage, perPage),
        {
            keepPreviousData: true,
            onSuccess: (response) => {
                setLoading(false);
                setAllRecipes((prev) => [...prev, ...response.data]);
                setHasMorePages(response.data.length === perPage);
                if (response.data.length < perPage) {
                    isFetching.current = false; 
                } else {
                    isFetching.current = true;
                }
            },
            onError: () => {
                setLoading(false);
            }
        }
    );

    useEffect(() => {
        if (allRecipes.length > 0 && !recipeId) {
            setRecipeId(allRecipes[0].id); 
        }
    }, [allRecipes, recipeId]);


    const loadMore = () => {
        if (isFetching.current) {
            setLoading(true);
            setCurrentPage((prev) => prev + 1);
        }
    };



    if (isLoading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Box textAlign="center" mt={4}>
                <Typography variant="h6" color="error">
                    Error fetching recipes: {(error as Error).message}
                </Typography>
            </Box>
        );
    }

    if (!data || data.length === 0) {
        return (
            <Box textAlign="center" mt={4}>
                <Typography variant="h6">No recipes found</Typography>
            </Box>
        );
    }

    return (
        <Box>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <LeftRecipes recipes={allRecipes} setRecipeId={setRecipeId} recipeId={recipeId} />
                    </Grid>
                    <Grid sx={{ display: { xs: 'none', md: 'block' } }} item md={6}>
                        <RightRecipe recipeId={recipeId} />
                    </Grid>
                </Grid>

                <Box>
                    {

                        hasMorePages && <Button disabled={loading} onClick={loadMore} variant="outlined" sx={{ minWidth: '200px' }}>  {loading ? <CircularProgress size={26} /> : "Load More"}   </Button>
                    }
                </Box>
            </Container>
        </Box>
    );
};


export default Recipes