import { FC, useState } from "react";
import { AppDateInput, AppTextInput } from "../../utils/text_input";
import { ApplicationPageProps } from "./application_page_props";
import { ApplicationFooter } from "./application_footer";
import { handlePreviewV2 } from "../../../../core/utils/img_handler";
import { useForm } from "@mantine/form";
import { getFormInputAttr } from "../../utils/get_form_input_attribute";
import { PassportDto } from "../../../../core/model/application";

export const PassortForm: FC<ApplicationPageProps> = (props) => {
  const form = useForm<Partial<PassportDto>>({
    mode: "controlled",
    initialValues: {
      displayname: "",
      reference: "",
      validity: undefined,
      birthdate: undefined,
    },
  });
  const passportImageHandler = handlePreviewV2({});
  const [isLoading, setIsLoading] = useState(false);
  const _onsubmit = form.onSubmit((data) => {
    if (passportImageHandler.file && isLoading === false) {
      console.log(data);
      const formData = new FormData();
      formData.append("file", passportImageHandler.file);
      Object.entries(data).forEach(([key, value]) => {
        if (value instanceof Date) {
          const date = value.toISOString();
          formData.append(key, date);
          console.log(date);
        } else formData.append(key, value);
      });
      setIsLoading(true);
      fetch("/v1/application/create", {
        method: "POST",
        body: formData,
      })
        .then((val) => val.json())
        .then((val) => {
          console.log(val);
          props.next();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });

  return (
    <form
      onSubmit={_onsubmit}
      className="relative min-h-[80vh]  flex  flex-col"
    >
      <div className="h-full  w-full gap-10 flex flex-col md:min-w-2xl">
        <label
          htmlFor="passportImage"
          className="min-h-[200px] w-full p-2 text-center  bg-green-300/20 rounded-md border  flex flex-col items-center justify-center border-green-500 border-dashed"
        >
          <input
            type="file"
            onChange={passportImageHandler.handlerFile}
            name="passportImage"
            id="passportImage"
            hidden
          />
          {JSON.stringify(form.errors)}
          {passportImageHandler.preview && passportImageHandler.file?.name}
          <span className="md:text-2xl  text-xl">
            {passportImageHandler.preview ? (
              <img
                alt=""
                className="h-64 rounded-md w-auto"
                src={passportImageHandler.preview}
              />
            ) : (
              <>
                {" "}
                Glissez les images ici ou cliquez pour{" "}
                <span className="text-green-500 font-bold">
                  sélectionner des fichiers
                </span>
              </>
            )}
          </span>
        </label>
        <div className=" grid grid-cols-1 gap-4 md:grid-cols-2">
          <AppTextInput
            {...getFormInputAttr({ form, path: "displayname" })}
            label="Nom Complet"
          />
          <AppTextInput
            {...getFormInputAttr({ form, path: "reference" })}
            label="Passport Numero"
          />
          <AppDateInput
            {...getFormInputAttr({ form, path: "birthdate" })}
            label="Date De Naissance"
          />
          <AppDateInput
            {...getFormInputAttr({ form, path: "validity" })}
            label="Date De Validite"
          />
        </div>
      </div>
      <ApplicationFooter onDelete={props.close} />
    </form>
  );
};
