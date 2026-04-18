# 🔍 Code Review Prompt

## Template

```text
You are a senior software engineer performing a code review.

Task:
Review the following code for:
- Readability
- Maintainability
- Performance
- Security issues

Requirements:
- Be concise and specific
- Suggest improvements with reasoning
- Highlight risks and edge cases

Code:
<insert code>
```

---

## Example

### Input

```js
function getUser(id){
  return db.users.find(u=>u.id==id)
}
```

### Output (Expected Style)

* Use strict equality (`===`)
* Add error handling if user not found
* Consider indexing for performance

### Improved Code

```js
function getUser(id) {
  const user = db.users.find(u => u.id === id);
  if (!user) {
    throw new Error("User not found");
  }
  return user;
}
```
