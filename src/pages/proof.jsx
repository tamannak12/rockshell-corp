import { Companies } from "../components/clients";

export function Proof() {
  return (
    <div >
      <h2 className="mt-12 flex font-bold text-xl justify-center">OUR CLIENTS</h2>
      <h3 className="text-center text-sm font-semibold text-gray-500">
      CLIENTS WHO PLACE THEIR TRUST IN OUR SERVICES
      </h3>
      <div className="mx-0 flex flex-col items-center justify-center">
        <Companies />
        <Companies/>
      </div>
    </div>
  );
}
