export const prompts = {
  "review": `
You are a senior software engineer performing a code review.

Task:
Review the code for readability, performance, and security.

Requirements:
- Be specific
- Suggest improvements
- Highlight risks

Code:
<paste code here>
`,

  "debug": `
You are a senior engineer.

Task:
Identify root cause of the issue.

Requirements:
- Explain clearly
- Provide fix
- Suggest prevention

Context:
<error/logs>

Code:
<code here>
`,

  "refactor": `
You are a senior engineer.

Task:
Refactor for production readiness.

Constraints:
- No behavior change
- Improve structure

Code:
<code here>
`
};