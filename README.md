# Requirement

Make sure have have [`node`](https://nodejs.org/en) installed on your machine.
Run these fowllowing commands after cloning/fetching it on your machine:

```bash
# Install dependencies
npm install

# Run the project in development mode
npm run dev
```

## Directories and components naming convention

- Utilize plulral form and all lowercase for directory names (e.g., assets, components, utils)

- For naming components, please follow [**`PascalCase`**](https://www.theserverside.com/definition/Pascal-case#:~:text=Pascal%20case%20%2D%2D%20or%20PascalCase,names%20to%20include%20blank%20spaces.) rule for code clarity and maintainability.

- If you have static components, store them inside **components** directory.

## Commit message convention

- Utilize [**`commitlint`**](https://github.com/conventional-changelog/commitlint) to enforce commit messgae standards:
  - `chore`: Small changes or initialization (e.g., project setup, adding packages).
  - `build`: Changes that affect the build system or external dependencies (example scopes: yarn, ppnm, npm)
  - `ci`: Changes to CI (configuration item) configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
  - `docs`: Documentation-only changes.
  - `feat`: Introduction of a new feature.
  - `fix`: Bug fixes.
  - `perf`: Code changes aimed at improving performance.
  - `refactor`: Code changes that neither fix a bug nor introduce a feature.
  - `revert`: Revert previous changes.
  - `style`: Changes that do not affect code meaning (e.g., formatting, whitespace).
  - `test`: Addition or correction of tests.

## Branch naming standard

In this project, it is totally free to name branches as contributors see it fit. However, to enhance code

### Code Flow Branches ( Permanent Branches )

There are 3 kinds of permanently avaiable branch name that contributors need to be aware of:

- **`dev`** (development): For new features and bug fixes.
- **`test`** (testing): Contains all codes for testing.
- **`main`** (production): The production branch.

### Temporary Branches

There are also disposable branches that are created and deleted by need of dev or deployer.

- **`feature`**: New module or use case development (e.g., feature/integrate-swagger). This branch is created based on the current development branch. When all changes are **_Done_**, a Pull Request/Merge Request is needed to put all of these to the development branch. Examples:
  - feature/integrate-swagger
  - feature/JIRA-1234
  - feature/JIRA-1234_support-dark-theme
- **`bufix`**: Fixes for rejected code changes post-release or demo. Examples:
  - bugfix/more-gray-shades
  - bugfix/JIRA-1444_gray-on-blur-fix
- **`hotfix`**: Immediate fixes for blockers or critical issues. hotfix does not follow the scheduled integration of code and could be merged directly to the production branch, then on the development branch later. Example:
  - hotfix/disable-endpoint-zero-day-exploit
  - hotfix/increase-scaling-threshold
- **`experimental`**: Branch for new features or ideas not part of a release or sprint. Example:
  - experimental/dark-theme-support
- **`build`**: Branch for creating build artifacts or code coverage runs. Example:
  - build/jacoco-metric
- **`release`**: A branch for tagging a specific release version. Example:
  - release/myapp-1.01.123
- **`merge`**: Temporary branch for resolving merge conflicts or finalizing feature merges. This can also be used if two branches of a feature being worked on by multiple developers need to be merged, verified and finalized. Example:
  - merge/dev_lombok-refactoring
  - merge/combined-device-supportmerge/dev_lombok-refactoring

# Learn more

You can go to [tailwindcss](https://tailwindcss.com/), [React router dom](https://reactrouter.com/en/main) and [react](https://react.dev/) for more details.
