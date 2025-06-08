import { mulish } from "@/app/ui/font";
import Image from "next/image";
import Link from "next/link";

import React from 'react';

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

interface InsightCardProps {
  icon: string;
  title: string;
  quote: string;
}

const InsightCard: React.FC<InsightCardProps> = ({ icon, title, quote }) => (
  <div className="bg-white rounded-lg p-6 shadow-sm border">
    <div className="flex items-center mb-4">
      <span className="text-2xl mr-3">{icon}</span>
      <h4 className="font-bold text-gray-900">{title}</h4>
    </div>
    <blockquote className="text-gray-700 italic">"{quote}"</blockquote>
  </div>
);

interface DesignOpportunityCardProps {
  title: string;
  description: string;
  bgColor?: string;
}

const DesignOpportunityCard: React.FC<DesignOpportunityCardProps> = ({ title, description, bgColor = "bg-blue-50" }) => (
  <div className="bg-white rounded-lg p-6 shadow-sm border mb-6">
    <h4 className="font-bold text-gray-900 mb-3">{title}</h4>
    <p className="text-gray-700">{description}</p>
  </div>
);

interface PrincipleCardProps {
  title: string;
  description: string;
  bgColor?: string;
}

const PrincipleCard: React.FC<PrincipleCardProps> = ({ title, description, bgColor = "bg-blue-50" }) => (
  <div className={`${bgColor} rounded-lg p-6`}>
    <h4 className="font-bold text-gray-900 mb-3">{title}</h4>
    <p className="text-gray-700 text-sm">{description}</p>
  </div>
);

