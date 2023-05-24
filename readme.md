# Only Branch

Run (npm) scripts only on a certain branch

```bash
only-branch main && npm run deploy
```

## Why

For larger projects, something like github actions can be defined to only run on a specific branch (or even tag). For smaller projects (think simple websites), where I usually deploy directly from my computer, I want the same protection against accidentally running `npm run stage` on the `main` branch or `npm run deploy` on the dev branch.

## Usage Example

`package.json`

```json
{
  "scripts": {
    "deploy": "only-branch main && your-deploy-script",
    "stage": "only-branch dev && your-stage-script"
  }
}
```
