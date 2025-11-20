import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'no';

interface Translations {
  en: TranslationContent;
  no: TranslationContent;
}

interface TranslationContent {
  navbar: {
    home: string;
    services: string;
    about: string;
    partners: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
  };
  home: {
    servicesTitle: string;
    servicesSubtitle: string;
    viewAllServices: string;
    whyChooseTitle: string;
    whyChooseText: string;
    benefits: string[];
    forTravelPartners: string;
    forTravelPartnersText: string;
    learnMore: string;
    privateTravelers: string;
    privateTravelersText: string;
    bookNow: string;
    ctaTitle: string;
    ctaSubtitle: string;
    contactUs: string;
    becomePartner: string;
    services: Array<{
      title: string;
      description: string;
    }>;
  };
  services: {
    title: string;
    subtitle: string;
    privateTransfers: string;
    privateTransfersDesc: string;
    privateTransfersFeatures: string[];
    bookYourTransfer: string;
    bookYourTransferText: string;
    partnerTransport: string;
    partnerTransportDesc: string;
    partnerTransportFeatures: string[];
    becomePartner: string;
    becomePartnerText: string;
    northernLights: string;
    northernLightsDesc: string;
    northernLightsFeatures: string[];
    comingSoon: string;
    comingSoonText: string;
    expressInterest: string;
    minibusRental: string;
    minibusRentalDesc: string;
    minibusRentalFeatures: string[];
    rentalInquiry: string;
    rentalInquiryText: string;
    ctaTitle: string;
    ctaSubtitle: string;
    contactUsToday: string;
    serviceCards: Array<{
      title: string;
      description: string;
    }>;
  };
  about: {
    title: string;
    subtitle: string;
    ourStory: string;
    storyText1: string;
    storyText2: string;
    storyText3: string;
    companyDetails: string;
    legalName: string;
    orgNumber: string;
    address: string;
    naceIndustry: string;
    driverCompetence: string;
    driverCompetenceSubtitle: string;
    mainDriver: string;
    mainDriverText: string;
    certifications: string[];
    safetyFirst: string;
    safetyFirstText: string;
    customerService: string;
    customerServiceText: string;
    ourValues: string;
    reliability: string;
    reliabilityText: string;
    service: string;
    serviceText: string;
    flexibility: string;
    flexibilityText: string;
    ctaTitle: string;
    ctaSubtitle: string;
    becomePartner: string;
    contactUs: string;
  };
  partners: {
    title: string;
    subtitle: string;
    introTitle: string;
    introText: string;
    benefitsTitle: string;
    benefitsSubtitle: string;
    benefits: Array<{
      title: string;
      description: string;
    }>;
    whoWeWorkWith: string;
    dmcs: string;
    dmcsText: string;
    hotels: string;
    hotelsText: string;
    tourOperators: string;
    tourOperatorsText: string;
    howItWorks: string;
    howItWorksSubtitle: string;
    step1Title: string;
    step1Text: string;
    step2Title: string;
    step2Text: string;
    step3Title: string;
    step3Text: string;
    step4Title: string;
    step4Text: string;
    ctaTitle: string;
    ctaSubtitle: string;
    requestPartnership: string;
  };
  contact: {
    title: string;
    subtitle: string;
    sendMessage: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    sendButton: string;
    sending: string;
    contactInfo: string;
    emailLabel: string;
    phoneLabel: string;
    phoneText: string;
    phoneSubtext: string;
    location: string;
    locationText1: string;
    locationText2: string;
    availability: string;
    availabilityText1: string;
    availabilityText2: string;
    companyDetails: string;
    companyName: string;
    orgNumber: string;
    partnershipTitle: string;
    partnershipText: string;
    partnershipButton: string;
    messagePlaceholder: string;
  };
  footer: {
    companyDescription: string;
    quickLinks: string;
    copyright: string;
  };
}

