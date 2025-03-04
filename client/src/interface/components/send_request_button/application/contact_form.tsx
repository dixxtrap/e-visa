import { AppTextInput } from "../../utils/text_input";
import { ApplicationFooter } from "./application_footer";
import { ApplicationPageProps } from "./application_page_props";
import { FC, useEffect } from "react";
import { isEmail, isNotEmpty, matches, useForm } from "@mantine/form";
import {
  ApplicationContactDto,
  ContactDto,
} from "../../../../core/model/application";
import { getFormInputAttr } from "../../utils/get_form_input_attribute";
import { PlaceAddressInput } from "../../utils/google_place_address";
import { useSetState } from "@mantine/hooks";
import { ApplicationApi } from "../../../../core/api/application.api";
const initValue = {
  displayname: "",
  phone: "",

  errorDisplayname: undefined,
  errorPhone: undefined,
};
export const ContactForm: FC<ApplicationPageProps> = (props) => {
  const [contactForm, setContactForm] = useSetState<
    ContactDto & {
      errorDisplayname: undefined | string;
      errorPhone: undefined | string;
    }
  >(initValue);
  const [addContact, addContactState] = ApplicationApi.useAddContactMutation();
  const form = useForm<ApplicationContactDto>({
    mode: "controlled",
    initialValues: {
      contacts: [],
    },
    validate: {
      address: isNotEmpty("should not be empty"),
      activity: isNotEmpty("should not be empty"),
      email: isEmail("email format seems like xxxx@gmail.com"),
      phone: matches(
        /^\+\d{1,4}\s?\d{6,15}$/,
        "phone format seems like +221 772371668"
      ),
    },
  });
  const _onsubmit = form.onSubmit((data) => {
    console.log(data);
    addContact(data);
  });
  const _removeContact = (phone: string) => {
    form.removeListItem(
      "contacts",
      form.getValues().contacts?.findIndex((e) => e.phone === phone)!
    );
  };
  const _addContact = () => {
    if (!contactFormValidate()) {
      form.insertListItem("contacts", {
        displayname: contactForm.displayname,
        phone: contactForm.phone,
      });
      setContactForm(initValue);
    }
  };
  const contactFormValidate = () => {
    let hasError;
    if (!contactForm.phone.match(/^\+\d{1,4}\s?\d{6,15}$/)) {
      setContactForm({
        errorPhone: "phone format seems like +221 772371668",
      });
      hasError = true;
    }
    if (!(contactForm.displayname.split(" ").length >= 2)) {
      hasError = true;
      setContactForm({
        errorDisplayname: "displayname format seems like 'Djiga Salane'",
      });
    }
    if (form.getValues().contacts?.find((e) => e.phone == contactForm.phone)) {
      hasError = true;
      setContactForm({
        errorPhone: "phone number already exist",
      });
    }
    return hasError === true;
  };
  useEffect(() => {
    if (addContactState.isSuccess == true) {
      props.next();
    }
  }, [addContactState.isSuccess]);
  return (
    <form onSubmit={_onsubmit} className="flex-col min-h-[80vh]   flex gap-5">
      <span className="text-2xl font-bold">Information Personnelles</span>
      <div className="grid gap-3 grid-cols-1  lg:grid-cols-2">
        <AppTextInput
          {...getFormInputAttr({ form, path: "phone" })}
          label={"Téléphone"}
        />
        <AppTextInput
          {...getFormInputAttr({ form, path: "email" })}
          label={"Email"}
        />
        <div>
          <PlaceAddressInput form={form} />
        </div>

        <AppTextInput
          className="pt-6"
          {...getFormInputAttr({ form, path: "activity" })}
          label={"Activité Proffessionelle"}
        />
      </div>
      <div className="flex flex-col  gap-4">
        <div className="p-1">
          <h2 className="text-2xl font-bold">
            Personnes à contacter en cas d'urgence
          </h2>
          <p>
            Merci d'indiquer le numéro d'au moins une personne à contacter en
            cas d'urgence.
          </p>
        </div>
        <div className="w-full flex flex-col  ">
          <div className="flex  bg-slate-100/60 rounded-md outline-slate-200 p-3 outline  items-end  flex-col w-full gap-3   ">
            <div className="flex w-full flex-col">
              {form.getValues().contacts?.map((e) => (
                <div
                  className="flex gap-4 items-center w-full  justify-between"
                  key={e.displayname}
                >
                  <span> {e.displayname}</span>
                  <span> {e.phone}</span>
                  <div className="grow"></div>
                  <button
                    type="button"
                    onClick={() => {
                      _removeContact(e.phone);
                    }}
                    className="btn  outlined"
                  >
                    {" "}
                    supprimer
                  </button>
                </div>
              ))}
            </div>
            <div className="flex items-end gap-4 w-full">
              <div className="grid grow  grid-cols-1 w-full lg:grid-cols-2 gap-3">
                <AppTextInput
                  value={contactForm.displayname}
                  error={contactForm.errorDisplayname}
                  onChange={(e) => {
                    setContactForm({
                      displayname: e.target.value,
                      errorDisplayname: undefined,
                    });
                  }}
                  label={"Nom Complet"}
                />
                <AppTextInput
                  error={contactForm.errorPhone}
                  value={contactForm.phone}
                  onChange={(e) => {
                    setContactForm({
                      phone: e.target.value,
                      errorPhone: undefined,
                    });
                  }}
                  label={"Téléphone"}
                />
              </div>

              <button
                type="button"
                onClick={() => {
                  _addContact();
                }}
                className="outline  px-3 py-1.5 rounded-md "
              >
                Ajouter
              </button>
            </div>
          </div>
        </div>
      </div>
      <ApplicationFooter {...props} />
    </form>
  );
};
