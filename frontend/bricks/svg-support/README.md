# Brick: SVG Support

Use this brick in combination with the `CMSVG` content type to support SVG rendering.

## Installation
Add the path to this brick to the `packages`section in your `<blueprint-workspace-root>/frontend/pnpm-workspace.yaml`:

**pnpm-workspace.yaml**
```yaml
packages:
  ...
  - "../modules/extensions/svg/frontend/bricks/svg-support"
```

Afterwards you can add a dependency to the brick in your theme `package.json`.

**my-theme/package.json**
```json
{
  "name": "@coremedia-examples/chefcorp-theme",
  ...
  "dependencies": {
    ...
    "@coremedia/brick-svg-support": "^1.0.0",
    ..
  },
  ...
}
```
  
