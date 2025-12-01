import { Card } from '@/components/ui/card';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <Card className="p-5 sm:p-6 arctic-hover-card cursor-default group border-border/30 hover:border-primary/20 arctic-shadow-sm hover:shadow-none">
      <div className="flex flex-col items-start gap-3 sm:gap-4">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden flex-shrink-0 transition-all duration-[280ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-[-3px] arctic-shadow-sm bg-muted/20 will-change-transform">
          <img
            src={icon}
            alt={`${title} service icon`}
            className="w-full h-full object-cover transition-transform duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
            width="64"
            height="64"
            loading="lazy"
          />
        </div>
        <div className="space-y-2 sm:space-y-2.5">
          <h3 className="text-lg sm:text-xl font-semibold text-foreground transition-colors duration-[180ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-primary tracking-[-0.015em]" data-testid={`text-service-${title.toLowerCase().replace(/\s+/g, '-')}`}>
            {title}
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground leading-[1.65]">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
}
