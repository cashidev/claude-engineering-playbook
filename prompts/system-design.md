# 🧱 System Design Prompt

## Template

```text
You are a senior system design expert.

Task:
Design a scalable system.

Requirements:
- Architecture diagram (text)
- Components
- Trade-offs
- Scaling strategy
```

---

## Example (URL Shortener)

* API Layer
* Database (NoSQL)
* Cache (Redis)
* Load balancer

### Considerations

* High read traffic → caching
* Unique ID generation
