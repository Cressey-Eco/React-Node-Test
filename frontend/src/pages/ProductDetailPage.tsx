import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../services/api';
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

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      loadProduct(id);
    }
  }, [id]);

  const loadProduct = async (productId: string) => {
    try {
      setLoading(true);
      const response = await getProduct(productId);
      if (response.success) {
        setProduct(response.data);
      }
    } catch (error) {
      console.error('Failed to load product:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="text-center py-8">Loading product...</div>;
  }

  if (!product) {
    return <div className="text-center py-8">Product not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <div className="aspect-video bg-muted rounded-md mb-4 flex items-center justify-center">
            <span className="text-muted-foreground">Product Image</span>
          </div>
          <CardTitle className="text-3xl">{product.name}</CardTitle>
          <CardDescription className="text-lg">{product.category}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">{product.description}</p>
          <div className="flex items-center justify-between pt-4 border-t">
            <div>
              <p className="text-3xl font-bold">${product.price.toFixed(2)}</p>
              <p className="text-sm text-muted-foreground">
                Stock: {product.stock} available
              </p>
            </div>
            <Button size="lg">Add to Cart</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

