import ServiceCard from '../ServiceCard';
import transferIcon from '@assets/generated_images/transfer_service_icon.png';

export default function ServiceCardExample() {
  return (
    <div className="p-8 max-w-md">
      <ServiceCard
        icon={transferIcon}
        title="Private Transfers"
        description="Airport transfers, hotel pick-ups, sightseeing and custom routes in Tromsø and surrounding areas."
      />
    </div>
  );
}
