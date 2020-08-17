﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;

namespace Recipes.Models
{
    public class SeedData

        {
            public static void EnsurePopulated(IApplicationBuilder app)
            {
                ApplicationDbContext context = app.ApplicationServices.GetRequiredService<ApplicationDbContext>();

                context.Database.Migrate();
            if (!context.Recipes.Any())
            {
                context.Recipes.Add(
                    //https://lovingitvegan.com/vegan-pumpkin-pie/
                    new Recipe
                    {
                        RecipeName = "Vegan Pumpkin Pie",
                        Description = "Since it’s Thanksgiving coming up for a lot of people and this is a perfect Thanksgiving pie, my timing is simply perfect on this one. Which is rare, hence the self-congratulatory aspect.",
                        Ingredients = "1 15oz (425g) Can Puréed Pumpkin (not pumpkin pie filling)" +
                        "\n" + "3 / 4 cup(180ml) Coconut Milk(full fat)\n" +
                         "3 / 4 cup(150g) Brown Sugar\n" +
                         "1 / 4 cup(32g) Cornstarch\n" +
                         "1 / 4 cup(60ml) Maple Syrup\n" +
                         "1 tsp Vanilla Extract\n" +
                         "3 tsp Pumpkin Pie Spice\n" +
                         "1 / 2 tsp Salt\n" +
                         "1 Vegan Pie Crust homemade or store - bought(must be uncooked)\n",
                        Instructions = "Preheat the oven to 350°F (180°C).\nAdd all the filling ingredients to a blender and blend until perfectly smooth" +
                         "Pour out over your uncooked pie crust and smooth with a spoon.\nBake in the oven for 60 minutes. When you remove it from the oven, it will still be quite wobbly in the center, this is completely fine, it will firm up when cooling." +
                         "Allow to cool on the counter and then place into the refrigerator to set completely, around 4 hours at least or overnight if possible until completely chilled and set." +
                         "Decorate the pie and serve with whipped coconut cream.\nKeep leftovers covered in the fridge where it will last for up to a week."
                    });
                context.SaveChanges();
            }      
        }
    }
}
