import React from 'react';
import Image from "next/image";

interface CardProps {
  subtitle?: string;
  title?: string;
  content?: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ subtitle, title, content, className = "" }) => (
  <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
    {subtitle && <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">{subtitle}</p>}
    {title && <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>}
    {content && <p className="text-gray-700">{content}</p>}
  </div>
);

interface OutcomeCardProps {
  icon: string;
  title: string;
  description: string;
  bgColor?: string;
}

const OutcomeCard: React.FC<OutcomeCardProps> = ({ icon, title, description, bgColor = "bg-blue-50" }) => (
  <div className={`${bgColor} rounded-lg p-6`}>
    <div className="text-2xl mb-3">{icon}</div>
    <h4 className="font-semibold text-gray-900 mb-2">{title}</h4>
    <p className="text-sm text-gray-700">{description}</p>
  </div>
);

interface PainPointCardProps {
  icon: string;
  title: string;
  quote: string;
}

const PainPointCard: React.FC<PainPointCardProps> = ({ icon, title, quote }) => (
  <div className="bg-white rounded-lg p-6 shadow-sm border">
    <div className="flex items-center mb-4">
      <span className="text-2xl mr-3">{icon}</span>
      <h4 className="font-bold text-gray-900">{title}</h4>
    </div>
    <blockquote className="text-gray-700 italic">&quot;{quote}&quot;</blockquote>
  </div>
);

interface FeatureCardProps {
  title: string;
  description: string;
  quote: string;
  bgColor?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, quote, bgColor = "bg-blue-50" }) => (
  <div className="bg-white rounded-lg p-6 shadow-sm border mb-6">
    <h4 className="font-bold text-gray-900 mb-3">{title}</h4>
    <p className="text-gray-700 mb-4">{description}</p>
    <div className={`${bgColor} rounded-lg p-4`}>
      <blockquote className="text-gray-700 italic">&quot;{quote}&quot;</blockquote>
    </div>
  </div>
);

