/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/dummy_backend/couponsManager`; params?: Router.UnknownInputParams; } | { pathname: `/mycoupons`; params?: Router.UnknownInputParams; } | { pathname: `/unctracker`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `/dummy_backend/couponsManager`; params?: Router.UnknownOutputParams; } | { pathname: `/mycoupons`; params?: Router.UnknownOutputParams; } | { pathname: `/unctracker`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/_sitemap${`?${string}` | `#${string}` | ''}` | `/dummy_backend/couponsManager${`?${string}` | `#${string}` | ''}` | `/mycoupons${`?${string}` | `#${string}` | ''}` | `/unctracker${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/dummy_backend/couponsManager`; params?: Router.UnknownInputParams; } | { pathname: `/mycoupons`; params?: Router.UnknownInputParams; } | { pathname: `/unctracker`; params?: Router.UnknownInputParams; };
    }
  }
}
