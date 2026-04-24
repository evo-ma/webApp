import ProductPage from '@/components/ui/ProductPage'
import {
  Headphones, PhoneForwarded, LayoutDashboard, Mic,
  Monitor, Users, FileText, BarChart3,
  Bot, MessageSquare, UserCheck, Sparkles,
  PhoneCall, GitBranch, Eye, Shield, Archive,
  SlidersHorizontal, RefreshCw, Inbox, PieChart,
  Brain, Languages, TrendingUp, Clock,
  BookOpen, Zap, Search, Bell, Star, Globe,
  Activity, Lock, Download, ListFilter as Filter,
} from 'lucide-react'
import {
  ContactCentreCard,
  AutoAttendantCard,
  CallRecordingCard,
  CallAnalyticsCard,
  AIVoiceAgentCard,
  AIDigitalAgentCard,
  AIVirtualReceptionistCard,
  AICallAnalyticsCard,
} from '@/components/ui/HeroCards'

// ─────────────────────────────────────────────
// SOLUTIONS
// ─────────────────────────────────────────────

export function ContactCentrePage() {
  return (
    <ProductPage
      nameKey="solutions.contact_centre.name"
      descKey="solutions.contact_centre.desc"
      shortKey="solutions.contact_centre.short"
      icon={Headphones}
      backTo="/produits"
      backLabel="Produits"
      accentColor="orange"
      heroCard={<ContactCentreCard />}
      features={[
        { icon: PhoneCall,    title: 'ACD Intelligent',             desc: 'Distribution automatique des appels selon les compétences, la disponibilité et la priorité client.' },
        { icon: Globe,        title: 'Omnicanal',                   desc: 'Voix, chat, email, WhatsApp — tous gérés depuis une interface Teams unifiée.' },
        { icon: Eye,          title: 'Supervision en temps réel',   desc: 'Tableau de bord live : files d\'attente, agents, SLA et alertes instantanées.' },
        { icon: Brain,        title: 'IA intégrée',                 desc: 'Transcription, analyse de sentiment et suggestion de réponse en temps réel pour chaque agent.' },
        { icon: PieChart,     title: 'Reporting avancé',            desc: 'Plus de 80 KPIs préconfigurés. Export Excel/PDF. Rapports planifiés par email.' },
        { icon: SlidersHorizontal, title: 'Configuration sans code', desc: 'Créez et modifiez vos files d\'attente, IVR et règles de routage depuis une interface graphique.' },
      ]}
      useCases={[
        'Services clients et support technique multi-niveaux',
        'Centres de recouvrement et relance téléphonique',
        'Banques, assurances et services financiers',
        'Opérateurs télécoms et fournisseurs de services',
        'Administrations publiques et collectivités',
        'E-commerce avec support client intégré',
      ]}
    />
  )
}

export function AutoAttendantPage() {
  return (
    <ProductPage
      nameKey="solutions.auto_attendant.name"
      descKey="solutions.auto_attendant.desc"
      shortKey="solutions.auto_attendant.short"
      icon={PhoneForwarded}
      backTo="/produits"
      backLabel="Produits"
      accentColor="orange"
      heroCard={<AutoAttendantCard />}
      features={[
        { icon: GitBranch,    title: 'Menus vocaux multi-niveaux',  desc: 'Créez des arborescences IVR complexes avec glisser-déposer. Jusqu\'à 10 niveaux de profondeur.' },
        { icon: Clock,        title: 'Règles horaires',             desc: 'Routage différent selon l\'heure, le jour, les jours fériés et les périodes de vacances.' },
        { icon: Languages,    title: 'Multi-langues',               desc: 'Messages d\'accueil en Arabe, Français, Darija et Anglais. Détection automatique de la langue.' },
        { icon: RefreshCw,    title: 'Intégration CRM',             desc: 'Identification client automatique via numéro appelant. CTI pop-up sur chaque appel entrant.' },
        { icon: Bell,         title: 'Débordement intelligent',     desc: 'Règles de débordement vers messagerie, mobile ou autre équipe si délai d\'attente dépassé.' },
        { icon: Activity,     title: 'Statistiques IVR',            desc: 'Analysez les chemins les plus empruntés et optimisez votre arborescence en continu.' },
      ]}
      useCases={[
        'PME souhaitant professionnaliser leur accueil téléphonique',
        'Multi-sites avec routage vers le bureau régional approprié',
        'Services avec horaires étendus et permanence de nuit',
        'Entreprises multilingues avec clientèle internationale',
      ]}
    />
  )
}