export default function CaseConnectCaseStudy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with gradient background */}
      <div className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-light mb-6 leading-tight">
            Streamlining legal workflows
          </h1>
          <h2 className="text-5xl font-light mb-4">
            for <span className="text-blue-400 font-bold">attorneys</span>
          </h2>
        </div>
        
        {/* Project details cards - horizontal */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="flex flex-wrap justify-center gap-4">
            <Card subtitle="ROLE" title="Product Designer" className="flex-1 min-w-[200px]" />
            <Card subtitle="CLIENT" title="Capitos" className="flex-1 min-w-[200px]" />
            <Card subtitle="YEAR" title="2022–2023" className="flex-1 min-w-[200px]" />
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        
        {/* Project Overview */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Project Overview</h2>
        </div>
        <div className="prose prose-lg max-w-none mb-16">
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>CaseConnect</strong> is an eDiscovery and case management platform developed for legal professionals to simplify the complexities of handling case files, evidence, and timelines. Designed for the legal-tech firm <strong>Capitos</strong>, the platform enables attorneys to electronically ingest, organize, redact, and access legal documents and multimedia evidence — all within a secure, centralized system.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Attorneys and legal staff often face bottlenecks in managing high volumes of case material across multiple formats. CaseConnect was created to meet this challenge head-on by providing a seamless, all-in-one solution that improves collaboration, reduces errors, and increases accessibility — whether working from court, home, or office.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            To solve these challenges, I led the design of CaseConnect&#39;s core workflows and interface architecture. Rather than creating another generic document management tool, we built a platform specifically tailored to legal professionals&#39; unique needs, emphasizing security, precision, and ease of use for users with varying levels of technical expertise.
          </p><br></br>
          <div className="relative mb-24"><Image
          className="drop-shadow-2xl rounded-t-lg"
          src="/img/works/caseconnect/user.png"
          alt="User"
          width={1740}
          height={1020}
        /></div>
        </div>
        

        {/* Problem & Context */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Problem & Context</h2>
        </div>
        
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed mb-8">
            Despite growing investments in legal technology, law firms continue to struggle with slow, error-prone processes and fragmented systems. Through user research and interviews with attorneys, paralegals, and admin staff, we identified four core pain points:
          </p>
        </div>

        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <PainPointCard 
            icon="📂" 
            title="Time-consuming document workflows"
            quote="I waste too much time just organizing evidence for court — it's all over the place."
          />
          <PainPointCard 
            icon="📉" 
            title="Risk of human error"
            quote="When multiple people edit documents, things get lost or overwritten."
          />
          <PainPointCard 
            icon="📵" 
            title="Limited remote access"
            quote="I need to review files while traveling or between hearings, but I can't get to them unless I'm in the office."
          />
          <PainPointCard 
            icon="🧩" 
            title="Unintuitive interfaces"
            quote="Most legal tools feel like they were designed by engineers, not for lawyers. It's too complicated."
          />
        </div><div className="relative mb-24"><Image
          className="drop-shadow-2xl rounded-t-lg"
          src="/img/works/caseconnect/admin.png"
          alt="Admin"
          width={1740}
          height={1020}
        /></div>
        
        <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-16">
          <p className="text-gray-700 leading-relaxed">
            These frustrations highlighted the need for a flexible, easy-to-use tool that aligns with the realities of modern legal practice — especially for users who aren&#39;t tech-savvy.
          </p>
        </div>

        {/* My Role & Team */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">My Role & Team</h2>
        </div>
        
        <div className="prose prose-lg max-w-none mb-16">
          <p className="text-gray-700 leading-relaxed mb-6">
            As the <strong>Product Designer</strong> on the CaseConnect project (2022–2023), I worked directly with a cross-functional team of developers, legal SMEs, and the founding team at Capitos. My contributions included:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <ul className="space-y-3 text-gray-700">
                <li>• Leading <strong>user research and pain point synthesis</strong></li>
                <li>• Designing the <strong>information architecture</strong> and <strong>navigation model</strong></li>
                <li>• Creating interactive prototypes in <strong>Figma</strong></li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <ul className="space-y-3 text-gray-700">
                <li>• Iterating on designs based on feedback from attorneys and paralegals</li>
                <li>• Supporting <strong>developer handoff</strong> with specs, redlines, and edge case flows</li>
                <li>• Facilitating working sessions with legal experts</li>
              </ul>
            </div>
          </div>
          
          <p className="text-gray-700 leading-relaxed">
            We operated in a <strong>lean, fast-paced environment</strong>, often balancing legal compliance requirements with UX goals. I also facilitated working sessions with legal experts to ensure our terminology and flows aligned with real-world legal practices.
          </p>
        </div>

        {/* Design Goals & Feature Strategy */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Design Goals & Feature Strategy</h2>
        </div>

        
        
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed mb-8">
            Based on user insights and legal workflow analysis, we established a clear set of design goals that directly addressed the pain points uncovered during research:
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h4 className="font-bold text-gray-900 mb-3">Core Workflow Goals</h4>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>• <strong>Reduce document handling friction</strong> → Seamless ingestion of multiple file types</li>
              <li>• <strong>Prevent accidental edits</strong> → Read-only viewing mode with visual cues</li>
              <li>• <strong>Enable efficient redaction workflows</strong> → Intuitive redaction tools with error prevention</li>
              <li>• <strong>Improve search and organization</strong> → Smart tagging and plain-language search</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h4 className="font-bold text-gray-900 mb-3">Access & Navigation Goals</h4>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>• <strong>Ensure secure and flexible access</strong> → Cloud syncing with mobile-optimized views</li>
              <li>• <strong>Simplify navigation across tasks</strong> → Modular system tailored to legal task types</li>
              <li>• <strong>Integrate scheduling and coordination</strong> → Calendar events linked to case files</li>
            </ul>
          </div>
        </div>

        <div className="relative flex-1">
          <Image
            className="drop-shadow-2xl rounded-t-lg w-full h-auto"
            src="/img/works/caseconnect/feature3.png"
            alt="Feature 1"
            width={870}
            height={510}
          />
        </div>
        
        <div className="bg-blue-50 rounded-lg p-6 mb-16">
          <p className="text-gray-700 leading-relaxed">
            These features were prioritized based on a balance of <strong>user urgency, legal workflow frequency,</strong> and <strong>development feasibility.</strong> Each feature was wireframed, tested in Figma, and iterated on in response to feedback from pilot users at partner law firms.
          </p>
        </div>

        {/* Design Solutions */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Design Solutions</h2>
        </div>

        
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed mb-8">
            With the goals established, we translated them into focused, user-centered design decisions:
          </p>
        </div>

        {/* Individual Feature Solutions */}
        <FeatureCard 
          title="Modular Navigation System"
          description="We created a sidebar navigation with clear grouping for Case Files, Evidence Review, Calendars, and Contacts. Tooltips and icons supported fast recognition, while keyboard navigation was enabled for power users."
          quote="I can finally find what I need without clicking through six menus."
          bgColor="bg-blue-50"
        />

        <FeatureCard 
          title="Document Ingestion & Read-Only Mode"
          description="We introduced a drag-and-drop uploader and file previewer with support for common legal file types. Files default to read-only mode, clearly labeled, with editing features available only to authorized users."
          quote="The read-only view has saved us from so many accidental overwrites."
          bgColor="bg-green-50"
        />

        <FeatureCard 
          title="Redaction Tools"
          description="The redaction feature used a high-contrast overlay mask and confirmation prompts to prevent mistakes. Users could click to apply redaction to text or image areas, with a preview to verify changes."
          quote="It's so easy to mask personal info now. Before, it took three steps just to black something out."
          bgColor="bg-purple-50"
        />

        <FeatureCard 
          title="Smart Search & Tagging"
          description="We implemented a predictive search bar that accepts natural language queries (e.g., 'email from Smith last March') and added support for custom tags and labels, visible in the file list view."
          quote="Search actually works like you'd expect — I don't need a manual."
          bgColor="bg-orange-50"
        />

        <FeatureCard 
          title="Calendar Integration"
          description="A visual calendar component showed upcoming court dates and linked directly to relevant case files and contacts. We used color coding for case types and alert badges for time-sensitive events."
          quote="Having case docs tied to the calendar saves so much back-and-forth."
          bgColor="bg-teal-50"
        /> <div className="flex gap-6 mb-24">
        <div className="relative flex-1">
          <Image
            className="drop-shadow-2xl rounded-t-lg w-full h-auto"
            src="/img/works/caseconnect/feature1.png"
            alt="Feature 1"
            width={870}
            height={510}
          />
        </div>
        <div className="relative flex-1">
          <Image
            className="drop-shadow-2xl rounded-t-lg w-full h-auto"
            src="/img/works/caseconnect/feature2.png"
            alt="Feature 2"
            width={870}
            height={510}
          />
        </div>
      </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-16">
          <p className="text-gray-700 leading-relaxed">
            These solutions were refined through multiple testing rounds, with legal practitioners interacting directly with clickable prototypes in Figma. Feedback loops allowed us to continuously improve usability while respecting legal accuracy and security protocols.
          </p>
        </div>

        {/* Outcomes & Reflection */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Outcomes & Reflection</h2>
        </div>
        
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed mb-8">
            While the CaseConnect design system and platform experience were well received during testing, the project was discontinued before full rollout due to Capitos shutting down operations. Despite this, the work delivered several key learning outcomes and long-term value to my growth as a designer:
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <OutcomeCard 
            icon="✅" 
            title="Research Leadership" 
            description="Strengthened my ability to lead user research in a highly regulated industry"
            bgColor="bg-blue-50"
          />
          <OutcomeCard 
            icon="🧠" 
            title="Legal Tech Expertise" 
            description="Gained experience designing for legal tech users with varied levels of tech proficiency"
            bgColor="bg-green-50"
          />
          <OutcomeCard 
            icon="🔄" 
            title="Stakeholder Balance" 
            description="Improved my ability to balance stakeholder requirements with user needs in fast-paced sprints"
            bgColor="bg-purple-50"
          />
          <OutcomeCard 
            icon="📁" 
            title="Scalable Systems" 
            description="Built a scalable file handling system that can serve as a reusable model in future document-heavy projects"
            bgColor="bg-orange-50"
          />
        </div>

        {/* Reflection & What's Next */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Reflection & What&#39;s Next</h2>
        </div>
           
        
        <div className="prose prose-lg max-w-none mb-16">
          <p className="text-gray-700 leading-relaxed mb-6">
            This project deepened my understanding of designing for complex workflows and compliance-sensitive use cases. If given another opportunity, I would further refine our onboarding flow by embedding progressive guidance and contextual support to reduce ramp-up time.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            The CaseConnect project, while short-lived, became a foundational case in how I design for scale, accuracy, and real-world user diversity — lessons I continue to apply in current and future work.
          </p>
          
        </div>
        

        <div className="mb-16">
        <div
          className="p-2 shadow-2xl bg-white rounded-lg"
          style={{
            borderRadius: "16px"
          }}>
          <Image
            src={"/img/works/caseconnect/screens.png"}
            alt="screens"
            width={1500}
            height={600}
            style={{
              objectFit: "cover",
              width: "100%",
              height: "auto",
              maxHeight: "600px",
            }}
          />
        </div>
      </div>

        {/* Next Project CTA */}
        <div className="text-right">
          <a
            href="/works/vr"
            className="inline-flex items-center bg-gray-900 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-gray-800 transition-colors duration-200"
          >
            Check VR of Elderly Case Study Next
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}




