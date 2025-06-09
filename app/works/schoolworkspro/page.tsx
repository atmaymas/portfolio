import React from 'react';
import { mulish } from "@/app/ui/font";
import Image from "next/image";
import Link from "next/link";


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
  number: string;
  title: string;
  description: string;
  bgColor?: string;
}

const OutcomeCard: React.FC<OutcomeCardProps> = ({ number, title, description, bgColor = "bg-blue-50" }) => (
  <div className={`${bgColor} rounded-lg p-6 text-center`}>
    <div className="text-3xl font-bold text-gray-800 mb-2">{number}</div>
    <h4 className="font-semibold text-gray-900 mb-2">{title}</h4>
    <p className="text-sm text-gray-700">{description}</p>
  </div>
);

interface ImagePlaceholderProps {
  title: string;
  className?: string;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ title, className = "" }) => (
  <div className={`bg-gray-200 rounded-lg flex items-center justify-center ${className}`}>
    <div className="text-center p-8">
      <div className="text-gray-400 mb-2">
        <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
        </svg>
      </div>
      <p className="text-gray-500 font-medium">{title}</p>
    </div>
  </div>
);

export default function SchoolworksProCaseStudy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with gradient background */}
      <div className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-light mb-6 leading-tight">
            Establishing scalable UI foundations
          </h1>
          <h2 className="text-5xl font-light mb-4">
            for an evolving <span className="text-blue-400 font-bold">EdTech</span> Platform
          </h2>
        </div>
        
        {/* Project details cards - horizontal */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="flex flex-wrap justify-center gap-4">
            <Card subtitle="ROLE" title="Product Designer" className="flex-1 min-w-[200px]" />
            <Card subtitle="CLIENT" title="SchoolworksPro" className="flex-1 min-w-[200px]" />
            <Card subtitle="YEAR" title="2024" className="flex-1 min-w-[200px]" />
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
            <strong>SchoolworksPro</strong> is an education management platform used by school administrators, teachers, and finance teams to manage academic operations, scheduling, and compliance reporting. The <strong>Admin Dashboard</strong> is the control center for school and college staff—enabling them to assign roles, monitor activity, and generate reports across institutions.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Over time, rapid product growth led to a fragmented UI. Admin users voiced frustration about unclear navigation, inconsistent components, and poor readability—especially when working with complex tables or managing user data. In user feedback, we consistently heard:
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
            <blockquote className="text-gray-700 italic">
            &quot;I can&#39;t tell which elements are clickable anymore — everything looks the same.&quot;<br/>
            &quot;I waste time scrolling through menus to find what I need.&quot;
            </blockquote>
          </div>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Frequent updates and feature releases made the interface harder to maintain and scale, leading to internal inefficiencies and inconsistent design decisions. These pain points highlighted the need for a foundational reset.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            To solve this, I led the creation of a <strong>custom design system</strong> tailored to SchoolworksPro&#39;s needs. Rather than adopting off-the-shelf systems like Material Design—which risked diluting the brand and overcomplicating development—we built a scalable, accessible, and brand-aligned system from scratch. This not only addressed immediate usability issues but also laid the groundwork for future dashboards across finance, teaching, and student use cases.
          </p>
        </div>

        {/* Problem */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Problem</h2>
        </div>
        
        <div className="bg-red-50 rounded-lg p-8 mb-16">
          <p className="text-gray-700 leading-relaxed text-center">
            The existing Admin Dashboard was cluttered, inconsistent, and difficult to maintain. Users struggled with poor hierarchy, hard-to-read tables, and unclear interactions—all symptoms of an undefined design system. Frequent product updates compounded these issues, creating a fragmented user experience and design debt across the platform.
          </p>
        </div>

        {/* My Role & Team */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">My Role & Team</h2>
        </div>
        
        <div className="prose prose-lg max-w-none mb-16">
          <p className="text-gray-700 leading-relaxed mb-6">
            As the <strong>Product Designer</strong> on a two-person design team, I led the strategy, creation, and implementation of the new design system for SchoolworksPro&#39;s Admin Dashboard. My responsibilities included:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <ul className="space-y-3 text-gray-700">
                <li>• Conducting a full <strong>UI audit</strong> to identify inconsistencies and usability issues</li>
                <li>• Defining the <strong>design system architecture</strong>: typography, color, components, interaction states</li>
                <li>• Designing and documenting <strong>scalable, reusable components</strong> in Figma</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <ul className="space-y-3 text-gray-700">
                <li>• Collaborating with developers to ensure <strong>design feasibility and implementation consistency</strong></li>
                <li>• Championing <strong>accessibility best practices</strong> (WCAG compliance, color contrast, keyboard nav)</li>
                <li>• Providing <strong>system guidance</strong> for future expansion into other product areas</li>
              </ul>
            </div>
          </div>
          
          <p className="text-gray-700 leading-relaxed">
            Despite a lean team and tight timelines, I owned the end-to-end design system process—from discovery to delivery—while balancing brand alignment, UX goals, and scalability.
          </p>
        </div>

        {/* Design Audit & Key Findings */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Design Audit & Key Findings</h2>
        </div>
        
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed mb-8">
            A comprehensive audit revealed several UX and UI issues that needed to be addressed before any systemization could begin:
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h4 className="font-bold text-blue-900 mb-3">Typography</h4>
            <p className="text-gray-700">Over 4 different fonts and 20+ scale variations broke visual hierarchy and readability.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h4 className="font-bold text-blue-900 mb-3">Color</h4>
            <p className="text-gray-700">No standardized palette existed, resulting in inconsistent visual styling and inaccessible contrast.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h4 className="font-bold text-blue-900 mb-3">Buttons, Tags, and Tabs</h4>
            <p className="text-gray-700">Visually indistinct—users couldn&#39;t tell what was interactive versus static.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h4 className="font-bold text-blue-900 mb-3">Tables</h4>
            <p className="text-gray-700">Heading contrast was too high, reducing legibility and increasing eye strain for users analyzing data.</p>
          </div>
        </div>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-16">
          <blockquote className="text-gray-700 italic">
          &quot;Every screen looks slightly different — it feels like five different products stitched together.&quot;<br/>
          &quot;I had no idea that was a button — it looks like a tag.&quot;
          </blockquote>
        </div>

        {/* Strategy: Build vs. Adopt */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Strategy: Build vs. Adopt</h2>
        </div>
        
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed mb-6">
            We explored adopting established design systems like Material Design. However, we quickly identified key trade-offs:
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h4 className="font-bold text-orange-600 mb-3">Visual Identity Risk</h4>
            <p className="text-gray-700 text-sm">Using Material would risk making our product look like a generic Google app, which would erode trust with schools that rely on brand familiarity.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h4 className="font-bold text-orange-600 mb-3">Development Overhead</h4>
            <p className="text-gray-700 text-sm">Material&#39;s complexity would have introduced bloated components we didn&#39;t need—slowing implementation without delivering real user value.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h4 className="font-bold text-orange-600 mb-3">Limited Flexibility</h4>
            <p className="text-gray-700 text-sm">Our platform serves a wide range of institutions with evolving needs. We needed a system that could scale our way, not within someone else&#39;s rules.</p>
          </div>
        </div>
        
        <div className="bg-green-50 rounded-lg p-8 mb-16">
          <p className="text-gray-700 leading-relaxed text-center">
            Choosing to build a <strong>custom design system</strong> gave us full control—allowing us to define consistent patterns, align with our brand, and prioritize accessibility from day one. It also made it easier to maintain a unified experience across our upcoming dashboards for Finance, Teachers, and Students.
          </p>
        </div>

        {/* Design System Foundations */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Design System Foundations</h2>
        </div>

        {/* Color Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-left">Color</h3>
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-gray-700 leading-relaxed mb-6">
              I designed the color system to support <strong>brand integrity</strong>, <strong>usability</strong>, and <strong>accessibility</strong>:
            </p>
            <ul className="text-gray-700 space-y-2 mb-6">
              <li>• Anchored the primary and secondary colors in SchoolworksPro&#39;s visual identity</li>
              <li>• Introduced functional UI colors (grey, red, green, orange, pink) already familiar to users</li>
              <li>• Created a <strong>900–100 scale</strong> per color for design flexibility and theming needs</li>
              <li>• Ran accessibility audits using WCAG 2.1 to ensure compliant contrast ratios across combinations</li>
            </ul>
          </div>
          
          <div className="px-8">
          <Image
            src={"/img/works/schoolworkspro/Color.png"}
            width={1320}
            height={1150}
            alt="color"
          /></div>
          
          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h4 className="font-bold text-gray-900 mb-3">Impact:</h4>
            <ul className="text-gray-700 space-y-1">
              <li>• Eliminated guesswork in design decisions</li>
              <li>• Reduced rework and visual inconsistency</li>
              <li>• Helped developers implement consistent themes faster</li>
            </ul>
          </div>
        </div>

        {/* Typography Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-left">Typography</h3>
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-gray-700 leading-relaxed mb-6">
              I introduced <strong>Inter</strong> as the primary typeface for its high legibility and web-friendliness. I defined a responsive, scalable type system to support various use cases:
            </p>
            <ul className="text-gray-700 space-y-2 mb-6">
              <li>• <strong>Display</strong> styles for section headers and marketing-style content</li>
              <li>• <strong>Heading</strong> levels H1–H6 for content structure and semantic clarity</li>
              <li>• <strong>Body</strong> sizes from XXXL to Tiny for dense data tables and general UI</li>
              <li>• <strong>Label and Button</strong> styles to enforce visual consistency in interactive elements</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Each tier was built in three font weights—Regular, Medium, and Bold—to give designers and devs clear patterns for hierarchy and emphasis.
            </p>
          </div>
          
          <div className="px-8">
          <Image
            src={"/img/works/schoolworkspro/Typography.png"}
            width={1250}
            height={1270}
            alt="typography"
          />
          </div>
          
          <div className="bg-green-50 rounded-lg p-6 mb-8">
            <h4 className="font-bold text-gray-900 mb-3">Impact:</h4>
            <ul className="text-gray-700 space-y-1">
              <li>• Improved scan-ability and readability</li>
              <li>• Increased accessibility, especially in data-heavy sections</li>
              <li>• Standardized text styles across the platform for consistency and speed</li>
            </ul>
          </div>
        </div>

        {/* Core Components */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Core Components</h2>
        </div>

        {/* Buttons */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-left">Buttons</h3>
          <div className="prose prose-lg max-w-none mb-8">
            <ul className="text-gray-700 space-y-2">
              <li>• <strong>Sizes:</strong> Small, medium, large</li>
              <li>• <strong>Icons:</strong> Support for left/right icon placement</li>
              <li>• <strong>States:</strong> Normal, hover, disabled</li>
              <li>• <strong>Types:</strong> Primary, secondary, tertiary—with color-coded logic</li>
            </ul>
          </div>
          
          <div className="px-8">
            <Image
              src={"/img/works/schoolworkspro/Buttons.png"}
              width={1220}
              height={830}
              alt="buttons"
            />
          </div>
          
          <div className="bg-purple-50 rounded-lg p-6 mb-8">
            <h4 className="font-bold text-gray-900 mb-3">Impact:</h4>
            <ul className="text-gray-700 space-y-1 mb-4">
              <li>• Reduced decision fatigue by limiting button types</li>
              <li>• Improved interaction clarity with defined states</li>
              <li>• Simplified dev and QA by documenting button specs in Figma</li>
            </ul>
            <blockquote className="text-gray-700 italic border-l-4 border-purple-300 pl-4">
            &quot;Now I always know what&#39;s clickable and what&#39;s just a label.&quot;
            </blockquote>
          </div>
        </div>

        {/* Forms */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-left">Forms</h3>
          <div className="prose prose-lg max-w-none mb-8">
            <ul className="text-gray-700 space-y-2">
              <li>• Multiple states: hover, focus, typing, error, success</li>
              <li>• Input field variations for icons, inline validation, and accessibility</li>
              <li>• Clear error messaging and consistent labeling</li>
              <li>• Intelligent search dropdown and user-friendly date picker</li>
            </ul>
          </div>
          
          <div className="px-8">
          <Image
            src={"/img/works/schoolworkspro/Form.png"}
            width={648}
            height={1766}
            alt="Form"
          /></div>
          
          <div className="bg-orange-50 rounded-lg p-6 mb-8">
            <h4 className="font-bold text-gray-900 mb-3">Impact:</h4>
            <ul className="text-gray-700 space-y-1 mb-4">
              <li>• Enhanced usability and reduced form errors</li>
              <li>• Improved developer efficiency with clearly defined states</li>
              <li>• Delivered a consistent experience across all forms</li>
            </ul>
            <blockquote className="text-gray-700 italic border-l-4 border-orange-300 pl-4">
            &quot;We noticed fewer support tickets once the new form patterns went live.&quot;
            </blockquote>
          </div>
        </div>

        {/* Navigation */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-left">Navigation</h3>
          <div className="prose prose-lg max-w-none mb-8">
            <ul className="text-gray-700 space-y-2">
              <li>• <strong>Sidebar Redesign:</strong> Condensed layout to reduce clutter</li>
              <li>• <strong>Collapsible Menus:</strong> Improved scan-ability and task focus</li>
              <li>• <strong>Header Tabs:</strong> Moved key sections to top-level tabs for easier access</li>
            </ul>
          </div>
          
          <div className="px-8">
          <Image
            src={"/img/works/schoolworkspro/Navigation.png"}
            width={648}
            height={1766}
            alt="Form"
          />
        </div>
          
          <div className="bg-teal-50 rounded-lg p-6 mb-8">
            <h4 className="font-bold text-gray-900 mb-3">Impact:</h4>
            <ul className="text-gray-700 space-y-1 mb-4">
              <li>• Increased efficiency in task completion</li>
              <li>• Reduced scroll fatigue for admin users</li>
              <li>• Enhanced discoverability of key features</li>
            </ul>
            <blockquote className="text-gray-700 italic border-l-4 border-teal-300 pl-4">
            &quot;It&#39;s so much easier to find what I need now — I don&#39;t have to hunt through the sidebar anymore.&quot;
            </blockquote>
          </div>
        </div>

        {/* Other Components */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-left">Other Components</h3>
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-gray-700 leading-relaxed mb-6">
              Components like tables, modals, and sliders were also redesigned for consistency with the new system.
            </p>
          </div>
          
          <div className="px-8">
          <Image
            src={"/img/works/schoolworkspro/FRAME.png"}
            width={648}
            height={1766}
            alt="Form"
          />
        </div>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h4 className="font-bold text-gray-900 mb-3">Impact:</h4>
            <ul className="text-gray-700 space-y-1">
              <li>• Standardized UI patterns across modules</li>
              <li>• Improved readability in dense data layouts</li>
              <li>• Reduced design and dev overhead by aligning to core foundations</li>
            </ul>
          </div>
        </div>

        {/* Outcomes & Impact */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Outcomes & Impact</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <OutcomeCard 
            number="65%" 
            title="Design Debt Reduction" 
            description="Reduced design debt based on audit comparisons"
            bgColor="bg-blue-50"
          />
          <OutcomeCard 
            number="3+" 
            title="Product Areas" 
            description="Scalable foundation extended to Finance, Teacher, and Student dashboards"
            bgColor="bg-green-50"
          />
          <OutcomeCard 
            number="20+" 
            title="Consolidated Variations" 
            description="Reduced button and label variations through systematic approach"
            bgColor="bg-purple-50"
          />
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h4 className="font-bold text-green-600 mb-3">User Experience</h4>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>✅ Improved UI consistency across the Admin Dashboard</li>
              <li>🧠 Improved user clarity and readability in data-dense areas</li>
              <li>🌈 Ensured accessibility with WCAG-compliant color palettes</li>
              <li>🧭 Reduced user confusion based on qualitative feedback</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h4 className="font-bold text-blue-600 mb-3">Development & Process</h4>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>🎯 Enabled faster development cycles with componentized system</li>
              <li>🛠️ Reduced visual and functional duplication</li>
              <li>🚀 Accelerated developer handoff with shared design language</li>
              <li>🤝 Received positive feedback for system clarity and maintainability</li>
            </ul>
          </div>
        </div>

        {/* Reflection & What's Next */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Reflection & What's Next</h2>
        </div>
        
        <div className="prose prose-lg max-w-none mb-16">
          <p className="text-gray-700 leading-relaxed mb-6">
            If I could go back, I would have initiated earlier alignment with developers and QA on component naming conventions to reduce friction during implementation. I'd also dedicate more time to usability testing on early component prototypes to validate assumptions sooner.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            The design system is now being actively extended to other SchoolworksPro dashboards, including Finance, Teacher, and Student experiences. Longer term, we're exploring a centralized <strong>design ops</strong> process to maintain and evolve this system across our growing product suite.
          </p>
        </div>

        {/* Next Project CTA */}
        <div className="text-right">
          <a
            href="/works/caseconnect"
            className="inline-flex items-center bg-gray-900 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-gray-800 transition-colors duration-200"
          >
            Check CaseConnect Case Study Next
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}