export default function VRElderlyDementiaCaseStudy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with gradient background */}
      <div className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-light mb-6 leading-tight">
            Improving Virtual Reality
          </h1>
          <h2 className="text-5xl font-light mb-4">
            for <span className="text-blue-400 font-bold">Elderly Users</span> with Dementia
          </h2>
        </div>
        
        {/* Project details cards - horizontal */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="flex flex-wrap justify-center gap-4">
            <Card subtitle="ROLE" title="UX Researcher" className="flex-1 min-w-[200px]" />
            <Card subtitle="TEAM" title="Multi-disciplinary University Team" className="flex-1 min-w-[200px]" />
            <Card subtitle="DURATION" title="3 Months" className="flex-1 min-w-[200px]" />
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
            This university-led project explored how <strong>virtual reality (VR)</strong> could enhance the lives of elderly individuals living with dementia. Our goal was to create a more inclusive, calming, and cognitively supportive VR experience tailored to their unique challenges. Over a 3-month research and design sprint, we identified opportunities to support emotional well-being, reduce social isolation, and enable safe, meaningful engagement with digital environments.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            While reminiscence therapy has long been used to support cognitive health, it typically lacks interactivity and personalization. By leveraging the immersive potential of VR, we set out to elevate this therapeutic experience — transforming memory recall into an intuitive, multisensory journey.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            Through contextual inquiries, interviews, and a literature review, we found existing reminiscence therapy methods to be beneficial, but static. VR showed strong potential for triggering personal memories, enhancing mood, and encouraging social interaction while addressing the unique accessibility needs of elderly users with cognitive decline.
          </p>
        </div>

        {/* Problem & Context */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Problem & Context</h2>
        </div>
        
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed mb-8">
            Older adults with dementia often experience a combination of cognitive, emotional, and physical challenges that limit their engagement with conventional technologies. Through our research, we identified three core areas of difficulty:
          </p>
        </div>
        
        <div className="grid md:grid-cols-1 gap-6 mb-8">
          <InsightCard 
            icon="🤝" 
            title="Limited communication and social isolation"
            quote="Sometimes I go days without talking to anyone. It would be nice to just have someone around — even virtually."
          />
          <InsightCard 
            icon="🧠" 
            title="Declining memory and task navigation difficulties"
            quote="I forget what I was doing halfway through… too many buttons confuse me."
          />
          <InsightCard 
            icon="📱" 
            title="Difficulty engaging with conventional technologies"
            quote="Most devices are too complicated. I need something simple that doesn't make me feel lost."
          />
        </div>
        
        
        <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-16">
          <p className="text-gray-700 leading-relaxed">
            These challenges highlighted the need for a technology solution that could provide meaningful engagement while accommodating cognitive limitations, physical constraints, and emotional safety requirements.
          </p>
        </div> <div className="relative mb-24"><Image
          className="drop-shadow-2xl rounded-t-lg"
          src="/img/works/vr/vr2.png"
          alt="vr"
          width={1740}
          height={1020}
        /></div>

        {/* My Role & Team */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">My Role & Team</h2>
        </div>
        
        <div className="prose prose-lg max-w-none mb-16">
          <p className="text-gray-700 leading-relaxed mb-6">
            As the <strong>UX Researcher</strong> on a multi-disciplinary university team, I was responsible for leading the human-centered research process and translating insights into actionable design recommendations. My key contributions included:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <ul className="space-y-3 text-gray-700">
                <li>• Conducting <strong>interviews and contextual research</strong> with early-stage dementia patients and caregivers</li>
                <li>• <strong>Synthesizing findings</strong> to uncover user needs and behavioral patterns</li>
                <li>• <strong>Mapping emotional journeys</strong> to identify design opportunities</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <ul className="space-y-3 text-gray-700">
                <li>• Collaborating with design teammates to <strong>co-create inclusive interaction patterns</strong></li>
                <li>• Developing <strong>safety measures and risk mitigation strategies</strong></li>
                <li>• <strong>Presenting findings</strong> to stakeholders and faculty for evaluation</li>
              </ul>
            </div>
          </div>
          
          <p className="text-gray-700 leading-relaxed">
            Our team was composed of students in <strong>interaction design, psychology, and computing science</strong>, working collaboratively with faculty and healthcare partners. This interdisciplinary approach allowed us to address both technical feasibility and therapeutic effectiveness.
          </p>
        </div>

        {/* Key Research Insights */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Research Insights</h2>
        </div>
        
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed mb-8">
            Through our research process, we uncovered three critical insights that would inform our design approach:
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-left">1. Social Isolation & Loneliness</h3>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
            <p className="text-gray-700 leading-relaxed mb-4">
              Many elderly individuals reported feeling disconnected from others. They expressed a deep need for emotional connection, meaningful activities, and easy-to-use tools for engagement.
            </p>
            <blockquote className="text-gray-700 italic">
              "Sometimes I go days without talking to anyone. It would be nice to just have someone around — even virtually."
            </blockquote>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-left">2. Cognitive Decline & Interface Complexity</h3>
          <div className="bg-orange-50 border-l-4 border-orange-400 p-6 mb-6">
            <p className="text-gray-700 leading-relaxed mb-4">
              Users found it difficult to recall steps or navigate complex UIs. This confirmed the importance of clear guidance, memory support, and low-friction interactions.
            </p>
            <blockquote className="text-gray-700 italic">
              "I forget what I was doing halfway through… too many buttons confuse me."
            </blockquote>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-left">3. Potential of VR in Reminiscence Therapy</h3>
          <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-6">
            <p className="text-gray-700 leading-relaxed mb-4">
              Academic and clinical studies supported VR's role in stimulating memory, especially when environments mirrored real or familiar places. Users showed positive emotional responses to immersive, familiar environments.
            </p>
            <blockquote className="text-gray-700 italic">
              "I saw the beach I used to visit with my family — it made me smile and remember the smell of the sea."
            </blockquote>
          </div>
        </div>

        {/* Design Opportunities */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Design Opportunities</h2>
        </div>
        
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed mb-8">
            Based on our research insights, we identified five key design opportunities that could address the core challenges faced by elderly users with dementia:
          </p>
        </div>


        <DesignOpportunityCard 
          title="Support Social Connection"
          description="Through chat features, multiplayer modes, or shared spaces with caregivers to reduce isolation and enable meaningful interaction."
        />

        <DesignOpportunityCard 
          title="Enable Personalized Memory Recall"
          description="By recreating meaningful locations, incorporating familiar music, or displaying family scenes to trigger positive memories and emotional responses."
        />

        <DesignOpportunityCard 
          title="Incorporate Cognitive Prompts"
          description="Using spaced repetition, memory cues, and simple task flows to support cognitive function without overwhelming users."
        />

        <DesignOpportunityCard 
          title="Design for Accessibility"
          description="With seated experiences, large font sizes, voice options, and simplified gestures to accommodate physical limitations."
        />

        <DesignOpportunityCard 
          title="Create Emotionally Positive Content"
          description="Through curated visuals, calming themes, and non-triggering content that promotes well-being and emotional safety."
        />
        
        <div className="relative mb-24"><Image
          className="drop-shadow-2xl rounded-t-lg"
          src="/img/works/vr/vr1.png"
          alt="vr"
          width={1740}
          height={1020}
        /></div>
        {/* Design Principles */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Design Principles</h2>
        </div>
        
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed mb-8">
            To guide our design decisions, we established five core principles that would ensure our VR solution met the unique needs of elderly users with dementia:
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <PrincipleCard 
            title="Cognitive Simplicity"
            description="Reduce cognitive load by simplifying navigation, using clear labels, and guiding users with prompts"
            bgColor="bg-blue-50"
          />
          <PrincipleCard 
            title="Physical Accessibility"
            description="Support seated use, minimize head movement, and accommodate limited dexterity or vision"
            bgColor="bg-green-50"
          />
          <PrincipleCard 
            title="Emotional Safety"
            description="Avoid content that may evoke distressing memories; incorporate familiarity and positivity"
            bgColor="bg-purple-50"
          />
          <PrincipleCard 
            title="User Empowerment"
            description="Avoid stereotypes, build confidence, and allow self-paced exploration"
            bgColor="bg-orange-50"
          />
          <PrincipleCard 
            title="Personalization"
            description="Let users or caregivers customize scenes, music, and themes to enhance relevance"
            bgColor="bg-teal-50"
          />
        </div>

        {/* Risks & Mitigation Strategies */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Risks & Mitigation Strategies</h2>
        </div>
        
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed mb-8">
            Designing VR experiences for elderly users with dementia required careful consideration of potential risks and proactive mitigation strategies:
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h4 className="font-bold text-red-600 mb-3">Potential Risks</h4>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>• <strong>Nausea:</strong> Motion sickness from VR experience</li>
              <li>• <strong>Falls or disorientation:</strong> Physical safety concerns</li>
              <li>• <strong>Over-immersion:</strong> Difficulty distinguishing reality</li>
              <li>• <strong>Emotional distress:</strong> Triggering negative memories</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h4 className="font-bold text-green-600 mb-3">Mitigation Strategies</h4>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>• <strong>Gradual introduction:</strong> User education and short sessions</li>
              <li>• <strong>Seated experiences:</strong> Safe play spaces and supervision</li>
              <li>• <strong>Reality anchors:</strong> Regular check-ins and time limits</li>
              <li>• <strong>Content curation:</strong> Caregiver control over experiences</li>
            </ul>
          </div>
        </div>

        {/* Outcome & Reflection */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Outcome & Reflection</h2>
        </div>
        
        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-gray-700 leading-relaxed mb-8">
            Our final concept envisioned a VR experience where users could revisit places from their past, explore familiar environments, and interact with personal content in a calm, accessible space. While we didn't fully prototype the VR application, our research outputs and interaction models laid the groundwork for future development.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <OutcomeCard 
            icon="🔍" 
            title="Inclusive Research Leadership" 
            description="Strengthened my ability to lead empathy-driven research with vulnerable populations"
            bgColor="bg-blue-50"
          />
          <OutcomeCard 
            icon="🏥" 
            title="Healthcare Design Expertise" 
            description="Developed new skills in accessibility advocacy and designing for cognitive variance"
            bgColor="bg-green-50"
          />
          <OutcomeCard 
            icon="🤝" 
            title="Cross-functional Collaboration" 
            description="Enhanced ability to work with non-design disciplines including psychology and healthcare"
            bgColor="bg-purple-50"
          />
          <OutcomeCard 
            icon="⚖️" 
            title="Risk Management Planning" 
            description="Gained experience in identifying and mitigating design risks in sensitive contexts"
            bgColor="bg-orange-50"
          />
        </div>

        <div className="bg-green-50 rounded-lg p-8 mb-16">
          <p className="text-gray-700 leading-relaxed">
            This project strengthened my ability to lead inclusive, empathy-driven research and work cross-functionally with non-design disciplines. The experience I gained in accessibility advocacy, risk mitigation planning, and designing for cognitive variance continues to inform my approach to health tech and aging-focused projects.
          </p>
        </div>

        {/* Next Project CTA */}
        <div className="text-right">
          <a
            href="/works/schoolworkspro"
            className="inline-flex items-center bg-gray-900 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-gray-800 transition-colors duration-200"
          >
            Check SchoolworksPro Case Study Next
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}