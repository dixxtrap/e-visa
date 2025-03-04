
import { SecurityApi } from "../../../core/api/security.api"
import { SvgAssets } from "../../../utils/svg_assets"
import { Fragment, useId } from "react"

export const UserProfile = () => {
    const profile = SecurityApi.useProfileQuery()
    return (
        <div>
            {profile.isSuccess && <div className="outline-slate-300 px-4 outline p-2 rounded-md flex gap-3">
                <span>{profile.data.data.user?.displayname ?? "no user"}</span>
                <div className="outline  outline-slate-500 rounded-full">
                <svg viewBox="0 0 24 24"  className="size-6 stroke-slate-500 fill-slate-300">
                        {SvgAssets.agent.paths.map(e => <Fragment key={useId()}>{ e}</Fragment>)}
                </svg>
                </div>

            </div>}
        </div>
    )
}


