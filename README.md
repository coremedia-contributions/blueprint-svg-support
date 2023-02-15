![CoreMedia Content Cloud Version](https://img.shields.io/static/v1?message=2207&label=CoreMedia%20Content%20Cloud&style=for-the-badge&labelColor=666666&color=672779 "This badge shows the CoreMedia version(s) this project is compatible with.
Please read the versioning section of the project to see what other CoreMedia versions are supported and how to find them.")
![Status](https://img.shields.io/static/v1?message=active&label=Status&style=for-the-badge&labelColor=666666&color=2FAC66
"The status badge describes if the project is maintained. Possible values are active and inactive.
If a project is inactive it means that the development has been discontinued and won't support future CoreMedia versions."
)

# SVG Support for CoreMedia Blueprint
This extension adds SVG support to the CoreMedia Blueprint.

---

## Installation
The extension can be installed in your Blueprint workspace in two ways. Either by adding this repository as a Git submodule or by copying the code directly. The recommended approach is to add the extension as a Git submodule.

### Install Option A - Git Submodule
Add this repository or your fork as a Git submodule to your existing CoreMedia Blueprint workspace in the `modules/extensions` folder.

This way, you will be able to merge new commits made in this repo back to your fork.

From the project's root folder, clone this repository as submodule into the `modules/extensions` folder. Make sure to use the branch name that matches your workspace version.

```shell
git submodule add https://github.com/coremedia-contributions/blueprint-svg-support.git modules/extensions/svg
```

Use the extension tool in the root folder of the project to link the modules into your workspace.
```shell
mvn -f workspace-configuration/extensions extensions:sync -Denable=svg
```

### Install Option B - Code Copy
Download a copy of this repository and extract the files into your Blueprint workspace to `modules/extensions/svg`.

### Frontend Code
This repository also contains a custom brick that needs to be added to your frontend.
Add a reference to the `svg-support` brick to the `frontend/workspace.yaml`.

```yaml
packages:
  ...
  - "../modules/extensions/svg/frontend/bricks/svg-support"
```

Afterwards you can include the brick in your theme by adding the following dependency in the theme `package.json`.

```json
"@coremedia/brick-svg-support": "^1.0.0",
```

---


