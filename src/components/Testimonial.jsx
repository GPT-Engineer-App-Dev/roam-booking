import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Testimonial = ({ image, name, quote }) => (
  <Card>
    <img src={image} alt={name} className="w-full h-48 object-cover" />
    <CardHeader>
      <CardTitle>{name}</CardTitle>
    </CardHeader>
    <CardContent>
      <p>{quote}</p>
    </CardContent>
  </Card>
);