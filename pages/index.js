export default function Home() {
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-center mt-20 roboto-font text-4xl lg:text-7xl text-stone-300 lg:pl-10 opacity-60">
          Urban Footnotes
        </h1>
      </div>

      <div className="pt-12 lg:m-20">
        <center>
          <div className="roboto-font text-2xl pt-12 lg:pt-2 lg:text-4xl text-stone-300 opacity-60 tracking-wide">
            Mission Statement
          </div>
        </center>
        <div className="pt-4 roboto-font italic text-1xl text-stone-300 mx-4 lg:mx-32">
          <p>
            In service of residents who want to use personal mechanized
            transportation as little as possible, we strive to provide the most
            helpful assessment of how well all desired services are provided
            within easy walking distance of any given address.
          </p>
        </div>
      </div>
    </div>
  );
}
