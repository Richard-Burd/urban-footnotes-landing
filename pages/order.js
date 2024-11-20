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
      <div className="lg:m-8">
        <PageHeaderLogo />
        <div className="pt-10">
          <div className="scale-100 transform">
            <stripe-pricing-table
              pricing-table-id="prctbl_1QMot4GN52GuXWVWoWc0oKj7"
              publishable-key="pk_live_51PWM5ZGN52GuXWVWNN9rPCsYn8nK2OK1xZl03U6AzK38Hh5I74b7o5GpPHMj9qyRrPgoVwLABMjC4ZgjrJqr8tXc004r8wQtLl"
            ></stripe-pricing-table>
          </div>
        </div>
      </div>
    </div>
  );
}
