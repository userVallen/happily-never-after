import Image from 'next/image';

export default function Hero() {
  return (
    <div className="flex flex-col w-full text-start px-8 py-5 items-center gap-20">
      <div className="flex relative w-[clamp(320px,80vw,680px)] h-auto aspect-[1/1] justify-center items-center">
        <Image
          src="/images/envelope.webp"
          alt="Invitation letter"
          fill
          className="object-contain"
          priority
        />

        <div className="absolute top-[11%] flex flex-col justify-between w-[80%] h-[77%] z-10">
          <div className="flex flex-col justify-between h-[55%]">
            <div className="flex flex-col pt-[7%] px-[7%]">
              <p className="text-fluid-md">a Thesis Film,</p>
              <p className="text-fluid-lg font-heading self-center">
                Happily Never After
              </p>
              <p className="text-fluid-md self-end">by. Claire Valen</p>
            </div>

            <p className="text-fluid-md font-heading text-center py-2">
              ft. Jane & Noah
            </p>
          </div>

          <div className="grid grid-cols-2 h-[28%] gap-x-[48%] gap-y-[9%] text-center">
            <div className="text-start font-thin">
              <p className="text-fluid-md font-heading leading-none underline">
                Genre
              </p>
              <p className="text-fluid-sm">Drama/Romance</p>
            </div>

            <div className="text-start font-thin">
              <p className="text-fluid-md font-heading leading-none underline">
                Running Time
              </p>
              <p className="text-fluid-sm">25 mins </p>
            </div>

            <div className="col-span-2">
              <p className="text-fluid-md font-heading leading-none underline">
                Language
              </p>
              <p className="text-fluid-sm">English, Korean, Indonesian</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
