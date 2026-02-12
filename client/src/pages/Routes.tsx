import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MapPin, Clock, Bus, ArrowRight, Send, Info, ChevronDown, Sparkles, CreditCard, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import PageMeta from '@/components/common/PageMeta';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Routes() {
  const { t } = useLanguage();
  const scrollRef = useScrollReveal();
  const [selectedRoute, setSelectedRoute] = useState('');
  const [vehicleType, setVehicleType] = useState('minibus');
  const [formData, setFormData] = useState({
    date: '',
    passengers: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const route = selectedRoute || t.routes.selectRoutePlaceholder;
    const vehicle = vehicleType === 'minibus' ? t.routes.vehicleMinibus : t.routes.vehicleBus;
    const subject = encodeURIComponent(`Booking Request: ${route}`);
    const body = encodeURIComponent(
      `Route: ${route}\n` +
      `Vehicle: ${vehicle}\n` +
      `Date: ${formData.date}\n` +
      `Passengers: ${formData.passengers}\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Message: ${formData.message || 'N/A'}`
    );
    window.location.href = `mailto:post@frostline.as?subject=${subject}&body=${body}`;
  };

  const scrollToBooking = () => {
    document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col" ref={scrollRef}>
      <PageMeta
        titleEn="Routes & Prices"
        titleNo="Ruter og priser"
        descriptionEn="Fixed-price minibus and bus transfers across Northern Norway. Book your group transport from Harstad with Frostline AS."
        descriptionNo="Faste priser for minibuss- og busstransport i Nord-Norge. Book din gruppetransport fra Harstad med Frostline AS."
        path="/routes"
      />
      <section className="relative bg-[#0e2a47] py-16 sm:py-20 lg:py-24 overflow-hidden" aria-label="Routes header">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0e2a47] via-[#163a5f] to-[#0e2a47]" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00e892] rounded-full blur-[128px] translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#4a9eff] rounded-full blur-[96px] -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 tracking-tight" data-testid="text-routes-title">
            {t.routes.title}
          </h1>
          <p className="text-lg sm:text-xl text-white/90 font-medium mb-4" data-testid="text-routes-subtitle">
            {t.routes.subtitle}
          </p>
          <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto leading-relaxed">
            {t.routes.introText}
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-background" aria-label="Route prices">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 scroll-reveal">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-3" data-testid="text-table-title">
              {t.routes.tableTitle}
            </h2>
            <p className="text-sm text-muted-foreground">
              {t.routes.minPassengers}
            </p>
          </div>

          <div className="space-y-4 sm:space-y-5 max-w-5xl mx-auto">
            {t.routes.routesList.map((route, index) => (
              <Card
                key={index}
                className="scroll-reveal overflow-visible"
                data-testid={`card-route-${index}`}
              >
                <div className="p-4 sm:p-5 lg:p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-primary" aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-base sm:text-lg font-semibold text-foreground" data-testid={`text-route-name-${index}`}>
                          {route.from} <ArrowRight className="inline w-4 h-4 mx-1 text-muted-foreground" aria-hidden="true" /> {route.to}
                        </h3>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground mt-0.5 flex-wrap">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                            {route.duration}
                          </span>
                          <span className="text-xs bg-muted/60 dark:bg-muted/30 px-2 py-0.5 rounded-full">
                            {route.comment}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5 lg:flex-shrink-0">
                      <div className="flex gap-4 sm:gap-6 w-full sm:w-auto">
                        <div className="flex-1 sm:flex-none sm:text-right">
                          <div className="text-xs text-muted-foreground mb-0.5">{t.routes.minibusPrice}</div>
                          <div className="text-base sm:text-lg font-bold text-foreground" data-testid={`text-minibus-price-${index}`}>
                            {route.minibusPrice} <span className="text-xs font-normal text-muted-foreground">NOK</span>
                          </div>
                        </div>
                        <div className="flex-1 sm:flex-none sm:text-right">
                          <div className="text-xs text-muted-foreground mb-0.5">{t.routes.busPrice}</div>
                          <div className="text-base sm:text-lg font-bold text-foreground" data-testid={`text-bus-price-${index}`}>
                            {route.busPrice} <span className="text-xs font-normal text-muted-foreground">NOK</span>
                          </div>
                        </div>
                      </div>
                      <Button
                        onClick={() => {
                          setSelectedRoute(`${route.from} \u2013 ${route.to}`);
                          scrollToBooking();
                        }}
                        className="w-full sm:w-auto"
                        data-testid={`button-book-route-${index}`}
                      >
                        {t.routes.requestQuote}
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="max-w-5xl mx-auto mt-8 scroll-reveal">
            <Card className="overflow-visible">
              <div className="p-4 sm:p-5 flex gap-3">
                <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-pricing-note">
                    {t.routes.pricingNote}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-pricing-note-2">
                    {t.routes.pricingNote2}
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="max-w-5xl mx-auto mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 scroll-reveal">
            <Card className="overflow-visible">
              <div className="p-4 flex items-center gap-3">
                <CreditCard className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" />
                <span className="text-sm font-medium text-foreground">{t.routes.minimumOrder}</span>
              </div>
            </Card>
            <Card className="overflow-visible">
              <div className="p-4 flex items-center gap-3">
                <Info className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" />
                <span className="text-sm font-medium text-foreground">{t.routes.depositInfo}</span>
              </div>
            </Card>
            <Card className="overflow-visible">
              <div className="p-4 flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" />
                <span className="text-sm font-medium text-foreground">{t.routes.responseTime}</span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-muted/30" aria-label="Add-ons">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 scroll-reveal">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-2 flex items-center justify-center gap-2">
              <Sparkles className="w-6 h-6 text-primary" aria-hidden="true" />
              {t.routes.addOnsTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 scroll-reveal">
            {t.routes.addOns.map((addon, index) => (
              <Card key={index} className="overflow-visible" data-testid={`card-addon-${index}`}>
                <div className="p-4 flex items-start justify-between gap-3">
                  <span className="text-sm text-foreground">{addon.name}</span>
                  <span className="text-sm font-semibold text-primary whitespace-nowrap">{addon.price}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="booking-form" className="py-12 sm:py-16 lg:py-20 bg-background" aria-label="Booking form">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 scroll-reveal">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-3" data-testid="text-booking-title">
              {t.routes.bookingTitle}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
              {t.routes.bookingSubtitle}
            </p>
          </div>

          <Card className="scroll-reveal overflow-visible">
            <form onSubmit={handleSubmit} className="p-5 sm:p-6 lg:p-8 space-y-5" data-testid="form-booking">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="route-select" className="text-sm font-medium text-foreground">
                    {t.routes.selectRoute}
                  </label>
                  <div className="relative">
                    <select
                      id="route-select"
                      value={selectedRoute}
                      onChange={(e) => setSelectedRoute(e.target.value)}
                      className="w-full h-10 px-3 pr-10 rounded-md border border-input bg-background text-foreground text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      required
                      data-testid="select-route"
                    >
                      <option value="">{t.routes.selectRoutePlaceholder}</option>
                      {t.routes.routesList.map((route, index) => (
                        <option key={index} value={`${route.from} \u2013 ${route.to}`}>
                          {route.from} \u2013 {route.to}
                        </option>
                      ))}
                      <option value="custom">{t.routes.requestCustomRoute}</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" aria-hidden="true" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="vehicle-select" className="text-sm font-medium text-foreground">
                    {t.routes.vehicleType}
                  </label>
                  <div className="relative">
                    <select
                      id="vehicle-select"
                      value={vehicleType}
                      onChange={(e) => setVehicleType(e.target.value)}
                      className="w-full h-10 px-3 pr-10 rounded-md border border-input bg-background text-foreground text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      data-testid="select-vehicle"
                    >
                      <option value="minibus">{t.routes.vehicleMinibus}</option>
                      <option value="bus">{t.routes.vehicleBus}</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" aria-hidden="true" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="booking-date" className="text-sm font-medium text-foreground">
                    {t.routes.date}
                  </label>
                  <input
                    type="date"
                    id="booking-date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    required
                    data-testid="input-date"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="booking-passengers" className="text-sm font-medium text-foreground">
                    {t.routes.passengers}
                  </label>
                  <input
                    type="number"
                    id="booking-passengers"
                    name="passengers"
                    value={formData.passengers}
                    onChange={handleInputChange}
                    min="1"
                    max="30"
                    placeholder="1-30"
                    className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    required
                    data-testid="input-passengers"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="booking-name" className="text-sm font-medium text-foreground">
                  {t.routes.name}
                </label>
                <input
                  type="text"
                  id="booking-name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  required
                  data-testid="input-name"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="booking-email" className="text-sm font-medium text-foreground">
                    {t.routes.email}
                  </label>
                  <input
                    type="email"
                    id="booking-email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    required
                    data-testid="input-email"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="booking-phone" className="text-sm font-medium text-foreground">
                    {t.routes.phone}
                  </label>
                  <input
                    type="tel"
                    id="booking-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    data-testid="input-phone"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="booking-message" className="text-sm font-medium text-foreground">
                  {t.routes.message}
                </label>
                <textarea
                  id="booking-message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder={t.routes.messagePlaceholder}
                  className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 resize-none"
                  data-testid="input-message"
                />
              </div>

              <Button type="submit" className="w-full sm:w-auto" data-testid="button-submit-booking">
                <Send className="w-4 h-4 mr-2" aria-hidden="true" />
                {t.routes.submitBooking}
              </Button>
            </form>
          </Card>
        </div>
      </section>
    </div>
  );
}
