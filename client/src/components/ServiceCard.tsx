import { Card } from '@/components/ui/card';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <Card className="p-6 hover-elevate transition-all cursor-default">
      <div className="flex flex-col items-start gap-4">
        <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
          <img
            src={icon}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-foreground" data-testid={`text-service-${title.toLowerCase().replace(/\s+/g, '-')}`}>
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
}
