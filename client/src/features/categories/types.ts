export type Category = {
    id: number,
    name: string,
    img: string
}

export type CategoryId = Category['id']

export type CategoriesState = {
    categories: Category[],
    error: string | undefined,
    loading: boolean
}