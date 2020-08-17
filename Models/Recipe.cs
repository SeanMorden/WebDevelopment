using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Recipes.Models
{
    public class Recipe
    {
        public int RecipeID { get; set; }
        public string RecipeName { get; set; }
        public string Description { get; set; }
        public string Ingredients { get; set; }
        public string Instructions { get; set; }
        public string Category { get; set; }
        public Recipe()
        {
        }
        //public Recipe(string recipieName, string description, string ingredients, string instructions)
        //{
        //    RecipeName = recipieName;
        //    Description = description;
        //    Ingredients = ingredients;
        //    Instructions = instructions;
        //}

    }
}
