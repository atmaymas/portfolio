import Image from "next/image";
import Link from "next/link";

export default function Goals() {
  return (
    <div className="p-12">
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

      <div className="block md:flex justify-end">
        <Link
          href={"/works/vr"}
          className={`bg-black text-white px-8 py-3 rounded-lg shadow-2xl`}
        >
          Check Virtual Reality Experience Case Study Next
        </Link>
      </div>
    </div>
  );
}