# 🔄 Refactoring Prompt

## Template

```text
You are a senior engineer.

Task:
Refactor for production readiness.

Constraints:
- No functionality changes
- Improve readability and structure
- Optimize for scalability

Output:
- Refactored code
- Summary of changes
```

---

## Example

### Before

```js
let x = a + b;
let y = x * 2;
return y;
```

### After

```js
function calculateResult(a, b) {
  return (a + b) * 2;
}
```

### Improvements

* Extracted function
* Improved naming
* Reduced unnecessary variables
