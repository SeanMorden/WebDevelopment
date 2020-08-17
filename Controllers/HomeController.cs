using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Recipes.Models;

namespace Recipes.Controllers
{
    public class HomeController : Controller
    {
        private IRecipeRepository repository;
        public HomeController(IRecipeRepository repo)
        {
            repository = repo;
        }
        public ViewResult Index()
        {
            
            return View();
        }
        public ViewResult AddRecipe()
        {
            
            return View();
        }
        [HttpPost]
        public ViewResult AddRecipe(Recipe recipe)
        {
            RecipeRepository.AddRecipe(recipe);
            return View("AddRecipe");
        }
        public ViewResult RecipeList()
        {

            return View(repository.Recipes);
        }
        public ViewResult ReviewRecipe(int recipeID)
        {
            Recipe recipe = 
                repository.Recipes
                .FirstOrDefault(r => r.RecipeID == recipeID);
            return View(recipe);
        }


    }
}
