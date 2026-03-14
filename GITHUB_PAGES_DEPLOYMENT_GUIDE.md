# Deploying a React App to GitHub Pages (Fresh Setup)

Hosting a "Create React App" (CRA) portfolio on GitHub Pages is completely free and easy. If you are setting up a fresh project for GitHub pages deployment in the future, follow these exact steps.

### Step 1: Install the `gh-pages` package
Open your terminal in your project directory and run the following command to install the deployment module as a development dependency:
```bash
npm install gh-pages --save-dev
```

### Step 2: Update `package.json` Properties
Open your `package.json` file and make two critical modifications:

**1. Add a `homepage` URL** to the very top (right below `private: true`):
```json
"homepage": "https://<your-username>.github.io/<your-repository-name>", 
```
*(For example: `https://bhupatipradhan.github.io/Bhupati-dev`)*

**2. Add deployment scripts** inside the existing `"scripts"` block:
```json
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

> [!IMPORTANT]
> The `predeploy` script automatically runs before `deploy` to ensure that you are always deploying the absolute latest version of your code.

### Step 3: Fix Static Image / Asset Paths!
When hosting on GitHub pages, your website lives at a sub-path (`/repo-name/`), not the root domain (`/`). 

If you link images or resumes using absolute root paths (like `<img src="/my-photo.jpg" />`), **they will break on GitHub**. 

You MUST prefix any files in your `public` folder with `process.env.PUBLIC_URL` in your React code:
```jsx
// ❌ WRONG (Leaves a broken image icon on Github Pages)
<img src="/my-photo.jpg" />

// ✅ CORRECT (Automatically fixes the path!)
<img src={`${process.env.PUBLIC_URL}/my-photo.jpg`} />
```

### Step 4: Initialize Git (If you haven't already)
If this is a completely fresh folder that isn't connected to GitHub yet, run:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repository-name>.git
git push -u origin main
```

### Step 5: Deploy the Application
Finally, run the new deploy script we created:
```bash
npm run deploy
```

This will:
1. Automatically run `npm run build` (creating an optimized production build).
2. Create a new branch in your repository named `gh-pages`.
3. Push ONLY the built code to that branch.

### Step 6: Enable GitHub Pages
1. Go to your repository on **GitHub.com**.
2. Click **Settings** ⚙️ > **Pages** (on the left sidebar).
3. Under **Source**, ensure it is set to **Deploy from a branch**.
4. Under **Branch**, select `gh-pages` from the dropdown and click **Save**.

Wait 1–3 minutes, and your site will be permanently live at your `homepage` URL!

> [!TIP]
> Whenever you make future code changes, just run `npm run deploy` again. GitHub will automatically update your live site within 60 seconds!
