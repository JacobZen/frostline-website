import { useLanguage } from '@/contexts/language-context';
import { Smartphone, Share, PlusSquare, MoreVertical, ArrowDown, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'wouter';
import PageMeta from '@/components/common/PageMeta';

const translations = {
  en: {
    title: 'Install Frostline App',
    subtitle: 'Get quick access to Arctic transfers directly from your home screen',
    benefits: 'Why install?',
    benefit1: 'Instant access — no need to open a browser',
    benefit2: 'Works offline — view routes and prices anytime',
    benefit3: 'Faster loading — app-like experience',
    benefit4: 'Push notifications for booking updates',
    iosTitle: 'Install on iPhone / iPad',
    iosStep1: 'Open frostline.as in Safari',
    iosStep2: 'Tap the Share button at the bottom of the screen',
    iosStep3: 'Scroll down and tap "Add to Home Screen"',
    iosStep4: 'Tap "Add" in the top right corner',
    iosDone: 'The Frostline app icon will now appear on your home screen!',
    androidTitle: 'Install on Android',
    androidStep1: 'Open frostline.as in Chrome',
    androidStep2: 'Tap the three-dot menu in the top right',
    androidStep3: 'Tap "Add to Home screen" or "Install app"',
    androidStep4: 'Confirm by tapping "Install" or "Add"',
    androidDone: 'The Frostline app will be installed and available from your home screen!',
    desktopTitle: 'Install on Desktop',
    desktopStep1: 'Open frostline.as in Chrome or Edge',
    desktopStep2: 'Look for the install icon in the address bar',
    desktopStep3: 'Click "Install" in the popup',
    desktopDone: 'Frostline will open as a standalone app window!',
    step: 'Step',
    backHome: 'Back to Home',
    note: 'Note: The app must be opened in Safari (iPhone) or Chrome (Android) for installation to work.',
  },
  no: {
    title: 'Installer Frostline-appen',
    subtitle: 'Få rask tilgang til arktiske transporter direkte fra startskjermen din',
    benefits: 'Hvorfor installere?',
    benefit1: 'Umiddelbar tilgang — ingen nettleser nødvendig',
    benefit2: 'Fungerer offline — se ruter og priser når som helst',
    benefit3: 'Raskere lasting — app-lignende opplevelse',
    benefit4: 'Varslinger om bookingoppdateringer',
    iosTitle: 'Installer på iPhone / iPad',
    iosStep1: 'Åpne frostline.as i Safari',
    iosStep2: 'Trykk på Del-knappen nederst på skjermen',
    iosStep3: 'Bla ned og trykk "Legg til på Hjem-skjerm"',
    iosStep4: 'Trykk "Legg til" øverst til høyre',
    iosDone: 'Frostline app-ikonet vil nå vises på startskjermen din!',
    androidTitle: 'Installer på Android',
    androidStep1: 'Åpne frostline.as i Chrome',
    androidStep2: 'Trykk på tre-prikk-menyen øverst til høyre',
    androidStep3: 'Trykk "Legg til på startskjermen" eller "Installer app"',
    androidStep4: 'Bekreft ved å trykke "Installer" eller "Legg til"',
    androidDone: 'Frostline-appen blir installert og tilgjengelig fra startskjermen din!',
    desktopTitle: 'Installer på PC / Mac',
    desktopStep1: 'Åpne frostline.as i Chrome eller Edge',
    desktopStep2: 'Se etter installasjons-ikonet i adressefeltet',
    desktopStep3: 'Klikk "Installer" i popup-vinduet',
    desktopDone: 'Frostline åpnes som et eget app-vindu!',
    step: 'Steg',
    backHome: 'Tilbake til forsiden',
    note: 'Merk: Appen må åpnes i Safari (iPhone) eller Chrome (Android) for at installasjonen skal fungere.',
  },
};

function StepCard({ number, icon, text, stepLabel }: { number: number; icon: React.ReactNode; text: string; stepLabel: string }) {
  return (
    <div className="flex items-start gap-4 py-3" data-testid={`install-step-${number}`}>
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary font-semibold text-sm">
        {number}
      </div>
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <div className="flex-shrink-0 text-primary">{icon}</div>
        <p className="text-foreground text-sm sm:text-base leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

export default function Install() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        titleEn="Install Frostline App"
        titleNo="Installer Frostline-appen"
        descriptionEn="Add Frostline AS to your home screen for quick access to Arctic transport booking and route information."
        descriptionNo="Legg Frostline AS til startskjermen din for rask tilgang til arktisk transportbooking og ruteinformasjon."
        path="/install"
      />
      <section className="relative py-16 sm:py-24 bg-[#091e1b] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d2925]/80 to-[#091e1b]" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <Smartphone className="w-12 h-12 mx-auto mb-6 text-white/80" />
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white" data-testid="text-install-title">
            {t.title}
          </h1>
          <p className="text-lg text-white/70 max-w-lg mx-auto">
            {t.subtitle}
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-10">
        <Card className="p-6 sm:p-8" data-testid="card-benefits">
          <h2 className="text-xl font-semibold text-foreground mb-5 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-primary" />
            {t.benefits}
          </h2>
          <ul className="space-y-3">
            {[t.benefit1, t.benefit2, t.benefit3, t.benefit4].map((benefit, i) => (
              <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm sm:text-base">
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                {benefit}
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-6 sm:p-8" data-testid="card-ios-instructions">
          <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <svg className="w-5 h-5 text-muted-foreground" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            {t.iosTitle}
          </h2>
          <div className="space-y-1 divide-y divide-border/50">
            <StepCard number={1} stepLabel={t.step} icon={<Smartphone className="w-5 h-5" />} text={t.iosStep1} />
            <StepCard number={2} stepLabel={t.step} icon={<Share className="w-5 h-5" />} text={t.iosStep2} />
            <StepCard number={3} stepLabel={t.step} icon={<PlusSquare className="w-5 h-5" />} text={t.iosStep3} />
            <StepCard number={4} stepLabel={t.step} icon={<CheckCircle className="w-5 h-5" />} text={t.iosStep4} />
          </div>
          <div className="mt-5 p-4 bg-primary/5 dark:bg-primary/10 rounded-xl text-sm text-primary font-medium">
            {t.iosDone}
          </div>
        </Card>

        <Card className="p-6 sm:p-8" data-testid="card-android-instructions">
          <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <svg className="w-5 h-5 text-muted-foreground" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85a.637.637 0 00-.83.22l-1.88 3.24a11.463 11.463 0 00-8.94 0L5.65 5.67c-.16-.31-.54-.43-.85-.27-.31.18-.43.55-.27.85L6.4 9.48C3.3 11.25 1.28 14.44 1 18h22c-.28-3.56-2.3-6.75-5.4-8.52zM7 15.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm10 0a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z"/>
            </svg>
            {t.androidTitle}
          </h2>
          <div className="space-y-1 divide-y divide-border/50">
            <StepCard number={1} stepLabel={t.step} icon={<Smartphone className="w-5 h-5" />} text={t.androidStep1} />
            <StepCard number={2} stepLabel={t.step} icon={<MoreVertical className="w-5 h-5" />} text={t.androidStep2} />
            <StepCard number={3} stepLabel={t.step} icon={<ArrowDown className="w-5 h-5" />} text={t.androidStep3} />
            <StepCard number={4} stepLabel={t.step} icon={<CheckCircle className="w-5 h-5" />} text={t.androidStep4} />
          </div>
          <div className="mt-5 p-4 bg-primary/5 dark:bg-primary/10 rounded-xl text-sm text-primary font-medium">
            {t.androidDone}
          </div>
        </Card>

        <Card className="p-6 sm:p-8" data-testid="card-desktop-instructions">
          <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <svg className="w-5 h-5 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
            {t.desktopTitle}
          </h2>
          <div className="space-y-1 divide-y divide-border/50">
            <StepCard number={1} stepLabel={t.step} icon={<Smartphone className="w-5 h-5" />} text={t.desktopStep1} />
            <StepCard number={2} stepLabel={t.step} icon={<ArrowDown className="w-5 h-5" />} text={t.desktopStep2} />
            <StepCard number={3} stepLabel={t.step} icon={<CheckCircle className="w-5 h-5" />} text={t.desktopStep3} />
          </div>
          <div className="mt-5 p-4 bg-primary/5 dark:bg-primary/10 rounded-xl text-sm text-primary font-medium">
            {t.desktopDone}
          </div>
        </Card>

        <div className="p-4 bg-muted/50 rounded-xl text-sm text-muted-foreground text-center">
          {t.note}
        </div>

        <div className="text-center pb-4">
          <Link href="/">
            <Button
              variant="outline"
              className="rounded-xl"
              data-testid="button-back-home"
            >
              {t.backHome}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
