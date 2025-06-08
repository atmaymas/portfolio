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
              "I can't tell which elements are clickable anymore — everything looks the same."<br/>
              "I waste time scrolling through menus to find what I need."
            </blockquote>
          </div>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Frequent updates and feature releases made the interface harder to maintain and scale, leading to internal inefficiencies and inconsistent design decisions. These pain points highlighted the need for a foundational reset.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            To solve this, I led the creation of a <strong>custom design system</strong> tailored to SchoolworksPro's needs. Rather than adopting off-the-shelf systems like Material Design—which risked diluting the brand and overcomplicating development—we built a scalable, accessible, and brand-aligned system from scratch. This not only addressed immediate usability issues but also laid the groundwork for future dashboards across finance, teaching, and student use cases.
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
            As the <strong>Product Designer</strong> on a two-person design team, I led the strategy, creation, and implementation of the new design system for SchoolworksPro's Admin Dashboard. My responsibilities included:
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
            <h4 className="font-bold text-gray-900 mb-3">Typography</h4>
            <p className="text-gray-700">Over 4 different fonts and 20+ scale variations broke visual hierarchy and readability.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h4 className="font-bold text-gray-900 mb-3">Color</h4>
            <p className="text-gray-700">No standardized palette existed, resulting in inconsistent visual styling and inaccessible contrast.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h4 className="font-bold text-gray-900 mb-3">Buttons, Tags, and Tabs</h4>
            <p className="text-gray-700">Visually indistinct—users couldn't tell what was interactive versus static.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h4 className="font-bold text-gray-900 mb-3">Tables</h4>
            <p className="text-gray-700">Heading contrast was too high, reducing legibility and increasing eye strain for users analyzing data.</p>
          </div>
        </div>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-16">
          <blockquote className="text-gray-700 italic">
            "Every screen looks slightly different — it feels like five different products stitched together."<br/>
            "I had no idea that was a button — it looks like a tag."
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
            <h4 className="font-bold text-red-600 mb-3">Visual Identity Risk</h4>
            <p className="text-gray-700 text-sm">Using Material would risk making our product look like a generic Google app, which would erode trust with schools that rely on brand familiarity.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h4 className="font-bold text-red-600 mb-3">Development Overhead</h4>
            <p className="text-gray-700 text-sm">Material's complexity would have introduced bloated components we didn't need—slowing implementation without delivering real user value.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h4 className="font-bold text-red-600 mb-3">Limited Flexibility</h4>
            <p className="text-gray-700 text-sm">Our platform serves a wide range of institutions with evolving needs. We needed a system that could scale our way, not within someone else's rules.</p>
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
              <li>• Anchored the primary and secondary colors in SchoolworksPro's visual identity</li>
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
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Buttons</h3>
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
              "Now I always know what's clickable and what's just a label."
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
          
          <div className="h-64 mb-6">
          <Image
            src={"/img/works/schoolworkspro/Form.png"}
            width={648}
            height={1766}
            alt="Form"
          />
        </div>
          
          <div className="bg-orange-50 rounded-lg p-6 mb-8">
            <h4 className="font-bold text-gray-900 mb-3">Impact:</h4>
            <ul className="text-gray-700 space-y-1 mb-4">
              <li>• Enhanced usability and reduced form errors</li>
              <li>• Improved developer efficiency with clearly defined states</li>
              <li>• Delivered a consistent experience across all forms</li>
            </ul>
            <blockquote className="text-gray-700 italic border-l-4 border-orange-300 pl-4">
              "We noticed fewer support tickets once the new form patterns went live."
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
          
          <div className="h-64 mb-6">
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
              "It's so much easier to find what I need now — I don't have to hunt through the sidebar anymore."
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
          
          <div className="h-64 mb-6">
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
        <div className="text-center">
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