const translations: Translations = {
  en: {
    navbar: {
      home: 'Home',
      services: 'Services',
      about: 'About Us',
      partners: 'Partners',
      contact: 'Contact',
    },
    hero: {
      title: 'Frostline AS',
      subtitle: 'Private transfers and tours in Northern Norway',
    },
    home: {
      servicesTitle: 'Our Services',
      servicesSubtitle: 'Professional transport solutions for every need in Northern Norway',
      viewAllServices: 'View All Services',
      whyChooseTitle: 'Why Choose Frostline AS?',
      whyChooseText: 'We understand the unique challenges of Arctic transport. With years of experience navigating Northern Norwegian roads in all conditions, we provide the reliability and professionalism your guests deserve.',
      benefits: [
        'Safe and comfortable transport year-round',
        'Certified and experienced drivers',
        'Flexible scheduling for your needs',
        'Modern, well-maintained vehicles',
        'Quick and reliable communication',
        'Competitive rates for all services',
      ],
      forTravelPartners: 'For Travel Partners',
      forTravelPartnersText: 'We work closely with DMCs, hotels, and tour operators to ensure seamless logistics for your guests.',
      learnMore: 'Learn More',
      privateTravelers: 'Private Travelers',
      privateTravelersText: 'Enjoy personalized transfers and tours tailored to your schedule and preferences.',
      bookNow: 'Book Now',
      ctaTitle: 'Ready to Experience Arctic Transport Excellence?',
      ctaSubtitle: 'Contact us today to discuss your transport needs or establish a partnership.',
      contactUs: 'Contact Us',
      becomePartner: 'Become a Partner',
      services: [
        {
          title: 'Private Transfers',
          description: 'Airport transfers, hotel pick-ups, sightseeing and custom routes in Tromsø and surrounding areas.',
        },
        {
          title: 'Partner Transport',
          description: 'Reliable logistics for DMCs, tour operators and activity companies. We ensure your guests arrive on time — every time.',
        },
        {
          title: 'Northern Lights & Seasonal Tours',
          description: 'Optional add-on product for the future. Small-group experiences with a certified driver.',
        },
      ],
    },
    services: {
      title: 'Our Services',
      subtitle: 'Professional transport solutions for Northern Norway',
      privateTransfers: 'Private Transfers',
      privateTransfersDesc: 'Airport transfers, hotel pick-ups, sightseeing and custom routes in Tromsø and surrounding areas. We provide comfortable, reliable transport tailored to your schedule.',
      privateTransfersFeatures: [
        'Airport to hotel transfers',
        'Hotel pick-ups and drop-offs',
        'Custom sightseeing routes',
        'Flexible scheduling',
        'All-weather Arctic driving expertise',
      ],
      bookYourTransfer: 'Book Your Transfer',
      bookYourTransferText: 'Contact us to arrange your private transfer. We respond quickly to all inquiries.',
      partnerTransport: 'Partner Transport',
      partnerTransportDesc: 'Reliable logistics for DMCs, tour operators and activity companies. We ensure your guests arrive on time — every time.',
      partnerTransportFeatures: [
        'Dedicated driver support',
        'Flexible scheduling coordination',
        'High reliability guarantee',
        'Quick communication response',
        'Clean, comfortable vehicles',
      ],
      becomePartner: 'Become a Partner',
      becomePartnerText: 'Join our network of travel partners and ensure your guests receive reliable, professional transport.',
      northernLights: 'Northern Lights & Seasonal Tours',
      northernLightsDesc: 'Optional add-on product for the future. Small-group experiences with a certified driver who knows the best viewing locations.',
      northernLightsFeatures: [
        'Small group tours (max 8 people)',
        'Certified, experienced drivers',
        'Seasonal tour options',
        'Flexible departure times',
        'Arctic expertise included',
      ],
      comingSoon: 'Coming Soon',
      comingSoonText: "We're developing our tour offerings. Contact us to express interest or inquire about custom tours.",
      expressInterest: 'Express Interest',
      minibusRental: 'Minibus Rental',
      minibusRentalDesc: 'Rent our modern minibus with or without driver. Ideal for groups, events, and excursions.',
      minibusRentalFeatures: [
        'Modern, well-maintained vehicles',
        'With or without driver options',
        'Suitable for groups and events',
        'Flexible rental periods',
        'Fully insured and serviced',
      ],
      rentalInquiry: 'Rental Inquiry',
      rentalInquiryText: 'Get in touch to discuss your minibus rental needs. We offer flexible options for all group sizes.',
      ctaTitle: 'Need a Custom Solution?',
      ctaSubtitle: 'We can tailor our services to meet your specific transport needs in Northern Norway.',
      contactUsToday: 'Contact Us Today',
      serviceCards: [
        {
          title: 'Private Transfers',
          description: 'Airport transfers, hotel pick-ups, sightseeing and custom routes in Tromsø and surrounding areas.',
        },
        {
          title: 'Partner Transport',
          description: 'Reliable logistics for DMCs, tour operators and activity companies. We ensure your guests arrive on time — every time.',
        },
        {
          title: 'Northern Lights & Seasonal Tours',
          description: 'Optional add-on product for the future. Small-group experiences with a certified driver.',
        },
        {
          title: 'Minibus Rental',
          description: 'Rent our modern minibus with or without driver. Ideal for groups, events, and excursions.',
        },
      ],
    },
    about: {
      title: 'About Us',
      subtitle: 'Your trusted transport partner in Northern Norway',
      ourStory: 'Our Story',
      storyText1: 'Frostline AS is a transport company organized as a limited company, operating in passenger transport on demand. The company offers safe and flexible transport services, and can also participate in cooperation with other companies and related investments.',
      storyText2: 'With a focus on reliability, service and flexibility, we work closely with partners who need a trustworthy transport provider year-round. Our commitment to excellence has made us a preferred choice for DMCs, hotels, and tour operators throughout the Tromsø region.',
      storyText3: 'We understand the unique challenges of Arctic transport and have built our business around providing safe, comfortable, and reliable solutions regardless of weather conditions or season.',
      companyDetails: 'Company Details',
      legalName: 'Legal Name',
      orgNumber: 'Organization Number',
      address: 'Address',
      naceIndustry: 'NACE Industry',
      driverCompetence: 'Driver & Competence',
      driverCompetenceSubtitle: 'Our team brings professional expertise and Arctic experience to every journey',
      mainDriver: 'Main Driver: Jørgen',
      mainDriverText: 'Our main driver Jørgen holds professional certifications, safety training and experience with Northern Norwegian road conditions. With years of expertise navigating Arctic roads in all seasons, Jørgen ensures safe and comfortable transport for all passengers.',
      certifications: [
        'Professional driver certification',
        'Arctic driving safety training',
        'First aid certified',
        'Extensive Northern Norwegian road experience',
        'Customer service excellence',
      ],
      safetyFirst: 'Safety First',
      safetyFirstText: 'All our drivers undergo rigorous safety training specific to Arctic conditions, ensuring passenger safety in all weather situations.',
      customerService: 'Customer Service',
      customerServiceText: 'We pride ourselves on professional, friendly service that makes every journey comfortable and stress-free for our guests.',
      ourValues: 'Our Values',
      reliability: 'Reliability',
      reliabilityText: "We're there when you need us, on time, every time. Your guests can count on us.",
      service: 'Service',
      serviceText: 'Professional, friendly service that exceeds expectations and creates positive experiences.',
      flexibility: 'Flexibility',
      flexibilityText: 'We adapt to your needs, offering customized solutions for every transport requirement.',
      ctaTitle: 'Partner With Us',
      ctaSubtitle: 'Join our network of satisfied partners and experience the Frostline difference.',
      becomePartner: 'Become a Partner',
      contactUs: 'Contact Us',
    },
    partners: {
      title: 'Partner With Us',
      subtitle: 'Building long-term relationships with travel professionals',
      introTitle: 'Your Trusted Transport Partner',
      introText: 'We work with DMCs, travel agencies and activity providers. Our goal is long-term cooperation where your guests receive top service. With Frostline AS as your transport partner, you can focus on your core business while we handle the logistics.',
      benefitsTitle: 'Partnership Benefits',
      benefitsSubtitle: 'Everything you need for reliable, professional transport logistics',
      benefits: [
        {
          title: 'Dedicated Driver',
          description: 'Your guests receive personalized attention from our experienced professional drivers.',
        },
        {
          title: 'Flexible Scheduling',
          description: 'We adapt to your operational needs with customizable pickup and drop-off times.',
        },
        {
          title: 'High Reliability',
          description: 'Consistent, punctual service you can depend on for all your transport logistics.',
        },
        {
          title: 'Quick Communication',
          description: 'Fast response times and clear communication channels for seamless coordination.',
        },
        {
          title: 'Clean & Comfortable Vehicle',
          description: 'Modern, well-maintained vehicles that provide a premium experience for your guests.',
        },
        {
          title: 'Year-Round Service',
          description: 'Reliable transport in all seasons and weather conditions throughout Northern Norway.',
        },
      ],
      whoWeWorkWith: 'Who We Work With',
      dmcs: 'DMCs & Travel Agencies',
      dmcsText: 'We provide reliable logistics for destination management companies and travel agencies, ensuring seamless transport for your clients throughout their Northern Norway experience.',
      hotels: 'Hotels & Accommodations',
      hotelsText: 'Partner with us for consistent airport transfers and excursion transport, giving your guests a premium arrival and departure experience.',
      tourOperators: 'Tour & Activity Operators',
      tourOperatorsText: 'We handle the transport logistics so you can focus on delivering exceptional experiences. Reliable pickups and drop-offs for all your activities.',
      howItWorks: 'How It Works',
      howItWorksSubtitle: 'Getting started is simple and straightforward',
      step1Title: 'Initial Contact',
      step1Text: 'Reach out to us via our contact form or email. Tell us about your transport needs and expected volume.',
      step2Title: 'Consultation',
      step2Text: "We'll discuss your specific requirements, scheduling needs, and how we can best support your operations.",
      step3Title: 'Partnership Agreement',
      step3Text: 'We establish clear terms, pricing, and communication protocols that work for both parties.',
      step4Title: 'Ongoing Support',
      step4Text: "Enjoy reliable service with dedicated support. We're always available to adjust and optimize as your needs evolve.",
      ctaTitle: 'Ready to Partner With Us?',
      ctaSubtitle: "Let's discuss how we can support your transport needs in Northern Norway.",
      requestPartnership: 'Request Partnership',
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Get in touch with Frostline AS for transport inquiries or partnership opportunities',
      sendMessage: 'Send us a message',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      message: 'Message',
      sendButton: 'Send Message',
      sending: 'Sending...',
      contactInfo: 'Contact Information',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      phoneText: 'Available every day',
      phoneSubtext: 'We respond quickly',
      location: 'Location',
      locationText1: 'Based in Gamle Fredrikstad',
      locationText2: 'Operating in Northern Norway',
      availability: 'Availability',
      availabilityText1: 'Available every day',
      availabilityText2: 'Quick response times',
      companyDetails: 'Company Details',
      companyName: 'Company Name:',
      orgNumber: 'Org. Number:',
      partnershipTitle: 'Looking for Partnership?',
      partnershipText: 'Learn more about our partnership opportunities for DMCs, hotels, and tour operators.',
      partnershipButton: 'Partnership Information',
      messagePlaceholder: 'Tell us about your transport needs or partnership inquiry...',
    },
    footer: {
      companyDescription: 'Frostline AS is a transport company organized as a limited company, operating in passenger transport on demand.',
      quickLinks: 'Quick Links',
      copyright: '© 2025 Frostline AS. All rights reserved.',
    },
  },
  no: {
    navbar: {
      home: 'Hjem',
      services: 'Tjenester',
      about: 'Om oss',
      partners: 'Partnere',
      contact: 'Kontakt',
    },
    hero: {
      title: 'Frostline AS',
      subtitle: 'Private transporter og turer i Nord-Norge',
    },
    home: {
      servicesTitle: 'Våre tjenester',
      servicesSubtitle: 'Profesjonelle transportløsninger for alle behov i Nord-Norge',
      viewAllServices: 'Se alle tjenester',
      whyChooseTitle: 'Hvorfor velge Frostline AS?',
      whyChooseText: 'Vi forstår de unike utfordringene ved arktisk transport. Med mange års erfaring med å navigere nordnorske veier i alle forhold, leverer vi pålitelighet og profesjonalitet dine gjester fortjener.',
      benefits: [
        'Trygg og komfortabel transport året rundt',
        'Sertifiserte og erfarne sjåfører',
        'Fleksibel planlegging tilpasset dine behov',
        'Moderne, velholdte kjøretøy',
        'Rask og pålitelig kommunikasjon',
        'Konkurransedyktige priser for alle tjenester',
      ],
      forTravelPartners: 'For reisepartnere',
      forTravelPartnersText: 'Vi jobber tett med DMC-er, hoteller og turoperatører for å sikre sømløs logistikk for dine gjester.',
      learnMore: 'Les mer',
      privateTravelers: 'Private reisende',
      privateTravelersText: 'Nyt personlig tilpassede turer og transporter skreddersydd til din timeplan og preferanser.',
      bookNow: 'Bestill nå',
      ctaTitle: 'Klar til å oppleve arktisk transport av ypperste kvalitet?',
      ctaSubtitle: 'Kontakt oss i dag for å diskutere dine transportbehov eller etablere et partnerskap.',
      contactUs: 'Kontakt oss',
      becomePartner: 'Bli partner',
      services: [
        {
          title: 'Private transporter',
          description: 'Flytransport, hotellhenting, sightseeing og skreddersydde ruter i Tromsø og omegn.',
        },
        {
          title: 'Partnertransport',
          description: 'Pålitelig logistikk for DMC-er, turoperatører og aktivitetsselskaper. Vi sørger for at gjestene dine kommer frem i tide — hver gang.',
        },
        {
          title: 'Nordlys og sesongbaserte turer',
          description: 'Valgfritt tilleggsprodukt for fremtiden. Smågrupper med sertifisert sjåfør.',
        },
      ],
    },
    services: {
      title: 'Våre tjenester',
      subtitle: 'Profesjonelle transportløsninger for Nord-Norge',
      privateTransfers: 'Private transporter',
      privateTransfersDesc: 'Flytransport, hotellhenting, sightseeing og skreddersydde ruter i Tromsø og omegn. Vi tilbyr komfortabel, pålitelig transport tilpasset din timeplan.',
      privateTransfersFeatures: [
        'Transport mellom flyplass og hotell',
        'Hotellhenting og avlevering',
        'Skreddersydde sightseeing-ruter',
        'Fleksibel planlegging',
        'Arktisk kjøreekspertise i alle værforhold',
      ],
      bookYourTransfer: 'Bestill transport',
      bookYourTransferText: 'Kontakt oss for å bestille din private transport. Vi svarer raskt på alle henvendelser.',
      partnerTransport: 'Partnertransport',
      partnerTransportDesc: 'Pålitelig logistikk for DMC-er, turoperatører og aktivitetsselskaper. Vi sørger for at gjestene dine kommer frem i tide — hver gang.',
      partnerTransportFeatures: [
        'Dedikert sjåførstøtte',
        'Fleksibel planleggingskoordinering',
        'Høy pålitelighetsgaranti',
        'Rask kommunikasjon',
        'Rene, komfortable kjøretøy',
      ],
      becomePartner: 'Bli partner',
      becomePartnerText: 'Bli med i vårt nettverk av reisepartnere og sørg for at dine gjester får pålitelig, profesjonell transport.',
      northernLights: 'Nordlys og sesongbaserte turer',
      northernLightsDesc: 'Valgfritt tilleggsprodukt for fremtiden. Smågrupper med sertifisert sjåfør som kjenner de beste observasjonsstedene.',
      northernLightsFeatures: [
        'Smågruppeturer (maks 8 personer)',
        'Sertifiserte, erfarne sjåfører',
        'Sesongbaserte turalternativer',
        'Fleksible avgangstider',
        'Arktisk ekspertise inkludert',
      ],
      comingSoon: 'Kommer snart',
      comingSoonText: 'Vi utvikler våre turtilbud. Kontakt oss for å uttrykke interesse eller spørre om skreddersydde turer.',
      expressInterest: 'Uttrykk interesse',
      minibusRental: 'Minibussutleie',
      minibusRentalDesc: 'Lei vår moderne minibuss med eller uten sjåfør. Ideell for grupper, arrangementer og utflukter.',
      minibusRentalFeatures: [
        'Moderne, velholdte kjøretøy',
        'Med eller uten sjåfør',
        'Passer for grupper og arrangementer',
        'Fleksible leieperioder',
        'Fullt forsikret og vedlikeholdt',
      ],
      rentalInquiry: 'Leieforespørsel',
      rentalInquiryText: 'Ta kontakt for å diskutere dine minibussutleiebehov. Vi tilbyr fleksible alternativer for alle gruppestørrelser.',
      ctaTitle: 'Trenger du en skreddersydd løsning?',
      ctaSubtitle: 'Vi kan tilpasse våre tjenester for å møte dine spesifikke transportbehov i Nord-Norge.',
      contactUsToday: 'Kontakt oss i dag',
      serviceCards: [
        {
          title: 'Private transporter',
          description: 'Flytransport, hotellhenting, sightseeing og skreddersydde ruter i Tromsø og omegn.',
        },
        {
          title: 'Partnertransport',
          description: 'Pålitelig logistikk for DMC-er, turoperatører og aktivitetsselskaper. Vi sørger for at gjestene dine kommer frem i tide — hver gang.',
        },
        {
          title: 'Nordlys og sesongbaserte turer',
          description: 'Valgfritt tilleggsprodukt for fremtiden. Smågrupper med sertifisert sjåfør.',
        },
        {
          title: 'Minibussutleie',
          description: 'Lei vår moderne minibuss med eller uten sjåfør. Ideell for grupper, arrangementer og utflukter.',
        },
      ],
    },
    about: {
      title: 'Om oss',
      subtitle: 'Din pålitelige transportpartner i Nord-Norge',
      ourStory: 'Vår historie',
      storyText1: 'Frostline AS er et transportselskap organisert som et aksjeselskap, med virksomhet innen passasjertransport på forespørsel. Selskapet tilbyr trygge og fleksible transporttjenester, og kan også delta i samarbeid med andre selskaper og relaterte investeringer.',
      storyText2: 'Med fokus på pålitelighet, service og fleksibilitet samarbeider vi tett med partnere som trenger en pålitelig transportleverandør året rundt. Vår forpliktelse til fortreffelighet har gjort oss til et foretrukket valg for DMC-er, hoteller og turoperatører i hele Tromsø-regionen.',
      storyText3: 'Vi forstår de unike utfordringene ved arktisk transport og har bygget virksomheten vår rundt å tilby trygge, komfortable og pålitelige løsninger uavhengig av værforhold eller sesong.',
      companyDetails: 'Selskapsdetaljer',
      legalName: 'Juridisk navn',
      orgNumber: 'Organisasjonsnummer',
      address: 'Adresse',
      naceIndustry: 'NACE-bransje',
      driverCompetence: 'Sjåfør og kompetanse',
      driverCompetenceSubtitle: 'Vårt team bringer profesjonell ekspertise og arktisk erfaring til hver reise',
      mainDriver: 'Hovedsjåfør: Jørgen',
      mainDriverText: 'Vår hovedsjåfør Jørgen har profesjonelle sertifiseringer, sikkerhetstrening og erfaring med nordnorske veiforhold. Med mange års ekspertise i å navigere arktiske veier i alle årstider, sikrer Jørgen trygg og komfortabel transport for alle passasjerer.',
      certifications: [
        'Profesjonell sjåførsertifisering',
        'Arktisk kjøresikkerhetstrening',
        'Førstehjelp-sertifisert',
        'Omfattende nordnorsk veierfaring',
        'Kundeservicefortreffelighet',
      ],
      safetyFirst: 'Sikkerhet først',
      safetyFirstText: 'Alle våre sjåfører gjennomgår grundig sikkerhetstrening spesifikk for arktiske forhold, som sikrer passasjersikkerhet i alle værsituasjoner.',
      customerService: 'Kundeservice',
      customerServiceText: 'Vi er stolte av vår profesjonelle, vennlige service som gjør hver reise komfortabel og stressfri for våre gjester.',
      ourValues: 'Våre verdier',
      reliability: 'Pålitelighet',
      reliabilityText: 'Vi er der når du trenger oss, i tide, hver gang. Dine gjester kan stole på oss.',
      service: 'Service',
      serviceText: 'Profesjonell, vennlig service som overgår forventninger og skaper positive opplevelser.',
      flexibility: 'Fleksibilitet',
      flexibilityText: 'Vi tilpasser oss dine behov og tilbyr skreddersydde løsninger for alle transportkrav.',
      ctaTitle: 'Bli partner med oss',
      ctaSubtitle: 'Bli med i vårt nettverk av fornøyde partnere og opplev Frostline-forskjellen.',
      becomePartner: 'Bli partner',
      contactUs: 'Kontakt oss',
    },
    partners: {
      title: 'Bli partner med oss',
      subtitle: 'Bygge langsiktige relasjoner med reiseprofesjonelle',
      introTitle: 'Din pålitelige transportpartner',
      introText: 'Vi samarbeider med DMC-er, reisebyråer og aktivitetsleverandører. Vårt mål er langsiktig samarbeid der dine gjester får toppservice. Med Frostline AS som din transportpartner kan du fokusere på kjernevirksomheten din mens vi håndterer logistikken.',
      benefitsTitle: 'Partnerfordeler',
      benefitsSubtitle: 'Alt du trenger for pålitelig, profesjonell transportlogistikk',
      benefits: [
        {
          title: 'Dedikert sjåfør',
          description: 'Dine gjester får personlig oppmerksomhet fra våre erfarne profesjonelle sjåfører.',
        },
        {
          title: 'Fleksibel planlegging',
          description: 'Vi tilpasser oss dine operative behov med skreddersydde hente- og leveringstider.',
        },
        {
          title: 'Høy pålitelighet',
          description: 'Konsekvent, punktlig service du kan stole på for all din transportlogistikk.',
        },
        {
          title: 'Rask kommunikasjon',
          description: 'Raske responstider og klare kommunikasjonskanaler for sømløs koordinering.',
        },
        {
          title: 'Rent og komfortabelt kjøretøy',
          description: 'Moderne, velholdte kjøretøy som gir en premium opplevelse for dine gjester.',
        },
        {
          title: 'Service hele året',
          description: 'Pålitelig transport i alle årstider og værforhold i hele Nord-Norge.',
        },
      ],
      whoWeWorkWith: 'Hvem vi jobber med',
      dmcs: 'DMC-er og reisebyråer',
      dmcsText: 'Vi tilbyr pålitelig logistikk for destinasjonsledelsesselskaper og reisebyråer, og sikrer sømløs transport for dine klienter gjennom hele deres Nord-Norge-opplevelse.',
      hotels: 'Hoteller og overnattingssteder',
      hotelsText: 'Samarbeid med oss for konsekvent flytransport og ekskursjonstransport, og gi gjestene dine en premium ankomst- og avreiseopplevelse.',
      tourOperators: 'Tur- og aktivitetsoperatører',
      tourOperatorsText: 'Vi håndterer transportlogistikken slik at du kan fokusere på å levere eksepsjonelle opplevelser. Pålitelig henting og avlevering for alle dine aktiviteter.',
      howItWorks: 'Hvordan det fungerer',
      howItWorksSubtitle: 'Å komme i gang er enkelt og greit',
      step1Title: 'Første kontakt',
      step1Text: 'Kontakt oss via vårt kontaktskjema eller e-post. Fortell oss om dine transportbehov og forventet volum.',
      step2Title: 'Konsultasjon',
      step2Text: 'Vi diskuterer dine spesifikke krav, planleggingsbehov og hvordan vi best kan støtte dine operasjoner.',
      step3Title: 'Partneravtale',
      step3Text: 'Vi etablerer klare vilkår, priser og kommunikasjonsprotokoller som fungerer for begge parter.',
      step4Title: 'Løpende støtte',
      step4Text: 'Nyt pålitelig service med dedikert støtte. Vi er alltid tilgjengelige for å justere og optimalisere etter som dine behov utvikler seg.',
      ctaTitle: 'Klar til å bli partner med oss?',
      ctaSubtitle: 'La oss diskutere hvordan vi kan støtte dine transportbehov i Nord-Norge.',
      requestPartnership: 'Forespør partnerskap',
    },
    contact: {
      title: 'Kontakt oss',
      subtitle: 'Ta kontakt med Frostline AS for transportforespørsler eller partnerskapsmuligheter',
      sendMessage: 'Send oss en melding',
      name: 'Navn',
      email: 'E-post',
      phone: 'Telefon',
      message: 'Melding',
      sendButton: 'Send melding',
      sending: 'Sender...',
      contactInfo: 'Kontaktinformasjon',
      emailLabel: 'E-post',
      phoneLabel: 'Telefon',
      phoneText: 'Tilgjengelig hver dag',
      phoneSubtext: 'Vi svarer raskt',
      location: 'Lokasjon',
      locationText1: 'Basert i Gamle Fredrikstad',
      locationText2: 'Driver i Nord-Norge',
      availability: 'Tilgjengelighet',
      availabilityText1: 'Tilgjengelig hver dag',
      availabilityText2: 'Raske responstider',
      companyDetails: 'Selskapsdetaljer',
      companyName: 'Selskapsnavn:',
      orgNumber: 'Org.nr:',
      partnershipTitle: 'Leter etter partnerskap?',
      partnershipText: 'Lær mer om våre partnerskapsmuligheter for DMC-er, hoteller og turoperatører.',
      partnershipButton: 'Partnerinformasjon',
      messagePlaceholder: 'Fortell oss om dine transportbehov eller partnerforespørsel...',
    },
    footer: {
      companyDescription: 'Frostline AS er et transportselskap organisert som et aksjeselskap, med virksomhet innen passasjertransport på forespørsel.',
      quickLinks: 'Hurtiglenker',
      copyright: '© 2025 Frostline AS. Alle rettigheter reservert.',
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationContent;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    // Get from localStorage or default to English
    const stored = localStorage.getItem('frostline-language');
    return (stored === 'no' || stored === 'en') ? stored : 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('frostline-language', lang);
  };

  useEffect(() => {
    // Persist language preference
    localStorage.setItem('frostline-language', language);
  }, [language]);

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
