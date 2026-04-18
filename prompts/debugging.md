# 🐞 Debugging Prompt

## Template

```text
You are an experienced backend engineer.

Task:
Identify the root cause of the issue.

Requirements:
- Explain clearly
- Provide minimal fix
- Suggest prevention strategy

Context:
<error/logs>

Code:
<insert code>
```

---

## Example

### Context

```text
TypeError: Cannot read property 'name' of undefined
```

### Insight

* Likely accessing object before validation
* Missing null check

### Fix

```js
if (user && user.name) {
  console.log(user.name);
}
```
