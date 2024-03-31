import { computed, signal } from "@angular/core";
import { Observable, finalize } from "rxjs"

export const useLoading = () => {
    const loading = signal(false);
    return {
        state: computed(loading),
        onLoading: <T>(obs: Observable<T>) => {
            loading.set(true);
            return obs.pipe(finalize(() => loading.set(false)));
        }
    }
}