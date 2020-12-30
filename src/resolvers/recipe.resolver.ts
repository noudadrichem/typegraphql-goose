import { Query, Arg, Args, Mutation, Authorized, Ctx, Resolver, Field, InputType } from "type-graphql";
import Recipe from "../models/Recipe";
import * as RecipeService from '../services/recipe.service';

/** INPUT TYPES... */
@InputType()
class AddRecipeInput {
    @Field()
    title: string;

    @Field()
    description?: string;

    @Field(type => [String])
    ingredients: string[]
}


@Resolver(Recipe)
export default class RecipeResolver {
    constructor() {}

    @Query(returns => Recipe)
    async recipe(@Arg("id") id: string) {
        const recipe = await RecipeService.getById(id);
        return recipe;
    }

    @Query(returns => [Recipe])
    recipes() {
        return RecipeService.all();
    }


    @Mutation(returns => Recipe)
    async addRecipe(@Arg("data") newRecipeData: AddRecipeInput, @Ctx() ctx: any): Promise<Recipe> {
        console.log("newRecipeData...", newRecipeData)
        const recipe = await RecipeService.createRecipe(newRecipeData);
        return recipe;
    }
}