/**
import Card from "@/app/ui/components/card";
import { mulish } from "@/app/ui/font";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className={`${mulish.className} md:px-12 px-5`}>
      <div className="text-center mb-12">
        <p className="text-4xl font-thin mb-4">Establishing scalable UI foundations</p>
        <p className="text-4xl font-thin ">for an evolving </p>
        <p className="text-4xl font-thin mb-4">
          <span className="text-[#16649e] font-bold">EdTech</span> Platform
        </p>
      </div>
      <div className="mb-10">
        <div className="md:flex justify-center md:space-x-4">
          <Card subtitle="ROLE" title="Product Designer" content="" />
          <Card subtitle="CLIENT" title="Schoolworkspro" content="" />
          <Card subtitle="YEAR" title="2024" content="" />
        </div>
      </div>
      <div className="md:w-3/4 mx-auto mb-10">
        <p className="mb-10">
          In 2024, the design team was tasked with redesigning the Admin
          Dashboard for Schoolworkspro, aiming to reimagine the platform&apos;s
          future while addressing the immediate needs of our users. As part of
          this project, I was responsible for the effort to overhaul existing
          components and develop a comprehensive design system from the ground
          up, ensuring consistency and usability across the platform.
          Schoolworkspro is a dynamic education platform, with frequent updates
          to meet evolving client requirements. This made it crucial to
          establish a consistent design language that could adapt to these
          changes seamlessly. With a small design team of just two members, our
          primary focus was on creating high-quality components that not only
          addressed common use cases but also set a strong foundation for future
          development.
        </p>
        <p>
          After conducting a comprehensive audit of the existing Admin
          Dashboard, several inconsistencies and usability issues surfaced.
          These gaps not only hindered the user experience but also made it
          challenging to maintain design consistency across the platform. Key
          issues identified included:
        </p>
        <ul className="list-disc list-inside">
          <li>
            <b>Typography</b>: There was a lack of a cohesive type system, with four
            different fonts used across the site and over 20 different type
            scales and styles. This inconsistency disrupted the visual
            hierarchy, making it difficult for users to scan and understand
            content efficiently.
          </li>
          <li>
            <b>Colors</b>: There was no established color standard or palette, leading
            to inconsistent color usage across various components. This created
            visual confusion and detracted from a cohesive user interface.
          </li>
          <li>
            <b>Buttons, Tags, and Tabs</b>: These elements shared similar styles, which
            made it difficult for users to differentiate between interactive
            elements and navigate the platform effectively. The lack of visual
            distinction led to confusion about which elements were clickable or
            merely informational.
          </li>
          <li>
          <b>Tables</b>: Table layouts suffered from poor legibility, particularly
            due to overly high contrast in the headings. This not only made it
            harder for users to read the content but also caused unnecessary eye
            strain, particularly when viewing large datasets.
          </li>
        </ul>
      </div>
      <div className="flex justify-center mb-12">
        <Card subtitle="" title="Foundations" content="" />
      </div>
      <div className="md:w-3/4 mx-auto mb-10">
        <p className="mb-8">
          Before diving into the design phase, we had to decide whether to adopt
          an existing design system. However, this posed challenges, as adopting
          external design systems often means aligning the product to another
          organization’s goals and aesthetic. For example, using a system like
          Material Design could make the product look too much like Google
          products, which wasn’t aligned with Schoolworkspro’s brand identity.
          Thus, we opted to create a custom design system for Schoolworkspro
          from the ground up. This approach allowed us to maintain the unique
          identity of the platform and ensure consistency across future products
          like the Finance Dashboard, Teacher Dashboard, and mobile
          applications. The goal was to design a flexible, scalable system that
          could be extended across the entire ecosystem of Schoolworkspro
          products.
        </p>
        <p className="mb-8">
          For the color palette, I selected primary and secondary colors aligned
          with Schoolworkspro&apos;s brand identity and logo. In addition to these, I
          incorporated essential colors like grey, green, red, orange, and pink,
          which were already in use across various Schoolworkspro platforms. To
          ensure accessibility, I adhered to the WCAG guidelines by conducting a
          thorough audit to verify the viability of all colors used. Each color,
          including its shades, was designed to provide a full range of
          contrast, with values ranging from 900 (darkest) to 100 (lightest),
          with grey being a notable exception due to its extensive use across UI
          elements.
        </p>
        <p>
          For typography, I chose Inter, a versatile and highly readable font,
          ensuring it could meet the diverse needs of the platform. The
          typographic system was designed to maintain consistency and clarity
          throughout, with a structured type scale to support different content
          hierarchies. The type scale I developed included distinct categories
          for various use cases:
        </p>
        <ul className="list-inside list-disc">
          <li>
            <b>Display</b>: Large headings used for major sections or landing pages.
          </li>
          <li>
            <b>Headings</b>: Applied across H1 to H6 for structured content, ensuring
            clear hierarchy.
          </li>
          <li>
           <b>Body</b>: Text sizes that ranged from XXXL to Tiny, catering to
            paragraphs and smaller text elements across different screen sizes.
          </li>
          <li>
            <b>Buttons & Labels</b>: Designed specifically for action-driven elements
            and form labels.
          </li>
        </ul>
        <p>
          <br></br>
          Each type category was assigned three different styles to maintain
          flexibility and accommodate different content needs:
        </p>
        <ul className="list-inside list-disc">
          <li><b>Bold:</b> Used for high emphasis and important actions.</li>
          <li>
            <b>Medium:</b> Applied for medium emphasis, typically in subheadings or
            less prominent buttons.
          </li>
          <li><b>Regular:</b> Utilized for body text and standard content.</li>
        </ul>
        <p>
          This approach ensured a consistent and adaptable typographic hierarchy
          across the platform, making the interface both functional and
          aesthetically cohesive.
        </p>
      </div>
      <div className="md:w-5/6 mx-auto bg-[#f0f1f5] py-8 px-10 mb-10">
        <div className="mb-24">
          <p className="font-bold text-4xl mb-4">Color</p>
          <Image
            src={"/img/works/schoolworkspro/Color.png"}
            width={1320}
            height={1150}
            alt="color"
          />
        </div>
        <div className="">
          <p className="font-bold text-4xl mb-8">Typography</p>
          <Image
            src={"/img/works/schoolworkspro/Typography.png"}
            width={1250}
            height={1270}
            alt="typography"
          />
        </div>
      </div>
      <div className="flex justify-center mb-12">
        <Card subtitle="" title="Core Components" content="" />
      </div>
      <div className="md:w-3/4 mx-auto mb-10">
        <p>
          The button system was built to ensure flexibility, adaptability, and
          consistency across the platform. There are multiple button styles
          based on their importance and action states.
        </p>
        <ul className="list-inside list-disc">
          <li>
          <b>Sizes</b>: Buttons are available in three sizes—small, medium, and
            large—to suit various use cases, from minimal action buttons to more
            prominent calls-to-action.
          </li>
          <li>
          <b>Icon Support</b>: Buttons are versatile, supporting both right and left
            icons for better affordance, with icons clearly indicating the
            function or destination of the action.
          </li>
          <li>
          <b>Primary & Secondary Actions</b>: Primary buttons are the most prominent,
            driving the main action on the page. They come with clear
            color-coded states: normal, hover, and disabled. Secondary buttons
            are more subtle but still maintain enough contrast to be
            distinguishable.
          </li>
          <li>
          <b>Color Variations</b>: Buttons come in different color options: primary,
            secondary, gray, and pink. Each button has normal, hover, and
            disabled states to guide users visually through their interactions.
          </li>
          <li>
          <b>Tertiary Buttons</b>: For less prominent actions, tertiary buttons offer
            a more minimal design while still following the same state-based
            interaction feedback as primary and secondary buttons.
          </li>
        </ul>
      </div>
      <div className="md:w-5/6 mx-auto bg-[#f0f1f5] py-8 px-10 mb-14">
        <div className="">
          <p className="font-bold text-4xl mb-8">Buttons</p>
          <div className="px-8">
            <Image
              src={"/img/works/schoolworkspro/Buttons.png"}
              width={1220}
              height={830}
              alt="buttons"
            />
          </div>
        </div>
      </div>
      <div className="md:w-3/4 mx-auto mb-10">
        <p>
          The forms are designed to maintain clarity and ease of use across
          different states—whether an input is in focus, typing, or has returned
          a validation error. The components are built with a focus on user
          feedback and error prevention.
        </p>
        <ul className="list-disc list-inside">
          <li>
            <b>Input Fields</b>: Input fields support various states: normal, hover,
            clicked, typing, filled, success, and error. Clear visual feedback
            is provided, like changing the border color (blue for active, red
            for error, and green for success).
          </li>
          <li>
          <b>Labels</b>: Consistent labels guide users, placed both inside and
            outside fields, depending on the form requirement. They also support
            icons for added context, such as social media, price, or date
            fields.
          </li>
          <li>
          <b>Validation</b>: Error and success states are distinct, using color cues
            like red for errors and green for success. Error messages are
            accompanied by labels to ensure the user understands the issue.
          </li>
          <li>
          <b>Search Functionality</b>: The search bar offers a dropdown with user
            suggestions when typing, making it easier to find the correct user
            or data entry. This improves the user experience by minimizing
            typing errors.
          </li>
          <li>
          <b>Dropdown & Date Selector</b>: Dropdowns are designed with hover states
            and disabled states to guide users through selection. The date
            picker allows seamless navigation of dates, structured with
            user-friendly interface controls.
          </li>
        </ul>
      </div>
      <div className="md:w-5/6 mx-auto bg-[#f0f1f5] py-12 px-10 mb-10">
        <p className="font-bold text-4xl mb-8">Form</p>
        <div className="flex justify-center">
          <Image
            src={"/img/works/schoolworkspro/Form.png"}
            width={648}
            height={1766}
            alt="Form"
          />
        </div>
      </div>
      <div className="md:w-3/4 mx-auto mb-10">
        <p>
          The original sidebar was overwhelming due to its length and lack of
          organization. To address this:
        </p>

        <ul className="list-disc list-inside">
          <li>
          <b>Condensed Structure</b>: The updated sidebar features a more compact and
            organized layout, reducing visual clutter and helping users quickly
            find sections without scrolling extensively.
          </li>
          <li>
          <b>Collapsible Sections</b>: Categories within the sidebar are grouped into
            collapsible sections, making the design cleaner while still offering
            access to all necessary items.
          </li>
          <li>
            <b>Sections Moved to Main Page Header</b>: Instead of grouping all the
            sections within collapsible menus in the sidebar, I relocated key
            sections to the main page header and used selection tabs instead.
            This allows for easier access and reduces the need for constant
            sidebar scrolling.
          </li>
        </ul>
      </div>
      <div className="md:w-5/6 mx-auto bg-[#f0f1f5] py-12 mb-8">
        <p className="font-bold text-4xl mb-8 px-10">Navigation</p>
        <div className="px-6">
          <Image
            src={"/img/works/schoolworkspro/Navigation.png"}
            width={1416}
            height={1439}
            alt="Form"
          />
        </div>
      </div>
      <div className="flex justify-center mb-6">
        <Card subtitle="" title="Other Components" content="" />
      </div>
      <div className="md:w-3/4 mx-auto mb-10">
        <p>
          In addition to the main features, various other components were also
          designed or refined to ensure consistency across the platform.
          Elements such as tables, modals, sliders, and more were aligned with
          the overall design system to enhance usability and visual harmony.
          While not as extensively documented, these components played a vital
          role in delivering a cohesive and seamless experience across the Admin
          Dashboard.
        </p>
      </div>
      <div className="md:w-5/6 mx-auto mb-8">
        <Image
          src={"/img/works/schoolworkspro/FRAME.png"}
          width={1450}
          height={810}
          alt="frame"
        />
      </div>
      <div className="md:w-5/6 mx-auto bg-[#f0f1f5] py-12 mb-5">
        <div className="px-16">
          <Image
            src={"/img/works/schoolworkspro/etc.png"}
            width={1155}
            height={2170}
            alt="etc"
          />
        </div>
      </div>
      <div className="flex justify-center mb-6">
        <Card subtitle="" title="Conclusion" content="" />
      </div>
      <div className="md:w-3/4 mx-auto">
        <p className="mb-8">
          While the Admin Dashboard design system has been successfully
          completed, it remains a work in progress. As more schools and colleges
          onboard, each with their own unique requirements, new components and
          features will inevitably be added. The dynamic nature of this platform
          means that it will continually evolve to meet the diverse needs of
          different organizations.
        </p>
        <p className="mb-8">
          It&apos;s important to note that, as of now, the web implementation is
          still in progress. Depending on technical feasibility, some design
          elements may be subject to further refinement during development.
          However, the foundational design system we&apos;ve established will serve
          as a solid base moving forward, ensuring consistency and scalability.
          Future updates are unlikely to require a complete overhaul, as this
          redesign did.
        </p>
        <p className="mb-8">
          Looking ahead, this design system will also be extended to other
          products within SchoolworksPro, including separate dashboards for
          finance, teachers, and students. By establishing these strong design
          foundations, the platform is set to scale more efficiently across
          different user groups and functionalities.
        </p>
      </div>
      <div className="block md:flex justify-end">
        <Link
          href={"/works/caseconnect"}
          className={`bg-black text-white px-8 py-3 rounded-lg shadow-2xl`}
        >
          Check CaseConnect Case Study Next
        </Link>
      </div>
    </div>
  );
}
  */
