import ProductCard from "../components/ProductCard";


const products = [
    {
        id: 0,
        name: "Crema de dientas",
        price: 4000,
        description: "Contra la caries",
        image:
            "https://unidrogas.vtexassets.com/arquivos/ids/435161-1200-auto?v=638417121991430000&width=1200&height=auto&aspect=true",
    },
    {
        id: 1,
        name: "Nucita",
        price: 1000,
        description: "Dulce y Sabrosita",
        image:
            "https://unidrogas.vtexassets.com/arquivos/ids/358914-300-300?v=638588127430200000&width=300&height=300&aspect=true",
    },
    {
        id: 2,
        name: "Ibuprofeno",
        price: 3200,
        description: "Contra dolores de cabeza",
        image:
            "https://unidrogas.vtexassets.com/arquivos/ids/383009-1200-auto?v=638417087133030000&width=1200&height=auto&aspect=true",
    },
];

function Catalog() {

    const addToCart = (product) => {
        console.info("Agregando al carrito:", product);
    };

    return (
        <div>
            <h1>Catálogo de Productos</h1>
            <div>
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                    />
                ))}
            </div>
        </div>
    );
}

export default Catalog;
