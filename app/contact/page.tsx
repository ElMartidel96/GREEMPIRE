'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Leaf,
  CheckCircle,
  ArrowLeft,
  User,
  Globe,
  Calendar,
  Home,
  Scissors,
  Droplets,
  Sparkles,
  Flower2,
  TreePine,
  FileText,
} from 'lucide-react';

const translations = {
  en: {
    backToHome: 'Back to home',
    heroTitle: 'Get Your Free Quote',
    heroSubtitle: 'Tell us about your property and the services you need. We\'ll get back to you within 24 hours with a custom plan and transparent pricing.',
    phoneTitle: 'Call Us',
    phoneDesc: 'Speak with us directly',
    phoneNumber: '(800) 555-1234',
    emailTitle: 'Email Us',
    emailDesc: 'Response within 24 hours',
    emailAddress: 'info@greenempirellc.com',
    locationTitle: 'Service Area',
    locationDesc: 'Serving your community',
    locationAddress: 'Greater Metro Area',
    hoursTitle: 'Hours',
    hoursDesc: 'Customer service',
    hoursValue: 'Mon-Sat: 7AM-7PM',
    formTitle: 'Request a Free Estimate',
    formSubtitle: 'Fill out the details below and we\'ll create a custom service plan for your property',
    fullName: 'Full Name',
    fullNamePlaceholder: 'Your full name',
    email: 'Email',
    emailPlaceholder: 'you@email.com',
    phone: 'Phone',
    phonePlaceholder: '(555) 123-4567',
    address: 'Property Address',
    addressPlaceholder: '123 Main St, City, State',
    services: 'Services Needed',
    serviceOptions: [
      { label: 'Lawn Mowing & Maintenance', icon: 'scissors' },
      { label: 'Yard Cleanup & Leaf Removal', icon: 'leaf' },
      { label: 'Gutter Cleaning', icon: 'droplets' },
      { label: 'Driveway Pressure Washing', icon: 'sparkles' },
      { label: 'Garden Design & Planting', icon: 'flower' },
      { label: 'Mulching & Bed Maintenance', icon: 'tree' },
      { label: 'Hedge & Shrub Trimming', icon: 'scissors' },
      { label: 'Other', icon: 'file' },
    ],
    lotSize: 'Lot Size',
    lotPlaceholder: 'Select lot size',
    lotOptions: ['Small (under 5,000 sq ft)', 'Medium (5,000-10,000 sq ft)', 'Large (10,000-20,000 sq ft)', 'Extra Large (20,000+ sq ft)'],
    frequency: 'Service Frequency',
    freqPlaceholder: 'Select frequency',
    freqOptions: ['One-time service', 'Bi-weekly', 'Weekly', 'Monthly package', 'Seasonal package', 'Annual plan'],
    message: 'Additional Details',
    messagePlaceholder: 'Tell us about your property, specific needs, or any questions...',
    submitButton: 'Request Free Quote',
    formDisclaimer: 'Free estimates. No obligation. Your information is protected.',
    successTitle: 'Quote Request Sent!',
    successMessage: 'Thank you! Our team will review your property details and get back to you within 24 hours with a custom service plan and pricing.',
    sendAnother: 'Submit another request',
    sidebarTitle: 'Why Green Empire?',
    sidebarItems: [
      'One team for all exterior services',
      'Licensed & fully insured',
      'Same crew every visit',
      'Satisfaction guaranteed',
      'Transparent, upfront pricing',
    ],
    callTitle: 'Prefer to Talk?',
    callDesc: 'Call us directly for immediate assistance or to schedule your free on-site assessment.',
  },
  es: {
    backToHome: 'Volver al inicio',
    heroTitle: 'Obtén Tu Cotización Gratis',
    heroSubtitle: 'Cuéntanos sobre tu propiedad y los servicios que necesitas. Te responderemos dentro de 24 horas con un plan personalizado y precios transparentes.',
    phoneTitle: 'Llámanos',
    phoneDesc: 'Habla con nosotros directamente',
    phoneNumber: '(800) 555-1234',
    emailTitle: 'Escríbenos',
    emailDesc: 'Respuesta en menos de 24 horas',
    emailAddress: 'info@greenempirellc.com',
    locationTitle: 'Área de Servicio',
    locationDesc: 'Sirviendo tu comunidad',
    locationAddress: 'Área Metropolitana',
    hoursTitle: 'Horario',
    hoursDesc: 'Atención al cliente',
    hoursValue: 'Lun-Sáb: 7AM-7PM',
    formTitle: 'Solicita un Estimado Gratis',
    formSubtitle: 'Completa los detalles y crearemos un plan de servicio personalizado para tu propiedad',
    fullName: 'Nombre Completo',
    fullNamePlaceholder: 'Tu nombre completo',
    email: 'Correo',
    emailPlaceholder: 'tu@correo.com',
    phone: 'Teléfono',
    phonePlaceholder: '(555) 123-4567',
    address: 'Dirección de la Propiedad',
    addressPlaceholder: '123 Calle Principal, Ciudad, Estado',
    services: 'Servicios Necesitados',
    serviceOptions: [
      { label: 'Chapea y Mantenimiento de Grama', icon: 'scissors' },
      { label: 'Limpieza de Patio y Hojas', icon: 'leaf' },
      { label: 'Limpieza de Canaletas', icon: 'droplets' },
      { label: 'Lavado a Presión del Driveway', icon: 'sparkles' },
      { label: 'Diseño de Jardines y Siembra', icon: 'flower' },
      { label: 'Mulching y Mantenimiento', icon: 'tree' },
      { label: 'Recorte de Setos y Arbustos', icon: 'scissors' },
      { label: 'Otro', icon: 'file' },
    ],
    lotSize: 'Tamaño del Lote',
    lotPlaceholder: 'Seleccionar tamaño',
    lotOptions: ['Pequeño (menos de 5,000 sq ft)', 'Mediano (5,000-10,000 sq ft)', 'Grande (10,000-20,000 sq ft)', 'Extra Grande (20,000+ sq ft)'],
    frequency: 'Frecuencia de Servicio',
    freqPlaceholder: 'Seleccionar frecuencia',
    freqOptions: ['Servicio único', 'Quincenal', 'Semanal', 'Paquete mensual', 'Paquete estacional', 'Plan anual'],
    message: 'Detalles Adicionales',
    messagePlaceholder: 'Cuéntanos sobre tu propiedad, necesidades específicas o preguntas...',
    submitButton: 'Solicitar Cotización Gratis',
    formDisclaimer: 'Estimados gratis. Sin compromiso. Tu información está protegida.',
    successTitle: '¡Solicitud Enviada!',
    successMessage: '¡Gracias! Nuestro equipo revisará los detalles de tu propiedad y te responderá dentro de 24 horas con un plan personalizado.',
    sendAnother: 'Enviar otra solicitud',
    sidebarTitle: '¿Por Qué Green Empire?',
    sidebarItems: [
      'Un equipo para todos los servicios exteriores',
      'Licenciados y completamente asegurados',
      'Mismo equipo en cada visita',
      'Satisfacción garantizada',
      'Precios transparentes desde el inicio',
    ],
    callTitle: '¿Prefieres hablar?',
    callDesc: 'Llámanos directamente para asistencia inmediata o para programar tu evaluación gratuita.',
  },
};

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  scissors: Scissors,
  leaf: Leaf,
  droplets: Droplets,
  sparkles: Sparkles,
  flower: Flower2,
  tree: TreePine,
  file: FileText,
};

