export default function Addresses() {
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-center mt-20 roboto-font text-4xl lg:text-7xl text-stone-300 lg:pl-10 opacity-60">
          Urban Foot Notes
        </h1>
      </div>

      <div className="lg:m-20">
        <center>
          <div className="roboto-font text-2xl pt-12 lg:pt-2 lg:text-4xl text-stone-300 opacity-60 tracking-wide pb-4">
            Addresses
          </div>

          <div className="my-8">
            <img
              src={`${process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL}/title-page-1015-elvira.png`}
              alt="Urban Foot Notes Image"
              width={200}
              height={400}
              className="mx-auto"
            />
          </div>
        </center>

        <div className="roboto-font text-1xl text-stone-300 mx-4 lg:mx-32">
          <p>1015 Elvira St. test</p>
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}
