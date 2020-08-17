using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Recipes.Models
{
    public class EFRecipeRepository : IRecipeRepository
    {
        private ApplicationDbContext context;

        public EFRecipeRepository(ApplicationDbContext ctx)
        {
            context = ctx;
        }

        public IQueryable<Recipe> Recipes => context.Recipes;


        public void SaveRecipe(Recipe recipe)
        {
            if (recipe.RecipeID == 0)
            {
                context.Recipes.Add(recipe);
            }
            else
            {
                Recipe recipeEntry = context.Recipes
                    .FirstOrDefault(r => r.RecipeID == recipe.RecipeID);

                if (recipeEntry != null)
                {
                    recipeEntry.RecipeName = recipe.RecipeName;
                    recipeEntry.Description = recipe.Description;
                    recipeEntry.Category = recipeEntry.Category;
                }
            }
            context.SaveChanges();
        }
        
        public Recipe DeleteRecipe(int recipeID)
        {
            Recipe productEntry = context.Recipes
                .FirstOrDefault(r => r.RecipeID == recipeID);

            if (productEntry != null)
            {
                context.Recipes.Remove(productEntry);
                context.SaveChanges();
            }
            return productEntry;
        }
        public void EditRecipe(Recipe recipe)
        {

            Recipe tempRecipe = context.Recipes
                .Where(tr => tr.RecipeID == recipe.RecipeID)
                .FirstOrDefault();
            if (tempRecipe != null)
            {
                tempRecipe.RecipeName = recipe.RecipeName;
                tempRecipe.Description = recipe.Description;
                tempRecipe.Ingredients = recipe.Ingredients;
                tempRecipe.Instructions = recipe.Instructions;
                tempRecipe.Category = recipe.Category;
            }
        }
                  
    }
}
