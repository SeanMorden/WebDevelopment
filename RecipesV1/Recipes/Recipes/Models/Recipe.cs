using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Recipes.Models
{
    public class Recipe
    {
        private static int idCounter;
        public int IdNumber { get; set; }
        public string RecipeName { get; set; }
        public string Description { get; set; }
        public string Ingredients { get; set; }
        public string Instructions { get; set; }
        public string ReviewRecipe { get; set; }
        public Recipe()
        {
            idCounter++;
            IdNumber = idCounter;
        }
        public Recipe(string recipieName, string description, string ingredients, string instructions)
        {
            idCounter++;
            IdNumber = idCounter;
            RecipeName = recipieName;
            Description = description;
            Ingredients = ingredients;
            Instructions = instructions;
        }

    }
}
