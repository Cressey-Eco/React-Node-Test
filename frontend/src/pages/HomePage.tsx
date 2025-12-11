import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

export default function HomePage() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Welcome to Eric Tech</h1>
        <p className="text-xl text-muted-foreground">
          E-commerce and Advertising Platform Assessment
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Products</CardTitle>
            <CardDescription>Browse our product catalog</CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/products">
              <Button className="w-full">View Products</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Assessment Task</CardTitle>
            <CardDescription>Complete the assigned tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Please refer to the ASSESSMENT.md file for detailed instructions.
            </p>
            <Button variant="outline" className="w-full" disabled>
              View Instructions
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>API Documentation</CardTitle>
            <CardDescription>Backend API endpoints</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              API Base URL: <code className="text-xs">http://localhost:3001/api</code>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

