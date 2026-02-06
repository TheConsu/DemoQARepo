# DemoQA Playwright Test Suite
Automated end-to-end tests for [DemoQA](https://demoqa.com) using [Playwright](https://playwright.dev/).  
This suite covers multiple DemoQA sections (Forms, Elements, Alerts, Widgets, etc.) with a modular structure (specs, tasks, UI, questions).

---

## Prerequisites
- [Node.js](https://nodejs.org/) (LTS recommended, e.g. 18.x or 20.x)
- npm (comes with Node.js)
- Git

---

## Installation

Clone the repository and install dependencies:

```bash
git clone <https://github.com/TheConsu/DemoQARepo.git>
cd <DemoQARepo>
npm ci
```

---

## Dependencies

Initialize Playwright in your project:

```bash
##Install Playwright
npm init playwright@latest

##Install Serenity/JS modules
npm install --save-dev \
 @serenity-js/core \
 @serenity-js/assertions \
 @serenity-js/web \
 @serenity-js/playwright \
 @serenity-js/playwright-test \
 @serenity-js/serenity-bdd \
 @serenity-js/console-reporter

##Install Playwright browsers and system dependencies
npx playwright install --with-deps
```

---

## Running tests
```bash
##Run all tests
npx playwright test

##Run tests in parallel with 4 workers
npx playwright test --workers=4

##Run a specific test file
##Case 1
npx playwright test tests/specs/demoqa-home.spec.ts

##Case 2
npx playwright test tests/specs/demoqa-forms-practice-form.spec.ts

##Case 3
npx playwright test tests/specs/demoqa-elements-textbox.spec.ts

##Case 4
npx playwright test tests/specs/demoqa-alerts.spec.ts

##Case 5
npx playwright test tests/specs/demoqa-accordion.spec.ts
```

---

## Reports
After a run, Playwright generates a report. To open it:
```bash
npx playwright show-report
```

---

## Project Structure
tests/
  specs/        # Test specifications (end-to-end scenarios)
  tasks/        # Reusable tasks (navigation, interactions)
  ui/           # Page objects (selectors, elements)
  questions/    # Assertions and output checks
.github/
  workflows/    # CI/CD pipeline configs

---

## CI/CD
GitHub Actions workflow (```.github/workflows/playwright.yml```) runs tests automatically on:
- Pushes to main or master
- Pull requests targeting main or master

Artifacts (HTML reports) are uploaded and retained for 30 days.

---

## License
This project is for educational/demo purposes.