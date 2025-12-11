import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ShoppingBag } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <ShoppingBag className="h-6 w-6" />
            <span className="text-xl font-bold">Eric Tech</span>
          </Link>
          <nav className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="ghost">Home</Button>
            </Link>
            <Link to="/products">
              <Button variant="ghost">Products</Button>
            </Link>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">{children}</main>
    </div>
  );
}

