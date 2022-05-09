import pencil from "./graphics/pencils.jpg"
import { v4 as uuid } from 'uuid';

export const product_categories = ["Show All", "Everyday Pencils", "Coloured Pencils", "Artists' Pencils", "Creators' Pencils"]

export const product_db = [
    {
        id: uuid(),
        name: "Everyday Pencils",
        image: pencil,
        price: "299",
        brand: "Faber-Castell",
        description: "Great pencil for everyday use",
        feature_points: ["Ideal for students and teachers alike", "Durable graphite nib", "HB Shade", "Enough graphite to write 100 A4 sized pages", "Great for doing light shading work"],
        rating: "4.5",
        inStock: true,
        fastDelivery: true,
        isFeatured: true,
        category: "Everyday Pencils",
    },
    {
        id: uuid(),
        name: "Coloured Pencils - set of 16",
        image: pencil,
        price: "499",
        brand: "Faber-Castell",
        description: "Set of 16 commonly used coloured pencils",
        feature_points: ["Ideal for students and teachers alike", "Durable graphite nib", "HB Shade", "Enough graphite to write 100 A4 sized pages", "Great for doing light shading work"],
        rating: "4.5",
        inStock: true,
        fastDelivery: true,
        isFeatured: false,
        category: "Coloured Pencils",
    },
    {
        id: uuid(),
        name: "Coloured Pencils - set of 24",
        image: pencil,
        price: "549",
        brand: "Faber-Castell",
        description: "Set of 24 commonly used coloured pencils",
        feature_points: ["Ideal for students and teachers alike", "Durable graphite nib", "HB Shade", "Enough graphite to write 100 A4 sized pages", "Great for doing light shading work"],
        rating: "4.5",
        inStock: false,
        fastDelivery: true,
        isFeatured: false,
        category: "Coloured Pencils",
    },
    {
        id: uuid(),
        name: "Coloured Pencils - set of 30",
        image: pencil,
        price: "599",
        brand: "Faber-Castell",
        description: "Set of 30 commonly used coloured pencils",
        feature_points: ["Ideal for students and teachers alike", "Durable graphite nib", "HB Shade", "Enough graphite to write 100 A4 sized pages", "Great for doing light shading work"],
        rating: "5.0",
        inStock: true,
        fastDelivery: true,
        isFeatured: false,
        category: "Coloured Pencils",
    },
    {
        id: uuid(),
        name: "Drawing Pencils",
        image: pencil,
        price: "699",
        brand: "Faber-Castell",
        description: "Set of pencils available in different darkness for sketching and drawing",
        feature_points: ["Ideal for students and teachers alike", "Durable graphite nib", "HB Shade", "Enough graphite to write 100 A4 sized pages", "Great for doing light shading work"],
        rating: "4.9",
        inStock: false,
        fastDelivery: true,
        isFeatured: false,
        category: "Artists' Pencils",
    },
    {
        id: uuid(),
        name: "Shading Pencils",
        image: pencil,
        price: "599",
        brand: "Faber-Castell",
        description: "Set of pencils available in different shades for shading",
        feature_points: ["Ideal for students and teachers alike", "Durable graphite nib", "HB Shade", "Enough graphite to write 100 A4 sized pages", "Great for doing light shading work"],
        rating: "4.9",
        inStock: true,
        fastDelivery: false,
        isFeatured: false,
        category: "Artists' Pencils",
    },
    {
        id: uuid(),
        name: "Sketch Pencils",
        image: pencil,
        price: "649",
        brand: "Faber-Castell",
        description: "An sketchers' ideal collection of pencils",
        feature_points: ["Ideal for students and teachers alike", "Durable graphite nib", "HB Shade", "Enough graphite to write 100 A4 sized pages", "Great for doing light shading work"],
        rating: "4.9",
        inStock: false,
        fastDelivery: true,
        isFeatured: false,
        category: "Artists' Pencils",
    },
    {
        id: uuid(),
        name: "Creators' Set",
        image: pencil,
        price: "1099",
        brand: "Faber-Castell",
        description: "Includes Sketch pencils, coloured pencils, and a drawing pencil",
        feature_points: ["Ideal for students and teachers alike", "Durable graphite nib", "HB Shade", "Enough graphite to write 100 A4 sized pages", "Great for doing light shading work"],
        rating: "4.9",
        inStock: true,
        fastDelivery: false,
        isFeatured: true,
        category: "Creators' Pencils",
    },
    {
        id: uuid(),
        name: "Pencil - set of 4",
        image: pencil,
        price: "99",
        brand: "Faber-Castell",
        description: "Regular pencil for everyday use",
        feature_points: ["Ideal for students and teachers alike", "Durable graphite nib", "HB Shade", "Enough graphite to write 100 A4 sized pages", "Great for doing light shading work"],
        rating: "3.2",
        inStock: true,
        fastDelivery: true,
        isFeatured: false,
        category: "Everyday Pencils",
    },
]