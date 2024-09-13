import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { plans } from "@/lib/constants";

const Pricing = ()=> {
  return (
    <section id="pricing" className="py-12 lg:py-24 mx-auto px-6">
      <h2 className="text-xl font-bold text-center uppercase mb-12 text-purple-600">
        Pricing
      </h2>
      <div className="flex flex-col lg:flex-row justify-center lg:items-center gap-16">
        {plans.map(({ id, name, price, description, items, paymentLink }) => (
          <div
            key={id}
            className={`lg:w-[25%] w-[60%] mx-auto lg:mx-0 p-8 border rounded-2xl ${
              id === "pro" ? "border-violet-500" : "border-gray-300"
            }`}
          >
            <h3 className="text-lg font-bold capitalize">{name}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <div className="text-4xl font-extrabold">${price}</div>
            <p className="text-sm text-gray-500">/month</p>
            <ul className="my-4 space-y-2">
              {items.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check size={18} />
                  {item}
                </li>
              ))}
            </ul>
            <Link href={paymentLink} className="flex items-center gap-2 text-violet-600 font-semibold">
              Get {name} <ArrowRight size={18} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing
