import { useEffect, useState } from "react";
import { Modal } from "@mantine/core";
import { ApplicationWidget } from "./application/application_widget";
import { ApplicationApi } from "../../../core/api/application.api";
import { AppSvg } from "../utils/app_svg";
import { SvgAssets } from "../../../utils/svg_assets";
import { AppBtnOutline } from "../utils/app_button";
import { useDisclosure } from "@mantine/hooks";
const items = [
  { label: "Informations sur le passeport", key: 1 },
  { label: "Selfie ou Photo", key: 2 },
  { label: "Informations du contact", key: 3 },
  { label: "Informations sur le voyage", key: 4 },
  { label: "Demande Envoyer", key: 5 },
];
export const SendRequestButton = () => {
  const [opened, { open, close }] = useDisclosure();

  const [label, setLabel] = useState(0);
  const { data: pending } = ApplicationApi.usePendingQuery();

  useEffect(() => {
    if (pending?.data) {
      console.log(pending.data);
      if (pending.data.passport) setLabel(3);
      if (pending.data.email) setLabel(4);
      if (pending.data.roadTripInfo) setLabel(5);
    }
  }, [pending]);
  return (
    <>
      <div className=" md:hidden">
        <AppBtnOutline
          size="sm"
          onClick={open}
          type="button"
          className=" onblack  "
        >
          Envoyer une demande
        </AppBtnOutline>
      </div>
      <div className="hidden md:block">
        <AppBtnOutline
          onClick={open}
          type="button"
          size="lg"
          className=" onblack  "
        >
          Envoyer une demande
        </AppBtnOutline>
      </div>
      <Modal
        size={"100%"}
        styles={{
          content: {
            ...(label > 0 ? { height: "100%" } : {}),
            position: "relative",
            p: 0,
            m: 0,
          },
          body: {
            p: 0,
            m: 0,
            ...(label > 0 ? { height: "calc(100% - 5rem)" } : {}),
            overflowY: "scroll",
            position: "relative",
          },
        }}
        classNames={{
          root: "overflow-hidden",
          content: "overflow-hidden p-0",
          body: "overflow-hidden",
          header: "border-b border-slate-400/60",
        }}
        title={
          <h2 className="md:text-2xl text-lg font-bold">
            {items.find((e) => e.key == label)?.label ??
              "Demarer votre demande"}
          </h2>
        }
        opened={opened}
        onClose={close}
      >
        {label == 0 ? (
          <div className="grid grid-cols-1 pt-2  md:grid-cols-2  gap-2 md:gap-5 ">
            <div className="text-center  md:block hidden bg-linear-60   md:text-left md:col-span-2">
              <p className="">
                Tous les visiteurs étrangers, à l'exception des citoyens des
                États membres de la CEDEAO, souhaitant se rendre en République
                du Sénégal, doivent soumettre les formulaires d'immigration
                conformément à la réglementation en vigueur. Le non-respect de
                cette exigence peut entraîner un refus d'embarquement et/ou une
                expulsion à l'arrivée.
              </p>
            </div>
            <div
              onClick={() => {
                setLabel(1);
              }}
              className="from-green-700  text-white bg-linear-60 to-green-500  outline p-3 text-center rounded-md  flex flex-col justify-center items-center"
            >
              <AppSvg {...SvgAssets.visaType} className="size-20 fill-white" />
              <h2 className="text-xl font-bold">Visiteur Tourisme</h2>
              <p className="text-white/80">
                Choisissez cette option si vous voyagez au Sénégal pour le
                tourisme, les affaires ou toute autre raison afin de demander
                votre autorisation de voyage.
              </p>
            </div>
            <div
              onClick={() => {}}
              className="from-yellow-700 text-white bg-linear-60 to-yellow-500 outline rounded-md p-2 text-center flex flex-col items-center justify-center"
            >
              <div className="flex gap-2">
                <AppSvg
                  {...SvgAssets.visaType}
                  className="size-20 fill-white"
                />
              </div>

              <h2 className="text-xl font-bold">
                Titulaires d’un passeport sénégalais ou d’un État membre de la
                CEDEAO
              </h2>
              <p className="text-white/80">
                Choisissez cette option si vous êtes citoyen du Sénégal ou d'un
                État membre de la CEDEAO.
              </p>
            </div>
          </div>
        ) : (
          <>
            <ApplicationWidget
              onClose={close}
              setLabel={setLabel}
              current={label}
              items={items}
              form={{}}
            />
          </>
        )}
      </Modal>
    </>
  );
};
