import Recipe, { RecipeModel } from "../models/Recipe";

export async function createRecipe(body: any) {
    console.log('body..', body)
    const recipe = await RecipeModel.create(body);
    console.log(recipe);
    return recipe
}

export async function getById(id: string): Promise<Recipe> {
    const recipe = await RecipeModel.findById(id).lean();
    return recipe; 
}

export async function all(): Promise<Recipe[]> {
    const recipes = await RecipeModel.find().lean();
    return recipes; 
}