// Placeholder for Attendant Console — pattern is identical
export function AttendantConsolePage() {
  return (
    <ProductPage
      nameKey="solutions.attendant_console.name"
      descKey="solutions.attendant_console.desc"
      shortKey="solutions.attendant_console.short"
      icon={LayoutDashboard}
      backTo="/produits"
      backLabel="Produits"
      accentColor="orange"
      features={[
        { icon: Eye,          title: 'Vue panoramique',             desc: 'Visualisez en temps réel tous les appels en cours, en attente et l\'état de chaque agent.' },
        { icon: PhoneCall,    title: 'Transfert en un clic',        desc: 'Transférez, mettez en attente ou conférez n\'importe quel appel depuis la console.' },
        { icon: Users,        title: 'Présence unifiée',            desc: 'Intégration complète avec la présence Microsoft Teams de chaque collaborateur.' },
        { icon: Filter,       title: 'File d\'attente visuelle',   desc: 'Gérez visuellement vos files avec priorités, temps d\'attente et code couleur.' },
        { icon: Bell,         title: 'Alertes SLA',                 desc: 'Notifications sonores et visuelles dès qu\'un appel dépasse le seuil d\'attente configuré.' },
        { icon: Download,     title: 'Journal d\'appels',           desc: 'Historique complet consultable et exportable de toutes les opérations réalisées.' },
      ]}
      useCases={[
        'Standardistes et opérateurs de grand volume',
        'Hôtels et hôpitaux avec standard central',
        'Sièges sociaux avec direction d\'appels complexe',
        'Centres de contacts supervisés',
      ]}
    />
  )
}

export function CallRecordingPage() {
  return (
    <ProductPage
      nameKey="solutions.call_recording.name"
      descKey="solutions.call_recording.desc"
      shortKey="solutions.call_recording.short"
      icon={Mic}
      backTo="/produits"
      backLabel="Produits"
      accentColor="orange"
      heroCard={<CallRecordingCard />}
      features={[
        { icon: Archive,      title: 'Archivage automatique',       desc: 'Tous les appels enregistrés et indexés automatiquement. Rétention configurable de 1 à 10 ans.' },
        { icon: Search,       title: 'Recherche avancée',           desc: 'Retrouvez n\'importe quel appel par date, agent, numéro, durée ou mots-clés transcrits.' },
        { icon: Lock,         title: 'Conformité légale',           desc: 'Chiffrement AES-256 au repos et en transit. Accès tracé avec audit log complet.' },
        { icon: Brain,        title: 'Transcription IA',            desc: 'Transcription automatique en Arabe et Français avec horodatage précis à la seconde.' },
        { icon: Star,         title: 'Évaluation qualité',          desc: 'Grilles de scoring intégrées. Calibration et coaching basés sur les enregistrements réels.' },
        { icon: Download,     title: 'Export & partage',            desc: 'Téléchargez ou partagez les enregistrements en MP3/WAV avec lien sécurisé à durée limitée.' },
      ]}
      useCases={[
        'Services financiers soumis à obligation d\'enregistrement',
        'Centres de contact nécessitant contrôle qualité',
        'Équipes commerciales pour coaching et formation',
        'Services juridiques et conformité réglementaire',
      ]}
    />
  )
}

export function ScreenRecordingPage() {
  return (
    <ProductPage
      nameKey="solutions.screen_recording.name"
      descKey="solutions.screen_recording.desc"
      shortKey="solutions.screen_recording.short"
      icon={Monitor}
      backTo="/produits"
      backLabel="Produits"
      accentColor="orange"
      features={[
        { icon: Eye,          title: 'Capture synchronisée',        desc: 'Enregistrement écran et audio simultanément. Lecture synchronisée pour revue complète.' },
        { icon: Archive,      title: 'Stockage sécurisé',           desc: 'Vidéos chiffrées et stockées sur Azure. Accès contrôlé par rôle et département.' },
        { icon: Search,       title: 'Recherche par métadonnées',   desc: 'Retrouvez les sessions par agent, date, application utilisée ou durée.' },
        { icon: BookOpen,     title: 'Bibliothèque de formation',   desc: 'Constituez une bibliothèque de meilleures pratiques à partir des sessions réelles.' },
        { icon: Shield,       title: 'Floutage automatique',        desc: 'Détection et masquage automatique des données sensibles (CB, mot de passe, IBAN).' },
        { icon: TrendingUp,   title: 'Analyse productivité',        desc: 'Temps passé par application, productivité agent et rapport d\'utilisation des outils.' },
      ]}
      useCases={[
        'Audit et conformité dans les secteurs réglementés',
        'Formation et onboarding de nouveaux agents',
        'Résolution de litiges avec preuve d\'écran',
        'Optimisation des processus et outils agents',
      ]}
    />
  )
}

