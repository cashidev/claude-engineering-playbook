# 🔐 Security Audit Prompt

## Template

```text
You are a security engineer.

Task:
Audit for vulnerabilities.

Focus:
- Input validation
- Auth issues
- Data leaks
```

---

## Example

### Issue

* SQL injection risk

### Fix

```sql
SELECT * FROM users WHERE id = ?
```
