import PageHeaderLogo from "@/components/PageHeaderLogo";
import PageTitle from "@/components/PageTitle";
import ContactUsForm from "@/components/ContactUsForm"; // 3rd Deployment Try

import Link from "next/link";

export default function Order() {
  return (
    <div>
      <PageHeaderLogo />
      <div className="lg:m-20">
        <center>
          <PageTitle
            topTitle="Ordering Our Product"
            textColor="text-title-text-ordering-our-product"
            shadowColor={`title-shadow-ordering-our-product`}
          />
        </center>
        <div className="roboto-font mx-4 text-xl text-stone-300 lg:mx-32">
          <p className="pb-4">
            If you are interested in ordering our product as an early adopter,
            please fill in the information below and we will get back to you
            within a timely manner.
          </p>
          <p className="pb-4">
            You can reach our to Richard directly at:{" "}
            <Link href="mailto: richard@urbancruiseship.org">
              richard@urbancruiseship.org
            </Link>{" "}
            to get more information on becoming an early adopter. Thank you for
            taking an interest in Urban Foot Notes!
          </p>
        </div>
      </div>
      <ContactUsForm />
      <div className="roboto-font mx-4 mt-20 text-xl text-stone-300 lg:mx-32">
        <p className="pb-4">
          You can buy a test version of our product and checkout securely at the
          link below:
        </p>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>

        <div className="flex items-center justify-center">
          <stripe-buy-button
            buy-button-id="buy_btn_1PWSnGGN52GuXWVWQzelGuJO"
            publishable-key="pk_test_51PWM5ZGN52GuXWVWTnkncuyRJtaxnWSX4w1zdn16pDyuS3biGYEpjz1YjkboYGle8e9gzX9vXg2HB2YjGIEFaKAq00Ss702D0z"
          ></stripe-buy-button>
        </div>
      </div>
    </div>
  );
}
