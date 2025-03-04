import { img_woman_trip } from "../../../../utils/assets";
import { FaqItems } from "./faq_items";

export const Faq = () => {
  return (
    <div className="grid grid-cols-1 px-4 md:grid-cols-2 py-5 md:py-10  md:px-20">
      <div className="">
        <img
          src={img_woman_trip}
          alt=""
          className="h-[40vh] -mt-28 md:h-[60vh] m-auto"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <h2 className="text-2xl font-bold">Questions Fréquentes</h2>
        <p>
          Si la question ne figure pas dans notre section FAQ, n'hésitez pas à
          nous contacter personnellement. Nous résoudrons vos doutes respectifs.
        </p>
        <div className="h-[1vh]"></div>
        <div>

        </div>
        <div>
          <FaqItems />
        </div>
      </div>
    </div>
  );
};
