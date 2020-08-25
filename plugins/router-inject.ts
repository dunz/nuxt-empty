import {Context} from '@nuxt/types';
import {ErrorHandler, RawLocation} from 'vue-router/types/router';
// @ts-ignore
import {isArray} from 'lodash';

export type RouterTo = RawLocation | [RawLocation, string];

const getToArray = (to: RouterTo): [RawLocation, string] => {
    // @ts-ignore
    return isArray(to) ? [to[0], to[1]] : [to, undefined];
};

export default ({app: {localePath, router}}: Context, inject: any) => {
    inject('routerPush', (to: RouterTo, onComplete?: Function, onAbort?: ErrorHandler): void => {
        const [location, locale] = getToArray(to);
        router.push(localePath(location, locale), onComplete, onAbort);
    });

    inject('routerReplace', (to: RouterTo, onComplete?: Function, onAbort?: ErrorHandler): void => {
        const [toLocation, toLocale] = getToArray(to);
        router.replace(localePath(toLocation, toLocale), onComplete, onAbort);
    });
};

declare module '@nuxt/types' {
    interface Context {
        $routerPush(to: RouterTo, onComplete?: Function, onAbort?: ErrorHandler): void;
        $routerReplace(to: RouterTo, onComplete?: Function, onAbort?: ErrorHandler): void;
    }
}

declare module 'vue/types/vue' {
    interface Vue {
        $routerPush(to: RouterTo, onComplete?: Function, onAbort?: ErrorHandler): void;
        $routerReplace(to: RouterTo, onComplete?: Function, onAbort?: ErrorHandler): void;
    }
}
