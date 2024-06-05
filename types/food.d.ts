export default interface Food {
    _id: string;
    name: string;
    units_type: "g" | "ml";
    units: number;
    calories: number;
    fats: number;
    carbs: number;
    proteins: number;
    user_id: string;
}