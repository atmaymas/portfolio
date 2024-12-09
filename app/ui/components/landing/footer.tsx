import { mulish } from "../../font";

export default function Footer() {
  return (
    <div className="mx-auto p-8 text-center beigeish-bg rounded-3xl mt-16"> {/* Added mt-12 for margin above */}
      <p className="text-4xl text-[#16649e] font-semibold mb-6">
        Thanks for Stopping By!
      </p>
      <p className={`${mulish.className}`}>&copy; Samyamta Sen 2024</p>
    </div>
  );
}
