import { Card } from '@/components/ui/card';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <Card className="p-5 sm:p-6 hover-elevate transition-all duration-300 cursor-default group border-border/50 hover:border-primary/20 hover:shadow-lg">
      <div className="flex flex-col items-start gap-3 sm:gap-4">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden flex-shrink-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md shadow-sm bg-muted/30">
          <img
            src={icon}
            alt={`${title} service icon`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            width="64"
            height="64"
            loading="lazy"
          />
        </div>
        <div className="space-y-1.5 sm:space-y-2">
          <h3 className="text-lg sm:text-xl font-semibold text-foreground transition-colors duration-200 group-hover:text-primary" data-testid={`text-service-${title.toLowerCase().replace(/\s+/g, '-')}`}>
            {title}
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
}
