import { Select } from "@mantine/core";
import { AppDateInput, AppSelect, AppTextInput } from "../../utils/text_input";
import { LocationType } from "./location_type";
import { ApplicationFooter } from "./application_footer";
import { ApplicationPageProps } from "./application_page_props";
import { FC, useEffect } from "react";
import { isNotEmpty, useForm } from "@mantine/form";
import { RoadTripInfoDto } from "../../../../core/model/application";
import { TripReasonList } from "../../../../core/data/trip_reason";
import { getFormInputAttr } from "../../utils/get_form_input_attribute";
import { PlaceAddressInput } from "../../utils/google_place_address";
import { ApplicationApi } from "../../../../core/api/application.api";
const styles = {
  title: "text-2xl font-bold",
  gridInput: "grid grid-cols-1 gap-3 lg:grid-cols-2",
};
export const TripInfo: FC<ApplicationPageProps> = ({ next, ...props }) => {
  const [addRoadTrip, addRoadTripState] =
    ApplicationApi.useAddRoadTripInfoMutation();
  const form = useForm<RoadTripInfoDto>({
    initialValues: {
      motif: "",
      arrivalLocationType: "air",
      departureLocationType: "air",
    },
    validate: {
      arrivalLocationCompanyIdentify: isNotEmpty(),
      arrivalDate: isNotEmpty(),
      arrivalFrom: isNotEmpty(),
      arrivalLocationCompanyName: isNotEmpty(),
      arrivalLocationType: isNotEmpty(),
      motif: isNotEmpty(),
    },
  });
  const _onsubmit = form.onSubmit((data) => {
    console.log(data);
    addRoadTrip(data);
  });
  useEffect(() => {
    if (addRoadTripState.isSuccess) {
      next();
    }
  }, [addRoadTripState]);
  return (
    <form
      onSubmit={_onsubmit}
      className="  h-full min-h-[80vh]  flex flex-col  "
    >
      <div className="flex flex-col  gap-5">
        <div className="flex flex-col gap-3 ">
          <h2 className={styles.title}>Motif Du Voyage</h2>
        </div>
        {JSON.stringify(form.errors)}
        <AppSelect
          label="motif du voyage"
          style={{ zIndex: 100 }}
          withAsterisk
          {...getFormInputAttr({ form, path: "motif" })}
          data={TripReasonList.map((e) => ({ value: e, label: e })).concat({
            label: "Choisir un motif",
            value: "",
          })}
        />
        <div className="flex flex-col gap-6">
          <h2 className={styles.title}>Details D'arrivé</h2>
          <div className={styles.gridInput}>
            <AppTextInput
              withAsterisk
              {...getFormInputAttr({ form, path: "arrivalFrom" })}
              label={"Pay D origine"}
            />
            <AppDateInput
              withAsterisk
              {...getFormInputAttr({ form, path: "arrivalDate" })}
              label={"Date de d arrivé"}
            />
          </div>
          <LocationType
            companyName={{
              withAsterisk: true,
              ...getFormInputAttr({ form, path: "arrivalLocationCompanyName" }),
            }}
            companyType={{
              withAsterisk: true,
              setValue: (val) => {
                form.setFieldValue("arrivalLocationType", val);
              },
              ...getFormInputAttr({ form, path: "arrivalLocationType" }),
            }}
            companyIdentity={{
              withAsterisk: true,

              ...getFormInputAttr({
                form,
                path: "arrivalLocationCompanyIdentify",
              }),
            }}
          />
        </div>
        <div className="flex flex-col gap-6">
          <h2 className={styles.title}>Details De Depart</h2>
          <div className={styles.gridInput}>
            <AppTextInput
              {...getFormInputAttr({ form, path: "departureTo" })}
              label={"Pay D' accueil"}
            />
            <AppDateInput label={"Date de Depart"} />
          </div>
          <LocationType
            companyName={{
              ...getFormInputAttr({
                form,
                path: "departureLocationCompanyName",
              }),
            }}
            companyType={{
              setValue: (val) => {
                form.setFieldValue("arrivalLocationType", val);
              },
              ...getFormInputAttr({ form, path: "departureLocationType" }),
            }}
            companyIdentity={{
              ...getFormInputAttr({
                form,
                path: "departureLocationCompanyIdentify",
              }),
            }}
          />
        </div>
        <div className="flex flex-col gap-6">
          <h2 className={styles.title}>Adresse au Senegal</h2>

          <PlaceAddressInput form={form} />
          <Select data={["orange", "pome "]} />
        </div>
      </div>
      <ApplicationFooter {...props} />
    </form>
  );
};
