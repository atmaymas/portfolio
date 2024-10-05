import Image from "next/image";
import Link from "next/link";

export default function Goals() {
  return (
    <div>
      <div className="flex justify-center mb-16">
        <div className="shadow-2xl bg-white rounded-lg px-8 py-6 mb-2">
          <p className="font-semibold">Goals &amp; Features</p>
        </div>
      </div>
      <div>
        <div className="flex flex-col md:flex-row align-middle items-center space-x-0 md:space-x-7 justify-between md:mb-4">
          <div className="md:w-1/2">
            <div className="shadow-2xl bg-white rounded-lg px-8 py-6 mb-2">
              1. Ingest various file types seamlessly.
            </div>
            <div className="shadow-2xl bg-white rounded-lg px-8 py-6 mb-2">
              2. View files in a read-only format to prevent accidental
              alterations.
            </div>
            <div className="shadow-2xl bg-white rounded-lg px-8 py-6 mb-2">
              3. Facilitate easy redaction of sensitive information.
            </div>
          </div>
          <div className="md:w-1/3 hidden md:flex flex-col">
            <Image
              src="/img/works/caseconnect/feature1.png"
              width={450}
              height={197}
              alt="feature1"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row align-middle items-center space-x-0 md:space-x-7 justify-between md:mb-4">
          <div className="md:w-1/3 hidden md:flex flex-col">
            <Image
              src="/img/works/caseconnect/feature2.png"
              width={450}
              height={197}
              alt="feature2"
            />
          </div>
          <div className="md:w-1/2">
            <div className="shadow-2xl bg-white rounded-lg px-8 py-6 mb-2">
              4. Organize and label documents for quick access and organization.
            </div>
            <div className="shadow-2xl bg-white rounded-lg px-8 py-6 mb-2">
              5. Easy search for specific documents using plain language.
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row align-middle items-center space-x-0 md:space-x-7 justify-between md:mb-4">
          <div className="md:w-1/2">
            <div className="shadow-2xl bg-white rounded-lg px-8 py-6 mb-2">
              6. Enable syncing with other accounts for push notifications.
            </div>
            <div className="shadow-2xl bg-white rounded-lg px-8 py-6 mb-2">
              7. Associate calendar events with relevant materials and contacts.
            </div>
            <div className="shadow-2xl bg-white rounded-lg px-8 py-6 mb-2">
              8. Easy navigation across different platform based on user
              preferences.
            </div>
          </div>
          <div className="md:w-1/2 hidden md:flex flex-col">
            <Image
              src="/img/works/caseconnect/feature3.png"
              width={650}
              height={600}
              alt="feature1"
            />
          </div>
        </div>
      </div>
      <div className="mb-16">
        <div className="p-2 shadow-2xl bg-white">
          <Image
            src={"/img/works/caseconnect/screens.png"}
            alt="screens"
            width={1440}
            height={720}
          />
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
  );
}
