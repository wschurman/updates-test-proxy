# Example proxy for EAS Update manifests

- `staging-u.expo.dev/<project_id>` is proxied by `./app/[appid]+api.tsx`
- `staging-u.expo.dev/update/<update_id>` is proxied by `./app/update/[updateid]+api.tsx`

(would need to update to just be `u.expo.dev` for production EAS Update)