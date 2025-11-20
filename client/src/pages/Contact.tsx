import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
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
      {/* Header Section */}
      <div className="bg-muted/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-semibold text-foreground mb-4" data-testid="text-contact-title">
            {t.contact.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                {t.contact.sendMessage}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
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
                    rows={6}
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
                  {isSubmitting ? t.contact.sending : t.contact.sendButton}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                {t.contact.contactInfo}
              </h2>

              <Card className="p-6">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{t.contact.emailLabel}</h3>
                      <p className="text-muted-foreground" data-testid="text-email">info@frostline.as</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{t.contact.phoneLabel}</h3>
                      <p className="text-muted-foreground">{t.contact.phoneText}</p>
                      <p className="text-sm text-muted-foreground italic">{t.contact.phoneSubtext}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{t.contact.location}</h3>
                      <p className="text-muted-foreground">{t.contact.locationText1}</p>
                      <p className="text-muted-foreground">{t.contact.locationText2}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{t.contact.availability}</h3>
                      <p className="text-muted-foreground">{t.contact.availabilityText1}</p>
                      <p className="text-muted-foreground">{t.contact.availabilityText2}</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-muted/30">
                <h3 className="font-semibold text-foreground mb-3">{t.contact.companyDetails}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t.contact.companyName}</span>
                    <span className="text-foreground font-medium">Frostline AS</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t.contact.orgNumber}</span>
                    <span className="text-foreground font-medium">936 520 553</span>
                  </div>
                </div>
              </Card>

              <div className="bg-primary/5 p-6 rounded-md border border-primary/20">
                <h3 className="font-semibold text-foreground mb-2">
                  {t.contact.partnershipTitle}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t.contact.partnershipText}
                </p>
                <Button
                  variant="outline"
                  onClick={() => setLocation('/partners')}
                  data-testid="button-partnership-info"
                >
                  {t.contact.partnershipButton}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
