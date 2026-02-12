import { Card } from '@/components/ui/card';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <Card className="p-5 sm:p-6 lg:p-7 cursor-default group bg-white dark:bg-card border-border/20 dark:border-border/30 hover:border-primary/25 rounded-2xl shadow-[0_4px_20px_-4px_rgba(12,30,40,0.08),0_1px_3px_rgba(12,30,40,0.04)] dark:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.3),0_1px_3px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_30px_-4px_rgba(12,30,40,0.12),0_2px_6px_rgba(12,30,40,0.06)] dark:hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.4),0_2px_6px_rgba(0,0,0,0.25)] transition-all duration-[280ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:translate-y-[-2px]">
      <div className="flex flex-col items-start gap-3 sm:gap-4">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden flex-shrink-0 transition-all duration-[280ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-[-2px] shadow-[0_2px_8px_rgba(12,30,40,0.08)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3)] bg-[#f7f9fc] dark:bg-muted/30 will-change-transform">
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
          <p className="text-sm sm:text-base text-muted-foreground/90 leading-[1.65]">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
}
