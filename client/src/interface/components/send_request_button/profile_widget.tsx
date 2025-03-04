import { SecurityApi } from "../../../core/api/security.api";
import { AppSvg } from "../utils/app_svg";
import { SvgAssets } from "../../../utils/svg_assets";

export const ProfileWidget = () => {
  const profile = SecurityApi.useProfileQuery();
  return (
    <>
      {profile.isSuccess && (
        <>
          <div className="flex outline  px-3 py-2 rounded-md items-center gap-3">
            <span>{profile.data.data.customer?.displayname ?? ""}</span>
            <AppSvg
              {...SvgAssets.agent}
              className="size-8 fill-green-300 stroke-1 stroke-black/60"
            />
          </div>
        </>
      )}
    </>
  );
};
