import { Category } from "../features/categories/types";

export const fetchLoadCategories = async (): Promise<Category[]> => {
    const res = await fetch('/api/categories');
    const data: {categories: Category[]} = (await res.json()) as {categories: Category[]}
    return data.categories
}


