import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { Box, Container } from "@mui/material";
import { fetchRecipeById } from "../../../api/recipesApi";
import SingleRecipe from "../../../components/Recipes/SingleRecipe";

const RecipeDetails = () => {
  const { id } = useParams<{ id?: string }>(); 


  
  const { data: recipe, error, isLoading } = useQuery(
    ['recipe', id],
    () => {
      if (!id) {
        return Promise.reject(new Error("Recipe ID is required")); 
      }
      return fetchRecipeById(id);
    },
    {
      enabled: !!id, 
    }
  );


  const typedError = error as Error;


  return (
    <Box>
      <Container>
        <SingleRecipe isSingleRecipePage={true} isLoading={isLoading} error={typedError} recipe={recipe} />
      </Container>
    </Box>
  );
};

export default RecipeDetails;
