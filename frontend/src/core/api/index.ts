
import { BaseApi } from "./base.api";
import { configureStore } from "@reduxjs/toolkit/react";
import { SecurityApi } from "./security.api";
import { PermissionApi } from "./permission.api";
import { RoleApi } from "./role.api";
import { UserApi } from "./user.api";
import { VisaTypeAPi } from "./visa_type.api";
const store = configureStore({
    reducer: {
        [SecurityApi.reducerPath]: SecurityApi.reducer,
        [BaseApi.reducerPath]: BaseApi.reducer,
        [PermissionApi.reducerPath]:PermissionApi.reducer,
        [RoleApi.reducerPath]:RoleApi.reducer,
        [UserApi.reducerPath]:UserApi.reducer,
        [VisaTypeAPi.reducerPath]:VisaTypeAPi.reducer,

    },
    middleware: (gDM) =>
        gDM().concat(
            SecurityApi.middleware,
            BaseApi.middleware,
            PermissionApi.middleware,
            RoleApi.middleware,
            UserApi.middleware,
            VisaTypeAPi.middleware,

        )
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
