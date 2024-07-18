import type {Category} from "@/interfaces/Filters.interface";

export interface ProductInterface {
    id: number;
    title: string;
    image: string;
    price: number;
    description: string;
    category: Category;
}