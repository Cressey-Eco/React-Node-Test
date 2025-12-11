import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../services/api';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  stock: number;
  featured: boolean;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      setLoading(true);
      const response = await getProducts();
      if (response.success) {
        setProducts(response.data);
      }
    } catch (error) {
      console.error('Failed to load products:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="text-center py-8">Loading products...</div>;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Products</h1>
        <p className="text-muted-foreground">Browse our product catalog</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Card key={product._id}>
            <CardHeader>
              <div className="aspect-video bg-muted rounded-md mb-4 flex items-center justify-center">
                <span className="text-muted-foreground text-sm">Image</span>
              </div>
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>{product.category}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {product.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
                <Link to={`/products/${product._id}`}>
                  <Button>View Details</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

