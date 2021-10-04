interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    category: string;
}

interface CartItem {
    product: Product;
    count: number;
}

export interface MarketState {
    cartItems: CartItem[];
    total: number;
}

export interface StoreState {
    marketState: MarketState;
}