export function ContactManagerPage() {
  return (
    <ProductPage
      nameKey="solutions.contact_manager.name"
      descKey="solutions.contact_manager.desc"
      shortKey="solutions.contact_manager.short"
      icon={Users}
      backTo="/produits"
      backLabel="Produits"
      accentColor="orange"
      features={[
        { icon: RefreshCw,    title: 'Sync Active Directory',       desc: 'Synchronisation bidirectionnelle en temps réel avec votre annuaire Microsoft 365.' },
        { icon: PhoneCall,    title: 'Fiche CTI automatique',       desc: 'Pop-up client dès la première sonnerie avec historique d\'appels et informations CRM.' },
        { icon: BookOpen,     title: 'Annuaire unifié',             desc: 'Un seul annuaire partagé pour tous vos collaborateurs, clients et partenaires.' },
        { icon: Star,         title: 'Contacts favoris',            desc: 'Épinglez les contacts les plus utilisés pour un accès rapide depuis n\'importe quelle interface.' },
        { icon: Globe,        title: 'Import/Export',               desc: 'Importez depuis Excel, vCard, Salesforce, HubSpot ou votre ERP via connecteurs natifs.' },
        { icon: Search,       title: 'Recherche intelligente',      desc: 'Recherche full-text sur nom, prénom, entreprise, numéro, email et champs personnalisés.' },
      ]}
      useCases={[
        'Entreprises avec annuaire d\'entreprise Microsoft 365',
        'Commerciaux nécessitant un CRM téléphonique léger',
        'Services clients avec identification automatique',
        'Multi-sites avec annuaire centralisé unique',
      ]}
    />
  )
}

export function DigitalFaxPage() {
  return (
    <ProductPage
      nameKey="solutions.digital_fax.name"
      descKey="solutions.digital_fax.desc"
      shortKey="solutions.digital_fax.short"
      icon={FileText}
      backTo="/produits"
      backLabel="Produits"
      accentColor="orange"
      features={[
        { icon: Inbox,        title: 'Réception dans Teams',        desc: 'Vos fax entrants arrivent directement dans votre canal Teams ou votre messagerie Outlook.' },
        { icon: Download,     title: 'Envoi depuis Teams',          desc: 'Envoyez n\'importe quel document PDF ou Office en fax depuis Teams sans matériel.' },
        { icon: Archive,      title: 'Archivage automatique',       desc: 'Tous les fax archivés avec indexation, numéro d\'envoyeur et horodatage certifié.' },
        { icon: Shield,       title: 'Fax sécurisé',                desc: 'Chiffrement TLS sur tous les fax. Accusé de réception et preuve d\'envoi téléchargeable.' },
        { icon: RefreshCw,    title: 'Portabilité des numéros',     desc: 'Conservez vos numéros de fax existants. Pas d\'interruption de service lors de la migration.' },
        { icon: BookOpen,     title: 'Journal complet',             desc: 'Historique de tous les envois et réceptions avec statut de livraison en temps réel.' },
      ]}
      useCases={[
        'Cabinets médicaux et cliniques (ordonnances, résultats)',
        'Études notariales et cabinets d\'avocats',
        'Services bancaires et assurances',
        'Toute entreprise soumise à l\'obligation légale du fax',
      ]}
    />
  )
}

