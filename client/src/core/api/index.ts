
import { SecurityApi } from "./security.api";
import { BaseApi } from "./base.api";
import { configureStore } from "@reduxjs/toolkit/react";
import { ApplicationApi } from "./application.api";
const store = configureStore({
    reducer: {
        [SecurityApi.reducerPath]: SecurityApi.reducer,
        [BaseApi.reducerPath]: BaseApi.reducer,
        [ApplicationApi.reducerPath]: ApplicationApi.reducer

    },
    middleware: (gDM) =>
        gDM().concat(
            SecurityApi.middleware,
            BaseApi.middleware,
            ApplicationApi.middleware,

        )
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
