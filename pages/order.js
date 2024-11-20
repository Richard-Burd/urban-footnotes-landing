import { useEffect } from "react";
import PageHeaderLogo from "@/components/PageHeaderLogo";
import PageTitle from "@/components/PageTitle";
import Link from "next/link";

export default function Order() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.stripe.com/v3/pricing-table.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);


  return (
    <div>
      <PageHeaderLogo />
      <div className="mt-8">
      <stripe-pricing-table
            pricing-table-id="prctbl_1QMot4GN52GuXWVWoWc0oKj7"
            publishable-key="pk_live_51PWM5ZGN52GuXWVWNN9rPCsYn8nK2OK1xZl03U6AzK38Hh5I74b7o5GpPHMj9qyRrPgoVwLABMjC4ZgjrJqr8tXc004r8wQtLl"
          ></stripe-pricing-table>
      </div>
      <div className="roboto-font mx-4 mt-20 text-xl text-stone-300 lg:mx-32 opacity-0">
        
        <p className="pb-4">
        After payment you will be directed to a new page which will include a place to send us your logo. Alternatively, you may also send us an email with your desired logo attached.
        </p>
      
      </div>
    </div>
  );
}