export function CallAnalyticsPage() {
  return (
    <ProductPage
      nameKey="solutions.call_analytics.name"
      descKey="solutions.call_analytics.desc"
      shortKey="solutions.call_analytics.short"
      icon={BarChart3}
      backTo="/produits"
      backLabel="Produits"
      accentColor="orange"
      heroCard={<CallAnalyticsCard />}
      features={[
        { icon: PieChart,     title: 'Dashboards temps réel',       desc: 'Plus de 80 KPIs téléphoniques mis à jour toutes les 30 secondes. Personnalisables par rôle.' },
        { icon: TrendingUp,   title: 'Analyse des tendances',       desc: 'Identifiez les pics d\'appels, les motifs récurrents et anticipez vos besoins en effectifs.' },
        { icon: Users,        title: 'Performance agents',          desc: 'Temps de traitement, taux de décrochage, qualité CSAT et classement individuel.' },
        { icon: Download,     title: 'Rapports planifiés',          desc: 'Envoi automatique par email de rapports quotidiens, hebdomadaires ou mensuels en PDF/Excel.' },
        { icon: Filter,       title: 'Filtres multi-dimensions',    desc: 'Filtrez par site, équipe, agent, file d\'attente, plage horaire et type d\'appel.' },
        { icon: Bell,         title: 'Alertes intelligentes',       desc: 'Notifications email et Teams si un KPI dépasse le seuil configuré (abandon, attente...).' },
      ]}
      useCases={[
        'Responsables de centres de contact pour pilotage quotidien',
        'Directeurs commerciaux avec équipes terrain',
        'RH pour évaluation et suivi de la performance',
        'DSI pour reporting sur l\'infrastructure téléphonique',
      ]}
    />
  )
}

// ─────────────────────────────────────────────
// AI PRODUCTS
// ─────────────────────────────────────────────

export function AIVoiceAgentPage() {
  return (
    <ProductPage
      nameKey="ai.voice_agent.name"
      descKey="ai.voice_agent.desc"
      shortKey="ai.voice_agent.short"
      icon={Bot}
      backTo="/produits"
      backLabel="Produits"
      accentColor="violet"
      heroCard={<AIVoiceAgentCard />}
      features={[
        { icon: Languages,    title: '4 langues nativement',        desc: 'Arabe, Français, Darija marocain et Anglais. Détection et basculement automatique de langue en cours d\'appel.' },
        { icon: Brain,        title: 'NLU avancé',                  desc: 'Compréhension du langage naturel entraînée sur des milliers de conversations du secteur.' },
        { icon: RefreshCw,    title: 'Intégration CRM',             desc: 'Crée des tickets, met à jour des dossiers et interroge votre base de données en temps réel.' },
        { icon: PhoneForwarded,title: 'Transfert intelligent',      desc: 'Bascule vers un agent humain avec contexte complet si la demande dépasse ses capacités.' },
        { icon: Activity,     title: 'Disponible 24/7',             desc: 'Traitez vos appels de nuit et week-end sans coût humain supplémentaire.' },
        { icon: TrendingUp,   title: 'Amélioration continue',       desc: 'Le modèle apprend de chaque appel et améliore son taux de résolution mois après mois.' },
      ]}
      useCases={[
        'Traitement des demandes répétitives (soldes, suivis, statuts)',
        'Qualification et prise de rendez-vous automatisées',
        'Support de premier niveau avant escalade humaine',
        'Permanence téléphonique nocturne et week-ends',
        'Enquêtes de satisfaction post-interaction',
      ]}
    />
  )
}

export function AIDigitalAgentPage() {
  return (
    <ProductPage
      nameKey="ai.digital_agent.name"
      descKey="ai.digital_agent.desc"
      shortKey="ai.digital_agent.short"
      icon={MessageSquare}
      backTo="/produits"
      backLabel="Produits"
      accentColor="sky"
      heroCard={<AIDigitalAgentCard />}
      features={[
        { icon: Globe,        title: 'Omnicanal digital',           desc: 'WhatsApp Business, chat web, email et Microsoft Teams — un seul agent pour tous vos canaux.' },
        { icon: Brain,        title: 'Mémoire conversationnelle',   desc: 'L\'agent retient le contexte de la conversation et ne redemande pas les mêmes informations.' },
        { icon: RefreshCw,    title: 'Base de connaissance live',   desc: 'Connecté à votre FAQ, documentation et CRM. Réponses toujours à jour automatiquement.' },
        { icon: Languages,    title: 'Multi-langues',               desc: 'Détecte et répond dans la langue du client. Arabe, Français, Darija, Anglais, Espagnol.' },
        { icon: PhoneForwarded,title: 'Escalade vers agent',       desc: 'Transfère vers un agent humain avec transcription complète de la conversation.' },
        { icon: PieChart,     title: 'Analytics conversationnels',  desc: 'Sujets les plus fréquents, taux de résolution, moments de frustration et opportunités.' },
      ]}
      useCases={[
        'E-commerce : suivi de commandes et retours automatisés',
        'Banques : consultation de solde et informations produits',
        'Assurances : déclarations sinistres et suivi dossiers',
        'Télécoms : activation, résiliation et gestion abonnements',
      ]}
    />
  )
}

