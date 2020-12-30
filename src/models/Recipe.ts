import { getModelForClass, prop } from "@typegoose/typegoose";
import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class Recipe {

    @Field(type => ID)
    _id?: string;

    @Field()
    @prop({ required: true })
    title: string;

    @Field({ nullable: true })
    @prop()
    description?: string;

    @Field()
    @prop()
    creationDate: Date;

    @Field(type => [String], { nullable: true })
    @prop({ type: [String] })
    ingredients: string[];
}

export const RecipeModel = getModelForClass(Recipe);
export default Recipe