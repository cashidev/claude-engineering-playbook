# 🧪 Test Generation Prompt

## Template

```text
You are a test engineer.

Task:
Write unit tests.

Requirements:
- Cover edge cases
- Include failure scenarios
- Follow best practices
```

---

## Example (Jest)

```js
describe("sum", () => {
  it("adds numbers correctly", () => {
    expect(sum(1, 2)).toBe(3);
  });

  it("handles negative numbers", () => {
    expect(sum(-1, -2)).toBe(-3);
  });
});
```
