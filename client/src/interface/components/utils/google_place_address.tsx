import { Checkbox } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import { useEffect, useState } from "react";
import { setKey, fromLatLng } from "react-geocode";

import { useDebouncedValue } from "@mantine/hooks";
import { AppTextInput } from "./text_input";
export const PlaceAddressInput = ({
  form,
  withLatLng = false,
}: {
  form: UseFormReturnType<any, any>;
  withLatLng?: boolean;
}) => {
  setKey(import.meta.env.VITE_GOOGLE_KEY);
  const [useMyPosition, setUseMyPosition] = useState<boolean>(false);
  const [isFirst, setIsFirst] = useState<boolean>(true);
  const [address, setAddress] = useState(form.getValues().address??'');

  const [prediction, setPredictiuon] = useState<Array<any>>([]);
  const [debouncedAddress] = useDebouncedValue(address, 200);
  const [isSelected, setIsSelected] = useState(false);
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      fromLatLng(
        position.coords.latitude,
        position.coords.longitude,
        "",
        "",
        "",
        "APPROXIMATE"
      ).then((pred) => {
        const address: any = (pred.results as []).find(
          (e: any) => e.geometry.location_type === "APPROXIMATE"
        );
        form.setValues({ address: address.formatted_address });
        if (withLatLng === true) {
          form.setFieldValue("latitude", position.coords.latitude);
          form.setFieldValue("longitude", position.coords.longitude);
        }
        console.log(
          "=====================prediction====================",
          address.formatted_address
        );
      });
    });
  };

  useEffect(() => {
    if (debouncedAddress?.length > 2 && !isFirst) {
      const headers: Headers = new Headers();
      headers.append("Content-Type", "application/json");
      headers.append("X-Goog-Api-Key", import.meta.env.VITE_GOOGLE_KEY);
      fetch("https://places.googleapis.com/v1/places:autocomplete", {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
          input: debouncedAddress,
        }),
      }).then(async (val) => {
        val.json().then((data) => {
          const places = data.suggestions.map((e: any) => ({
            placeId: e.placePrediction.placeId,
            placeName: e.placePrediction.text.text,
          }));
          console.log(places);
          setPredictiuon(places);
        });
      });
    }
  }, [debouncedAddress]);
  const getLocationById = (id: string, name: string) => {
    const headers: Headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("X-Goog-FieldMask", "id,displayName,location");
    headers.append("X-Goog-Api-Key", import.meta.env.VITE_GOOGLE_KEY);
    return fetch(`https://places.googleapis.com/v1/places/${id}`, {
      headers,
    }).then((val) => {
      val.json().then((data) => {
        console.log(data.location);
        if (withLatLng === true) {
          form.setFieldValue("latitude", data.location.latitude);
          form.setFieldValue("longitude", data.location.longitude);
        }
        form.setFieldValue("address", name);
        setIsSelected(true);
        setAddress(name);
      });
    });
  };
  return (
    <>
      {/* <Checkbox  onChange={getLocation}></Checkbox> */}
      <Checkbox
        checked={useMyPosition}
        variant="filled"
        c={"black"}
        color="black"
        pb={4}
        label="utiliser mon adresse actuelle"
        classNames={{ label: "text-slate-900" }}
        onChange={(event) => {
          setIsFirst(false);
          setUseMyPosition(event.currentTarget.checked);
          if (event.currentTarget.checked == true) getLocation();
          else form.setFieldValue("address", "");
        }}
      />
      {useMyPosition ? (
        <AppTextInput value={form.getValues().address} label="addresse" />
      ) : (
        <>
          <AppTextInput
            label="addresse"
            value={address ?? form.getValues().address}
            onChange={(e) => {
              setIsSelected(false);
              setIsFirst(false);
              setAddress(e.target.value);
            }}
          />
          {!isFirst && isSelected == false && address.length > 3 && (
            <div className="ring-1 ring-slate-300/60 rounded-md p-2 flex flex-col  gap-0.5">
              {[
                prediction.map((e) => (
                  <div
                    key={e.placeId}
                    onClick={() => {
                      getLocationById(e.placeId, e.placeName);
                    }}
                    className="text-sm py-2 hover:bg-slate-200/20 "
                  >
                    {e.placeName}
                  </div>
                )),
              ]}
            </div>
          )}
        </>
      )}
    </>
  );
};
