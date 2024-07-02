import PageHeaderLogo from "@/components/PageHeaderLogo";
import PageTitle from "@/components/PageTitle";

export default function Order() {
  return (
    <div>
      <PageHeaderLogo />
      <div className="lg:m-20">
        <center>
          <PageTitle
            topTitle="Ordering Our Product"
            textColor="text-title-text-order"
            shadowColor={`title-shadow-ordering-our-product`}
          />
        </center>
      </div>
      <div className="roboto-font mx-4 mt-20 text-xl text-stone-300 lg:mx-32">
        <p className="pb-4">
          You can buy a test version of our product and checkout securely at the
          link below:
        </p>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>

        <div className="flex items-center justify-center">
          <button
            onClick={() =>
              window.open(
                "https://buy.stripe.com/test_14k4gt9Kn4ZkcG49AA",
                "_blank",
                "noopener,noreferrer",
              )
            }
            className="mx-4 mt-10 rounded-xl bg-gray-200 px-4 py-2 text-2xl text-slate-900"
          >
            Order Now
          </button>
          {/* <stripe-buy-button
            buy-button-id="buy_btn_1PWSnGGN52GuXWVWQzelGuJO"
            publishable-key="pk_test_51PWM5ZGN52GuXWVWTnkncuyRJtaxnWSX4w1zdn16pDyuS3biGYEpjz1YjkboYGle8e9gzX9vXg2HB2YjGIEFaKAq00Ss702D0z"
          ></stripe-buy-button> */}
        </div>
      </div>
    </div>
  );
}
