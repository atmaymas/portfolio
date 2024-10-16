import Card from "@/app/ui/components/card";
import { mulish } from "@/app/ui/font";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className={`${mulish.className}`}>
      <div className="text-center mb-12">
        <p className="text-4xl mb-4 font-thin">
          Improving Virtual Reality Experience
        </p>
        <p className="text-4xl font-thin">for Elderly with Dementia</p>
      </div>
      <div className="mb-24">
        <div className="md:flex justify-center md:space-x-4">
          <Card subtitle="ROLE" title="UXR" content="" />
          <Card
            subtitle="PROJECT TYPE"
            title="University Team Project"
            content=""
          />
          <Card subtitle="PROJECT TIME" title="3 Months" content="" />
          <Card subtitle="SECTOR" title="VR" content="" />
        </div>
      </div>
      <div>
        <div className="md:w-5/12 mx-auto">
          <div className="mb-24">
            <div className="mb-8">
              <Card subtitle="" title="Background / Problem" content="" />
            </div>
            <p className="px-5 mb-5">
              The aim of this study is to improve the virtual reality (VR)
              experience for elderly individuals with dementia. The project
              focuses on addressing the unique needs and challenges faced by
              this target audience, with the goal of enhancing their cognitive
              well-being and quality of life.
            </p>
            <p className="px-5">
              Through contextual inquiry, surveys, and interviews, we identified
              that elderly individuals with dementia face limitations in
              communication and reduced opportunities for social interaction.
              Reminiscence therapy, which involves recalling past experiences,
              has been proven effective in reducing anxiety and improving mood.
              However, existing reminiscence therapy methods lack the immersive
              and interactive elements that VR can provide.
            </p>
          </div>
          <div className="mb-24">
            <div className="mb-8">
              <Card subtitle="" title="Process" content="" />
            </div>
            <p className="px-5 mb-5">
              To address the problem space, we conducted user research involving
              older adults, including those with early-stage dementia. We
              utilized a mixed-methods approach, including contextual analysis,
              surveys, interviews, and literature reviews. The research aimed to
              gain insights into the needs, pain points, and preferences of the
              target audience, as well as understand the potential benefits and
              risks associated with VR technology for dementia patients.
            </p>
          </div>
          <div className="mb-24">
            <div className="mb-8">
              <Card subtitle="" title="Key Insights" content="" />
            </div>
            <div className="px-5">
              <div className="mb-4">
                <Card
                  subtitle="INSIGHT #1"
                  title="Social Isolation and Loneliness"
                  content="User interviews revealed that social isolation and feelings of loneliness were significant concerns among elderly individuals with dementia. Many participants expressed a strong desire for social connection and meaningful engagement to enhance their overall well-being."
                />
              </div>
              <div className="mb-4">
                <Card
                  subtitle="INSIGHT #2"
                  title="Cognitive Decline and Memory Loss"
                  content="The impact of cognitive decline and memory loss on daily functioning was evident during observations. Users often struggled with complex interfaces and had difficulty remembering tasks or navigating through applications. Simplifying interactions and providing memory support emerged as important design considerations."
                />
              </div>
              <div className="mb-4">
                <Card
                  subtitle="INSIGHT #3"
                  title="Potential of Virtual Reality"
                  content="Literature reviews highlighted the potential of virtual reality in reminiscence therapy and cognitive stimulation for individuals with dementia. Recreating familiar environments and triggering personal memories through virtual experiences showed promise in improving cognitive abilities and quality of life."
                />
              </div>
            </div>
          </div>
          <div className="mb-24">
            <div className="mb-8">
              <Card subtitle="" title="Design Opportunities" content="" />
            </div>
            <div className="px-5">
              <div className="mb-4">
                <Card
                  subtitle="OPPORTUNITY #1"
                  title="Enhancing Social Connection:"
                  content="One of the key design opportunities is to develop features that promote social interaction and connection among elderly individuals with dementia. The solution could include creating virtual communities, multiplayer games, or chat functionalities that allow users to connect with their peers or caregivers. It is crucial to design intuitive and user-friendly interfaces that facilitate communication and engagement, taking into account the cognitive and physical limitations of the target audience. Integrating support systems, such as prompts or reminders, can encourage regular social participation and reduce feelings of isolation."
                />
              </div>
              <div className="mb-4">
                <Card
                  subtitle="OPPORTUNITY #2"
                  title="Memory Support and Cognitive Stimulation:"
                  content="Another significant design opportunity lies in providing memory support and cognitive stimulation for individuals with dementia. The solution could involve leveraging virtual reality to offer reminiscence therapy, where users can engage with personalised memories and familiar environments. Techniques like spaced repetition and cognitive exercises can be implemented to improve memory retention and cognitive functioning. Creating intuitive navigation and interaction patterns that accommodate cognitive impairments is essential to ensure ease of use and minimise frustration."
                />
              </div>
              <div className="mb-4">
                <Card
                  subtitle="OPPORTUNITY #3"
                  title="Personalised and Adaptive Experiences:"
                  content="Designing personalised experiences that adapt to the individual needs and preferences of users with dementia is crucial. This can involve offering customisation options, adjustable difficulty levels, and tailored content to provide a more engaging and meaningful experience. Leveraging machine learning and AI algorithms to analyse user data and adapt the interface, content, and interactions based on individual cognitive and emotional profiles can enhance personalisation. Incorporating multimodal feedback, including visual, auditory, and haptic cues, can further enhance user engagement and comprehension."
                />
              </div>
              <div className="mb-4">
                <Card
                  subtitle="OPPORTUNITY #4"
                  title="Accessible Design for Physical Impairments:"
                  content="Ensuring accessibility for individuals with physical impairments is another important design opportunity. The solution should accommodate limitations commonly experienced by elderly individuals, such as limited mobility, visual impairment, and auditory impairment. Providing alternative interaction modes, such as gesture-based controllers, voice commands, or simplified button controls, can cater to individuals with reduced dexterity or hand-eye coordination. It is crucial to consider proper colour contrast, font size, and provide text alternatives (voice and symbols) for users with visual impairments, making the interface more inclusive and accessible."
                />
              </div>
            </div>
          </div>
          <div className="mb-24">
            <div className="mb-8">
              <Card subtitle="" title="Design Principles" content="" />
            </div>
            <p className="px-5 mb-8">
              To guide the development of the virtual reality solution for
              elderly individuals with dementia, a set of design principles was
              established based on the identified needs and insights from the
              research.
            </p>
            <div className="px-5">
              <div className="mb-4">
                <Card
                  subtitle="PRINCIPLE #1"
                  title="Cognitive Consideration:"
                  content="Given the impact of cognitive decline and memory loss, design interactions that accommodate the users' cognitive abilities. Keep tasks and navigation simple, reducing the number of features to minimise cognitive overload. Provide clear instructions and prompts to assist users in staying focused and remembering their tasks and locations within the application."
                />
              </div>
              <div className="mb-4">
                <Card
                  subtitle="PRINCIPLE #2"
                  title="Physical Consideration:"
                  content="Recognising the physical challenges commonly experienced by the elderly, design interactions that address balance issues and musculoskeletal fatigue. Reduce the weight of the head-mounted display (HMD) to ensure comfort and safety during prolonged use. Explore gesture-based controllers and a seated virtual reality experience to accommodate users with balance issues. Provide text alternatives, voice options, and symbols to cater to visual and auditory impairments."
                />
              </div>
              <div className="mb-4">
                <Card
                  subtitle="PRINCIPLE #3"
                  title="User-Focused Experience:"
                  content="Place the elderly users at the center of the design process, considering their unique needs, preferences, and limitations. Avoid age-discriminatory stereotypes and prejudices while ensuring inclusivity and accessibility. Empower users to adapt to and navigate the challenges they face by providing intuitive and user-friendly interactions."
                />
              </div>
              <div className="mb-4">
                <Card
                  subtitle="PRINCIPLE #4"
                  title="Emotional Well-being:"
                  content="Recognise the emotional impact of the virtual reality experience on individuals with dementia. Design experiences that promote positive emotions and avoid triggering negative or distressing memories. Use familiar and comforting elements to create a sense of safety and security within the virtual environment."
                />
              </div>
              <div className="mb-4">
                <Card
                  subtitle="PRINCIPLE #4"
                  title="Personalisation and Meaningfulness:"
                  content="Incorporate personalization features to make the experience more meaningful and relevant to each user. Allow customization of environments, music, or themes to evoke personal memories and create a sense of familiarity. This personal touch can enhance engagement and overall satisfaction with the virtual reality application."
                />
              </div>
            </div>
          </div>
          <div className="mb-24">
            <div className="mb-8">
              <Card subtitle="" title="Risks" content="" />
            </div>
            <p className="px-5 mb-8">
              Several risks associated with using VR for elderly individuals
              with dementia were identified. To mitigate these risks, the
              following strategies were proposed:
            </p>
            <div className="px-5">
              <ol className="list-decimal list-outside space-y-2">
                <li>
                  Nausea: Educate users, gradually expose them to VR, and
                  provide breaks during sessions.
                </li>
                <li>
                  Falls: Implement safety measures such as a seated experience,
                  stability support, and clearly defined play areas.
                </li>
                <li>
                  Over-immersion: Design VR experiences that strike a balance
                  between immersion and maintaining a connection with reality.
                  Provide guidance and support from caregivers or therapists.
                </li>
                <li>
                  Emotional triggers: Carefully curate content to minimise the
                  risk of bringing back difficult or emotional memories. Involve
                  family members or caregivers in the process for better
                  understanding and support.
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="px-8">
          <div className="mb-8">
            <Image
              src="/img/works/vr/vr1.png"
              alt="vr1"
              width="1500"
              height="827"
            />
          </div>
          <div className="mb-8">
            <Image
              src="/img/works/vr/vr2.png"
              alt="vr2"
              width="1500"
              height="827"
            />
          </div>
        </div>
        <div className="md:w-5/12 mx-auto">
          <div className="mb-24">
            <p className="px-5">
              Building upon the design opportunities and principles, we
              envisioned a VR system that allows users to immerse themselves in
              their past photographs and experiences. Users would have the
              ability to explore familiar locations, engage with personalized
              content, and interact with their past memories, all within a safe
              and accessible VR environment.
            </p>
          </div>
          <div className="mb-24">
            <div className="mb-8">
              <Card subtitle="" title="Conclusion" content="" />
            </div>
            <p className=" px-5 mb-8">
              This study highlights the importance of addressing the unique
              needs and challenges of elderly individuals with dementia when
              designing VR experiences. The research methodology, including
              discovery and key insights, helped to identify design
              opportunities and principles that enhance the VR experience for
              this target audience. The ideation and conceptualisation phases
              resulted in a tailored VR solution that promotes cognitive
              stimulation and engagement. However, the risks associated with VR
              use for elderly individuals with dementia must be carefully
              managed to ensure a safe and positive experience.
            </p>
            <p className="px-5">
              By addressing the identified challenges and risks, the proposed VR
              solution has the potential to significantly improve the well-being
              and quality of life for elderly individuals with dementia,
              offering a personalised and engaging experience that stimulates
              cognitive function and fosters positive emotional well-being.
            </p>
          </div>
        </div>
        <div className="block md:flex justify-end">
          <Link
            href={"/works/schoolworkspro"}
            className={`bg-black text-white px-8 py-3 rounded-lg shadow-2xl`}
          >
            Check Schoolworkspro Design System Case Study Next
          </Link>
        </div>
      </div>
    </div>
  );
}