export function AIVirtualReceptionistPage() {
  return (
    <ProductPage
      nameKey="ai.virtual_receptionist.name"
      descKey="ai.virtual_receptionist.desc"
      shortKey="ai.virtual_receptionist.short"
      icon={UserCheck}
      backTo="/produits"
      backLabel="Produits"
      accentColor="emerald"
      heroCard={<AIVirtualReceptionistCard />}
      features={[
        { icon: PhoneCall,    title: 'Accueil personnalisé',        desc: 'Salutation avec le nom du client, mémorisation des préférences et ton professionnel constant.' },
        { icon: GitBranch,    title: 'Qualification intelligente',  desc: 'Identifie le motif d\'appel et route vers la bonne équipe avant même d\'annoncer le transfert.' },
        { icon: BookOpen,     title: 'Gestion de l\'agenda',        desc: 'Intégration Microsoft Calendar pour prise et confirmation de rendez-vous en autonomie.' },
        { icon: Bell,         title: 'Notifications proactives',    desc: 'Rappelle les rendez-vous, informe des délais et gère les listes d\'attente automatiquement.' },
        { icon: Languages,    title: 'Accueil multi-langues',       desc: 'S\'adapte automatiquement à la langue détectée pour un accueil toujours professionnel.' },
        { icon: Activity,     title: 'Disponibilité totale',        desc: '100% disponible 24h/24, 7j/7, sans congés ni pauses. Le sourire constant, garanti.' },
      ]}
      useCases={[
        'Cabinets médicaux et cliniques privées',
        'Cabinets d\'avocats et d\'expertise comptable',
        'Agences immobilières et promoteurs',
        'Hôtels et établissements d\'hébergement',
        'PME sans standardiste dédié',
      ]}
    />
  )
}

export function AIAnalyticsPage() {
  return (
    <ProductPage
      nameKey="ai.ai_analytics.name"
      descKey="ai.ai_analytics.desc"
      shortKey="ai.ai_analytics.short"
      icon={Sparkles}
      backTo="/produits"
      backLabel="Produits"
      accentColor="violet"
      heroCard={<AICallAnalyticsCard />}
      features={[
        { icon: Brain,        title: 'Analyse de sentiment',        desc: 'Détecte en temps réel si le client est satisfait, neutre ou frustré. Alerte le superviseur si nécessaire.' },
        { icon: BookOpen,     title: 'Résumés automatiques',        desc: 'Résumé de chaque appel généré en 3 secondes après raccrochage. Plus de prise de notes manuelles.' },
        { icon: Search,       title: 'Recherche sémantique',        desc: 'Retrouvez toutes les conversations mentionnant un sujet, produit ou problème spécifique.' },
        { icon: TrendingUp,   title: 'Détection de tendances',      desc: 'Identifiez les sujets émergents avant qu\'ils ne deviennent des crises. Alertes hebdomadaires.' },
        { icon: Star,         title: 'Score qualité automatique',   desc: 'Chaque appel scoré selon vos critères qualité sans écoute humaine. Auditez 100% des appels.' },
        { icon: PieChart,     title: 'Rapports IA exécutifs',       desc: 'Synthèses hebdomadaires pour le management avec insights actionnables et recommandations.' },
      ]}
      useCases={[
        'Amélioration continue de la qualité de service',
        'Conformité : vérification du respect des scripts',
        'Formation : identification des axes d\'amélioration individuels',
        'Stratégie produit : signaux faibles remontés des clients',
        'Gestion de crise : détection précoce des incidents',
      ]}
    />
  )
}
