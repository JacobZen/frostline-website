import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock, Send, Users, Calendar, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/language-context';
import { useLocation } from 'wouter';

export default function Contact() {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log('Contact form submitted:', formData);
    
    toast({
      title: 'Message sent!',
      description: "We'll get back to you as soon as possible.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Hero Header with Background */}
      <div className="relative h-72 sm:h-80 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary/70">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <MessageSquare className="w-16 h-16 text-white mx-auto mb-4" />
            <h1 className="text-4xl sm:text-5xl font-semibold text-white mb-4" data-testid="text-contact-title">
              {t.contact.title}
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              {t.contact.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Quick Contact Cards */}
      <section className="py-12 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center hover-elevate transition-all" data-testid="card-quick-email">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{t.contact.emailLabel}</h3>
              <p className="text-sm text-muted-foreground" data-testid="text-email-quick">post@frostline.as</p>
            </Card>

            <Card className="p-6 text-center hover-elevate transition-all" data-testid="card-quick-phone">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{t.contact.phoneLabel}</h3>
              <p className="text-sm text-muted-foreground" data-testid="text-phone-quick">{t.contact.phoneText}</p>
            </Card>

            <Card className="p-6 text-center hover-elevate transition-all" data-testid="card-quick-location">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{t.contact.location}</h3>
              <p className="text-sm text-muted-foreground" data-testid="text-location-quick">{t.contact.locationText1}</p>
            </Card>

            <Card className="p-6 text-center hover-elevate transition-all" data-testid="card-quick-availability">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{t.contact.availability}</h3>
              <p className="text-sm text-muted-foreground" data-testid="text-availability-quick">{t.contact.availabilityText1}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form - Takes 2 columns */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Send className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-semibold text-foreground">
                    {t.contact.sendMessage}
                  </h2>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        {t.contact.name} *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t.contact.name}
                        data-testid="input-name"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        {t.contact.phone}
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+47 XXX XX XXX"
                        data-testid="input-phone"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      {t.contact.email} *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      data-testid="input-email"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      {t.contact.message} *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t.contact.messagePlaceholder}
                      rows={8}
                      data-testid="input-message"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full"
                    data-testid="button-submit-contact"
                  >
                    {isSubmitting ? (
                      <>
                        <Send className="w-4 h-4 mr-2 animate-pulse" />
                        {t.contact.sending}
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        {t.contact.sendButton}
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </div>

            {/* Sidebar Information */}
            <div className="space-y-6">
              <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20" data-testid="card-company-details">
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">{t.contact.companyDetails}</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex flex-col gap-1">
                    <span className="text-muted-foreground">{t.contact.companyName}</span>
                    <span className="text-foreground font-semibold text-base" data-testid="text-company-name">Frostline AS</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-muted-foreground">{t.contact.orgNumber}</span>
                    <span className="text-foreground font-medium" data-testid="text-org-number">936 520 553</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-muted-foreground">{t.contact.location}</span>
                    <span className="text-foreground font-medium" data-testid="text-location-sidebar">{t.contact.locationText2}</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-primary/5 border-primary/30 hover-elevate" data-testid="card-partnership">
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">{t.contact.partnershipTitle}</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  {t.contact.partnershipText}
                </p>
                <Button
                  variant="default"
                  className="w-full"
                  onClick={() => setLocation('/partners')}
                  data-testid="button-partnership-info"
                >
                  <Users className="w-4 h-4 mr-2" />
                  {t.contact.partnershipButton}
                </Button>
              </Card>

              <Card className="p-6" data-testid="card-contact-info">
                <h3 className="font-semibold text-foreground mb-4">{t.contact.contactInfo}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div className="flex flex-col gap-1">
                      <span className="text-xs text-muted-foreground uppercase tracking-wide">{t.contact.emailLabel}</span>
                      <span className="text-sm text-foreground font-medium" data-testid="text-email">post@frostline.as</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div className="flex flex-col gap-1">
                      <span className="text-xs text-muted-foreground uppercase tracking-wide">{t.contact.phoneLabel}</span>
                      <span className="text-sm text-foreground font-medium" data-testid="text-phone-sidebar">{t.contact.phoneText}</span>
                      <span className="text-xs text-muted-foreground italic">{t.contact.phoneSubtext}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div className="flex flex-col gap-1">
                      <span className="text-xs text-muted-foreground uppercase tracking-wide">{t.contact.availability}</span>
                      <span className="text-sm text-foreground font-medium" data-testid="text-availability-sidebar">{t.contact.availabilityText1}</span>
                      <span className="text-xs text-muted-foreground">{t.contact.availabilityText2}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
