import Card from "@/app/ui/components/card";
import { mulish } from "@/app/ui/font";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className={`${mulish.className} md:px-12 px-5`}>
      <div className="text-center mb-12">
        <p className="text-4xl font-thin mb-4">Creating A Design System for</p>
        <p className="text-4xl font-thin mb-4">
          <span className="text-[#16649e] font-bold">Schoolworkspro</span> Admin
        </p>
        <p className="text-4xl font-thin ">Dashboard</p>
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
          Dashboard for Schoolworkspro, aiming to reimagine the platform's
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
            Typography: There was a lack of a cohesive type system, with four
            different fonts used across the site and over 20 different type
            scales and styles. This inconsistency disrupted the visual
            hierarchy, making it difficult for users to scan and understand
            content efficiently.
          </li>
          <li>
            Colors: There was no established color standard or palette, leading
            to inconsistent color usage across various components. This created
            visual confusion and detracted from a cohesive user interface.
          </li>
          <li>
            Buttons, Tags, and Tabs: These elements shared similar styles, which
            made it difficult for users to differentiate between interactive
            elements and navigate the platform effectively. The lack of visual
            distinction led to confusion about which elements were clickable or
            merely informational.
          </li>
          <li>
            Tables: Table layouts suffered from poor legibility, particularly
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
          with Schoolworkspro's brand identity and logo. In addition to these, I
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
            Display: Large headings used for major sections or landing pages.
          </li>
          <li>
            Headings: Applied across H1 to H6 for structured content, ensuring
            clear hierarchy.
          </li>
          <li>
            Body: Text sizes that ranged from XXXL to Tiny, catering to
            paragraphs and smaller text elements across different screen sizes.
          </li>
          <li>
            Buttons & Labels: Designed specifically for action-driven elements
            and form labels.
          </li>
        </ul>
        <p>
          Each type category was assigned three different styles to maintain
          flexibility and accommodate different content needs:
        </p>
        <ul className="list-inside list-disc">
          <li>Bold: Used for high emphasis and important actions.</li>
          <li>
            Medium: Applied for medium emphasis, typically in subheadings or
            less prominent buttons.
          </li>
          <li>Regular: Utilized for body text and standard content.</li>
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
            Sizes: Buttons are available in three sizes—small, medium, and
            large—to suit various use cases, from minimal action buttons to more
            prominent calls-to-action.
          </li>
          <li>
            Icon Support: Buttons are versatile, supporting both right and left
            icons for better affordance, with icons clearly indicating the
            function or destination of the action.
          </li>
          <li>
            Primary & Secondary Actions: Primary buttons are the most prominent,
            driving the main action on the page. They come with clear
            color-coded states: normal, hover, and disabled. Secondary buttons
            are more subtle but still maintain enough contrast to be
            distinguishable.
          </li>
          <li>
            Color Variations: Buttons come in different color options: primary,
            secondary, gray, and pink. Each button has normal, hover, and
            disabled states to guide users visually through their interactions.
          </li>
          <li>
            Tertiary Buttons: For less prominent actions, tertiary buttons offer
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
            Input Fields: Input fields support various states: normal, hover,
            clicked, typing, filled, success, and error. Clear visual feedback
            is provided, like changing the border color (blue for active, red
            for error, and green for success).
          </li>
          <li>
            Labels: Consistent labels guide users, placed both inside and
            outside fields, depending on the form requirement. They also support
            icons for added context, such as social media, price, or date
            fields.
          </li>
          <li>
            Validation: Error and success states are distinct, using color cues
            like red for errors and green for success. Error messages are
            accompanied by labels to ensure the user understands the issue.
          </li>
          <li>
            Search Functionality: The search bar offers a dropdown with user
            suggestions when typing, making it easier to find the correct user
            or data entry. This improves the user experience by minimizing
            typing errors.
          </li>
          <li>
            Dropdown & Date Selector: Dropdowns are designed with hover states
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
            Condensed Structure: The updated sidebar features a more compact and
            organized layout, reducing visual clutter and helping users quickly
            find sections without scrolling extensively.
          </li>
          <li>
            Collapsible Sections: Categories within the sidebar are grouped into
            collapsible sections, making the design cleaner while still offering
            access to all necessary items.
          </li>
          <li>
            Sections Moved to Main Page Header: Instead of grouping all the
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
          It's important to note that, as of now, the web implementation is
          still in progress. Depending on technical feasibility, some design
          elements may be subject to further refinement during development.
          However, the foundational design system we’ve established will serve
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