export default function ContactPage() {
  const [lang, setLang] = useState<'es' | 'en'>('en');
  const t = translations[lang];

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    services: [] as string[],
    lotSize: '',
    frequency: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleService = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service],
    }));
  };

  const resetForm = () => {
    setFormData({ fullName: '', email: '', phone: '', address: '', services: [], lotSize: '', frequency: '', message: '' });
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-ge-cream to-white dark:from-ge-dark dark:to-ge-dark-light">
      {/* Header */}
      <header className="bg-white/80 dark:bg-ge-dark/80 backdrop-blur-md border-b border-ge-green/10 dark:border-ge-green-light/10 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/logo_greempir.png" alt="Green Empire" width={140} height={77} className="object-contain h-12 w-auto" />
          </Link>
          <div className="flex items-center gap-4">
            <button onClick={() => setLang(lang === 'es' ? 'en' : 'es')} className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-ge-dark-light rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-ge-dark transition-colors">
              <Globe className="w-4 h-4" />
              <span>{lang === 'es' ? 'EN' : 'ES'}</span>
            </button>
            <a href="tel:+18005551234" className="hidden sm:flex items-center gap-2 px-4 py-2 ge-button-primary rounded-lg font-medium text-sm text-white">
              <Phone className="w-4 h-4" />
              {t.phoneNumber}
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-ge-green mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            {t.backToHome}
          </Link>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-ge-green/10 dark:bg-ge-green-light/20 text-ge-green dark:text-ge-green-light rounded-full text-sm font-medium mb-6">
              <Leaf className="w-4 h-4" />
              {t.heroTitle}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">{t.heroTitle}</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{t.heroSubtitle}</p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <a href="tel:+18005551234" className="glass-crystal rounded-xl p-6 hover:scale-[1.02] transition-all group">
              <div className="w-12 h-12 bg-ge-green/10 dark:bg-ge-green-light/20 rounded-xl flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-ge-green dark:text-ge-green-light" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-1">{t.phoneTitle}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{t.phoneDesc}</p>
              <p className="font-semibold text-ge-green dark:text-ge-green-light">{t.phoneNumber}</p>
            </a>
            <a href="mailto:info@greenempirellc.com" className="glass-crystal rounded-xl p-6 hover:scale-[1.02] transition-all group">
              <div className="w-12 h-12 bg-ge-gold/10 dark:bg-ge-gold/20 rounded-xl flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-ge-gold" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-1">{t.emailTitle}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{t.emailDesc}</p>
              <p className="font-semibold text-ge-gold">{t.emailAddress}</p>
            </a>
            <div className="glass-crystal rounded-xl p-6">
              <div className="w-12 h-12 bg-ge-green/10 dark:bg-ge-green-light/20 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-ge-green dark:text-ge-green-light" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-1">{t.locationTitle}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{t.locationDesc}</p>
              <p className="font-semibold text-gray-700 dark:text-gray-300">{t.locationAddress}</p>
            </div>
            <div className="glass-crystal rounded-xl p-6">
              <div className="w-12 h-12 bg-ge-gold/10 dark:bg-ge-gold/20 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-ge-gold" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-1">{t.hoursTitle}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{t.hoursDesc}</p>
              <p className="font-semibold text-gray-700 dark:text-gray-300">{t.hoursValue}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Quote Form */}
            <div className="lg:col-span-2">
              <div className="glass-panel rounded-2xl p-8">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-20 h-20 bg-ge-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-ge-green dark:text-ge-green-light" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t.successTitle}</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">{t.successMessage}</p>
                    <button onClick={resetForm} className="px-6 py-3 ge-button-primary rounded-lg font-semibold text-white">
                      {t.sendAnother}
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-6">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{t.formTitle}</h2>
                      <p className="text-gray-600 dark:text-gray-400">{t.formSubtitle}</p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Contact Info */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t.fullName} *</label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-ge-dark border border-gray-200 dark:border-ge-green/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-ge-green text-gray-900 dark:text-white" placeholder={t.fullNamePlaceholder} />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t.email} *</label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-ge-dark border border-gray-200 dark:border-ge-green/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-ge-green text-gray-900 dark:text-white" placeholder={t.emailPlaceholder} />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t.phone} *</label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-ge-dark border border-gray-200 dark:border-ge-green/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-ge-green text-gray-900 dark:text-white" placeholder={t.phonePlaceholder} />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t.address} *</label>
                          <div className="relative">
                            <Home className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input type="text" name="address" required value={formData.address} onChange={handleChange} className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-ge-dark border border-gray-200 dark:border-ge-green/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-ge-green text-gray-900 dark:text-white" placeholder={t.addressPlaceholder} />
                          </div>
                        </div>
                      </div>

                      {/* Services Selection */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t.services} *</label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                          {t.serviceOptions.map((service, i) => {
                            const IconComp = iconMap[service.icon] || Leaf;
                            const isSelected = formData.services.includes(service.label);
                            return (
                              <button
                                key={i}
                                type="button"
                                onClick={() => toggleService(service.label)}
                                className={`p-3 rounded-lg border text-left text-xs font-medium transition-all flex items-center gap-2 ${
                                  isSelected
                                    ? 'bg-ge-green/10 dark:bg-ge-green-light/20 border-ge-green dark:border-ge-green-light text-ge-green dark:text-ge-green-light'
                                    : 'bg-gray-50 dark:bg-ge-dark border-gray-200 dark:border-ge-green/10 text-gray-600 dark:text-gray-400 hover:border-ge-green/30'
                                }`}
                              >
                                <IconComp className="w-4 h-4 flex-shrink-0" />
                                <span>{service.label}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Property Details */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t.lotSize}</label>
                          <select name="lotSize" value={formData.lotSize} onChange={handleChange} className="w-full px-4 py-2.5 bg-gray-50 dark:bg-ge-dark border border-gray-200 dark:border-ge-green/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-ge-green text-gray-900 dark:text-white">
                            <option value="">{t.lotPlaceholder}</option>
                            {t.lotOptions.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t.frequency}</label>
                          <select name="frequency" value={formData.frequency} onChange={handleChange} className="w-full px-4 py-2.5 bg-gray-50 dark:bg-ge-dark border border-gray-200 dark:border-ge-green/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-ge-green text-gray-900 dark:text-white">
                            <option value="">{t.freqPlaceholder}</option>
                            {t.freqOptions.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
                          </select>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t.message}</label>
                        <textarea name="message" rows={4} value={formData.message} onChange={handleChange} className="w-full px-4 py-2.5 bg-gray-50 dark:bg-ge-dark border border-gray-200 dark:border-ge-green/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-ge-green text-gray-900 dark:text-white resize-none" placeholder={t.messagePlaceholder} />
                      </div>

                      <button type="submit" className="w-full py-3 ge-button-primary rounded-lg font-semibold text-white flex items-center justify-center gap-2">
                        <Send className="w-5 h-5" />
                        {t.submitButton}
                      </button>
                      <p className="text-xs text-center text-gray-500 dark:text-gray-400">{t.formDisclaimer}</p>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Why Us */}
              <div className="glass-crystal rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-ge-green dark:text-ge-green-light" />
                  {t.sidebarTitle}
                </h3>
                <ul className="space-y-3">
                  {t.sidebarItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-ge-green dark:text-ge-green-light mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Call Card */}
              <div className="bg-gradient-to-br from-ge-green to-ge-green-light rounded-2xl p-6 text-white">
                <Calendar className="w-10 h-10 text-ge-gold mb-4" />
                <h3 className="font-bold text-lg mb-2">{t.callTitle}</h3>
                <p className="text-sm text-white/80 mb-4">{t.callDesc}</p>
                <a href="tel:+18005551234" className="block w-full py-3 ge-button-gold rounded-lg font-semibold text-center">
                  {t.phoneNumber}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ge-dark text-white py-8 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Green Empire Lawn & Landscape LLC. {lang === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
          </p>
        </div>
      </footer>
    </div>
  );
}
