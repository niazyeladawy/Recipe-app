import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { LeftRecipesProps, Recipe } from '../../../types'


const LeftRecipes: React.FC<LeftRecipesProps> = ({ recipes, setRecipeId, recipeId }) => {

    const hadleChangeRecipe = (id: string) => {
        setRecipeId(id)
    }


    return (
        <>
            {recipes.map((recipe: Recipe) => (
                <Box key={recipe.id} mb={2} onClick={() => hadleChangeRecipe(recipe.id)} sx={{ cursor: 'pointer' }} >
                    <Card sx={{ border: recipeId === recipe.id ? '1.5px solid #2557a7' : '1.5px  solid #fff', boxShadow: 'none' }}>
                        <CardMedia
                            component="img"
                            alt={recipe.title}
                            height="140"
                            image={recipe.image}
                        />
                        <CardContent>
                            <Typography variant="h6">{recipe.title}</Typography>
                            <Typography variant="body2" color="textSecondary">
                                {recipe.description}
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            ))}
        </>
    )
}

export default LeftRecipes