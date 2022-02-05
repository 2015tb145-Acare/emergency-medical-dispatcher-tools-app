## Tips and tricks

To avoid wasting time, spend more doing research and a lot has "push"

- How to use the react-router-dom (v6) library on gitlab pages ?

```javascript
// src/components/app.js
<BrowserRouter basename={process.env.PUBLIC_URL}>
  <App />
</BrowserRouter>
```

```yaml
# .gitlab-ci.yml
# stages: build
variables:
  PUBLIC_URL: "/your-project-name"
```

```yaml
# .gitlab-ci.yml
# satges: pages:
script:
  - cp public/index.html public/404.html # Redirect not found page
```

- How to fix the error "Error: useRoutes() may be used only in the context of a component." in react-scripts test

```javascript
// src/components/app.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

<Router basename={process.env.PUBLIC_URL}>// app code here</Router>;
```
